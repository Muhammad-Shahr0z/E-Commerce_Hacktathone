"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../interface";
import { FaBox, FaChartBar, FaList, FaUser } from "react-icons/fa";

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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col p-4 fixed top-0 left-0 h-full">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <nav className="flex flex-col gap-4">
          <a href="#" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaChartBar /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaBox /> Products
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaList /> Categories
          </a>
          <a href="#" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaUser /> Users
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 ml-64 overflow-auto">
        <h1 className="text-3xl font-semibold mb-4">Admin Panel</h1>

        {/* Summary Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-4 shadow rounded flex items-center gap-4">
            <FaBox className="text-3xl text-blue-500" />
            <div>
              <h2 className="text-xl font-semibold">Total Products</h2>
              <p className="text-gray-500">{products.length}</p>
            </div>
          </div>
          {Object.keys(categoryCounts).map((category) => (
            <div key={category} className="bg-white p-4 shadow rounded flex items-center gap-4">
              <FaList className="text-3xl text-green-500" />
              <div>
                <h2 className="text-xl font-semibold">{category}</h2>
                <p className="text-gray-500">{categoryCounts[category]} items</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Table Section */}
        <div className="overflow-x-auto bg-white p-6 shadow rounded">
          <h2 className="text-xl font-medium mb-4">Products</h2>
          <table className="min-w-full border border-gray-300 rounded">
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
                  <td className="p-4">{product.rating?.rate || "N/A"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
