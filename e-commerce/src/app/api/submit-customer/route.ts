import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-01-01",
  token: process.env.SANITY_TOKEN, 
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Check if the email already exists
    const query = `*[_type == "customer" && email == $email]{ email }`;
    const params = { email: body.email };
    const existingCustomer = await client.fetch(query, params);

    if (existingCustomer.length > 0) {
      return NextResponse.json({
        success: false,
        error: "Customer with this email already exists",
      });
    }

    // Create a new customer if not exists
    const result = await client.create({
      _type: "customer",
      ...body,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("Sanity Error:", error);
    return NextResponse.json({
      success: false,
      error: "Unable to create customer. Please try again.",
    });
  }
}
