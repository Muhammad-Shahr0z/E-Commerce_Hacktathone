import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../interface";
import ProductCart from "./ProductCart";

export default function ProductGrid({ products, title }: { products: Product[]; title: string }) {
  return (
    <div className="max-w-screen-xl mx-auto p-4 mb-12">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide text-[#2A254B]">
        {title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
      <ProductCart key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}
