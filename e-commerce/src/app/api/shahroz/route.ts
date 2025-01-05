import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

export async function GET(){

const fetchResponse = await client.fetch(`*[_type == "products"]{
      name,category,price,
        "slug":slug.current,
        "imageUrl": image.asset->url
  
    }`)
    return NextResponse.json(fetchResponse)
}

