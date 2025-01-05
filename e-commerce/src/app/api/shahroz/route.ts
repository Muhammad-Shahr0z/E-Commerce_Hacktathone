import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET() {
    const Products = await client.fetch(`*[_type == "products"]{
        name,
        category,
        price,
        "slug":slug.current,
        "imageUrl": image.asset->url
    }`);

   
    const response = {
        createdBy: "Muhammad Shahroz", 
        data: Products,         
    };

    // Response return karo
    return NextResponse.json(response);
}
