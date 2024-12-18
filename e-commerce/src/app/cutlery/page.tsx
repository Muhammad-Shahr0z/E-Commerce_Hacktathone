"use client"

import { useAtom } from "jotai";
import Image from "next/image";
import { productsData } from "../store";
import Link from "next/link";

interface Product {
  image: string;
  name: string;
  price: number;
  id: number;
}



export default function TablesPage() {

  const [products, setProducts] = useAtom<Product[]>(productsData)
  return (
    <div className="max-w-screen-xl mx-auto p-4">
   <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide text-[#2A254B]">
  Cutlery Collection
</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(24,36).map((table, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            <Link href={`/products/${table.id}`}>
            <div className="relative w-full h-48">
              <Image
                src={table.image}
                alt={table.name}
                layout="fill"
                objectFit="cover"
                />
            </div>
                </Link>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{table.name}</h2>
              <p className="text-gray-700 mt-2">Price: €{table.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
