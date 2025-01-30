// /src/app/api/stripe/checkout/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Product } from '../../../../../interface';
import { saveOrderToSanity } from '@/utils/page';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

if (!stripeSecretKey) throw new Error("Stripe Secret Key is missing");
if (!baseUrl) throw new Error("Base URL is missing");

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-12-18.acacia",
});

export const POST = async (req: NextRequest) => {
  try {
    // Parse the request body
    const { addCart, billingDetails } = await req.json();

    // Validate addCart and billingDetails
    if (!addCart || !Array.isArray(addCart)) {
      return NextResponse.json({ error: "Invalid cart data" }, { status: 400 });
    }

    if (!billingDetails || typeof billingDetails !== "object") {
      return NextResponse.json({ error: "Invalid billing details" }, { status: 400 });
    }

    // Initialize total price and total quantity
    let totalPrice = 0;
    let totalItemsQuantity = 0;

    // Map cart items to Stripe line items
    const lineItems = addCart.map((item: Product) => {
      if (isNaN(item.Finalprice) || isNaN(item.Quantity)) {
        throw new Error(`Invalid price or quantity for item: ${item.name}`);
      }

      totalPrice += Math.round(item.Finalprice * item.Quantity * 100);
      totalItemsQuantity += item.Quantity;

      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [item.imageUrl],
            metadata: {
              heading: 'Product Details',
            },
          },
          unit_amount: Math.round(item.Finalprice * 100),
        },
        quantity: item.Quantity,
      };
    });

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
    });

    // Save the order to Sanity
    try {
      await saveOrderToSanity(billingDetails, addCart, totalPrice / 100);
    } catch (error) {
      console.error("Error saving order to Sanity:", error);
      return NextResponse.json({ error: "Failed to save order" }, { status: 500 });
    }

    // Return session ID
    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
};
