"use client";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../interface";
import { FaBox, FaChartBar, FaList, FaUser, FaBars, FaTimes, FaStar, FaSignOutAlt, FaHome } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Products from "./Products";

export default function AdminPanel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryCounts, setCategoryCounts] = useState<{ [key: string]: number }>({});
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const router = useRouter();

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

        // Category-wise product count
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

  // Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    router.push("/admin-login");
  };

  return (
    <div className="relative flex h-screen bg-gray-100">
  
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-64 bg-gray-800 text-white flex flex-col p-4 fixed top-0 left-0 h-full z-20`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white text-2xl md:hidden"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaHome /> Home
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaChartBar /> Dashboard
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaBox /> Products
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaList /> Categories
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaUser /> Customers
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded">
            <FaUser /> Orders
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded mt-auto text-red-500"
          >
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-64 overflow-auto z-10">
        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden p-2 text-gray-800"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        <h1 className="text-3xl font-semibold mb-4">Admin Panel</h1>

        {/* Summary Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
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
                <h2 className="text-xl font-semibold">{category.toUpperCase()}</h2>
                <p className="text-gray-500">{categoryCounts[category]} items</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Products product={product} key={product.id} />
          ))}
             {/* Watermark */}
      <div className="absolute inset-0 flex justify-center items-center text-blue-300 text-5xl font-bold pointer-events-none select-none z-0 opacity-50">
     Work in Progress By - Muhammad Shahroz
      </div>
        </div>
      </main>
    </div>
  );
}
