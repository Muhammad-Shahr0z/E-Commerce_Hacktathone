// /src/app/api/stripe/checkout/route.ts

import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Product } from '../../../../../interface';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion:"2024-12-18.acacia"
});


console.log('Stripe Secret Key VERCEL SHAHROZ:', process.env.STRIPE_SECRET_KEY);

export const POST = async (req: NextRequest) => {
  try {
    const cart = await req.json();
    let totalPrice = 0;
    let totalItemsQuantity = 0;


    const lineItems = cart.map((item:Product) => {
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
          unit_amount: Math.round(item.Finalprice * 100)
        },
        quantity:item.Quantity, 
      };
    });

  
    // console.log('Cart is:', cart);
    // console.log('Line Items:', lineItems);
    // console.log('Total Price:', totalPrice);
    // console.log('Total Items Quantity:', totalItemsQuantity);

   
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems, 
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

   
    
    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
  
    console.error('Error creating checkout session:', error);
    return NextResponse.json( { error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
};
