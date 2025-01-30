import { createClient } from "@sanity/client";
import { Billing, Product } from "../../interface";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

// Muhammad Shahroz: Function to save order to Sanity
export const saveOrderToSanity = async (
  billingDetails: Billing,
  cartItems: Product[],
  totalAmount: number
): Promise<void> => {
  try {
    // Muhammad Shahroz: Check if customer already exists by email + fullName combination
    const existingCustomer = await client.fetch(
      `*[_type == "customer" && email == $email && fullName == $fullName][0]`,
      { email: billingDetails.email, fullName: billingDetails.fullName }
    );

    let customer;

    // Muhammad Shahroz: If customer exists, update their information if necessary
    if (existingCustomer) {
      customer = existingCustomer;
      console.log("Customer already exists with the same email and name.");
    } else {
      // Muhammad Shahroz: Create new customer record if no matching email + name found
      customer = await client.create({
        _type: "customer",
        fullName: billingDetails.fullName,
        email: billingDetails.email,
        phoneNumber: billingDetails.phoneNumber,
        address: billingDetails.addressLine1, // Store addressLine1 in customer
        city: billingDetails.city,
      });
      console.log("Customer created:", customer);
    }

    // Muhammad Shahroz: Generate a custom orderId
    const lastOrder = await client.fetch(
      `*[_type == "order"] | order(_createdAt desc)[0]{orderId}`
    );

    // Muhammad Shahroz: Extract number from last orderId and increment
    const lastOrderNumber = lastOrder?.orderId
      ? parseInt(lastOrder.orderId.split("-")[1], 10)
      : 0;

    const newOrderId = `AvionOID-${(lastOrderNumber + 1)
      .toString()
      .padStart(2, "0")}`;

    // Muhammad Shahroz: Save order details with specific address
    const order = await client.create({
      _type: "order",
      orderId: newOrderId, // Muhammad Shahroz: Use custom orderId here
      customer: { _type: "reference", _ref: customer._id },
      items: cartItems.map((item) => ({
        _type: "orderItem",
        _key: Math.random().toString(36).substring(2, 11), // Unique key for each item
        name: item.name,
        image: item.imageUrl,
        quantity: item.Quantity,
        unitPrice: item.Finalprice,
        totalPrice: item.Finalprice * item.Quantity,
      })),
      totalAmount,
      orderDate: new Date().toISOString(),
      shippingAddress: `${billingDetails.addressLine1} ${
        billingDetails.addressLine2 ? billingDetails.addressLine2 : ""
      }`,
      status: "pending",
    });

    console.log("Order saved successfully:", order);
  } catch (error) {
    console.error("Error saving order to Sanity:", error);
    throw new Error("Failed to save order to Sanity");
  }
};
