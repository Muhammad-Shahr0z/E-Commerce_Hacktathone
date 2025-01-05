import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
    // Sanity se data fetch karo
    const fetchResponse = await client.fetch(`*[_type == "products"]{
        name,
        category,
        price,
        "slug":slug.current,
        "imageUrl": image.asset->url
    }`);

   
    const responseWithName = {
        createdBy: "Muhammad Shahroz", 
        data: fetchResponse,         
    };

    // Response return karo
    return NextResponse.json(responseWithName);
}
