"use client"


import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";

interface Product {
  category:string
  price:number,
  slug:string,
  imageUrl:string,
  name:string
}

export default function TablesPage() {

const [products, setProducts] = useState<Product[] | null>(null)
useEffect(() => {
  async function fetchData() {
    const query  = `*[_type == "products"]{
      name,category,price,
        "slug":slug.current,
        "imageUrl": image.asset->url
  
    }`
    const products:Product[] = await client.fetch(query)
    setProducts(products)
  }
  fetchData()
}, [])


if(!products){
  return <div className="flex flex-col gap-4 items-center justify-center h-[80vh]">
    <p className="text-2xl font-bold tracking-wider text-blue-600">Loading...</p>
    <div className="w-32 h-32 rounded-full border-t border-blue-600 animate-spin"></div>;
  </div>
}

  return (
    <div className="max-w-screen-xl mx-auto p-4">
   <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide text-[#2A254B]">
  Cutlery Collection
</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.filter((product:Product) => product.category === "cutlery").map((product:Product) =>(
          <div
            key={product.slug}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <Link href={`/products/${product.slug}`}>
            <div className="relative w-full h-48">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                />
            </div>
                </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-700 mt-2">Price: €{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
