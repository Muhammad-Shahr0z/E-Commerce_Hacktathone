"use client";

import { useEffect, useState } from "react";
import Card from "./ProductCart";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../interface";

interface Props {
  Heading: string;
}

const NewCeramic = (props: Props) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product" && category->name == 'decoration-items']{
          name,
          tags,
          price,
          stock,
          dimensions,
          id,
          description,
          discount,
          originalPrice,
          "categoryName": category->name,
          "slug": slug.current,
          "imageUrl": image.asset->url,
          rating 
        }`;

        const fetchedProducts: Product[] = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error fetching products. Please try again later.");
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-red-500 text-lg font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <main>
      <h1 className="clashDisplay text-center ml-6 xl:ml-0 md:text-[2rem] text-[20px] sm:text-start font-[400px] self-start md:self-center xl:self-start mb-3 md:mt-10 lg:mt-0">
        {props.Heading}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-6 md:px-8">
        {products.slice(0, 4).map((product: Product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default NewCeramic;
