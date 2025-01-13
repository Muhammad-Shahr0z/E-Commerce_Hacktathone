import Image from "next/image";
import Link from "next/link";

interface Product {
  category: string;
  price: number;
  slug: string;
  imageUrl: string;
  name: string;
}

export default function ProductGrid({ products, title }: { products: Product[]; title: string }) {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-8 text-center tracking-wide text-[#2A254B]">
        {title}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: Product) => (
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
