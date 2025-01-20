"use client"

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../interface";

export default function AdminPanel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryCounts, setCategoryCounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product"]{
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

        // Calculate category-wise product count
        const counts = fetchedProducts.reduce((acc, product) => {
          const category = product.categoryName || "Uncategorized";
          acc[category] = (acc[category] || 0) + 1;
          return acc;
        }, {} as { [key: string]: number });

        setCategoryCounts(counts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4">Admin Panel</h1>

      {/* Summary Section */}
      <div className="mb-6 p-4 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-xl font-medium">Product Summary</h2>
        <div className="flex gap-4">
          <p>Total Products: <span className="font-semibold">{products.length}</span></p>
          {Object.keys(categoryCounts).map((category) => (
            <p key={category} className="font-semibold">
              {category}: {categoryCounts[category]}
            </p>
          ))}
        </div>
      </div>

      {/* Product Table Section */}
      <div className="overflow-x-auto">
        <h2 className="text-xl font-medium mb-4">Products</h2>
        <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-4 text-left">Product Name</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Stock</th>
              <th className="p-4 text-left">Rating</th>
    
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-200">
                <td className="p-4">{product.name}</td>
                <td className="p-4">{product.categoryName}</td>
                <td className="p-4">${product.price}</td>
                <td className="p-4">{product.stock}</td>
                <td className="p-4">{product.rating.rate}</td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
