"use client";

import FilterBar from "@/app/components/FilterBar";
import ViewCollectionButton from "../components/ViewCollectionButton";
import { useAtom } from "jotai";
import { filterCatogory, inputValueAtom, productsData } from "../store";
import { client } from "@/sanity/lib/client";
import { useEffect, useState } from "react";
import { Product } from "../../../interface";
import ProductCart from "@/app/components/ProductCart";
import WidthWrapper from "../components/WidthWrapper";

export default function AllProducts() {
  const [inputValue] = useAtom(inputValueAtom);
  const [products, setProducts] = useAtom<Product[] | null>(productsData);
  const [selectedCategory] = useAtom(filterCatogory);
  const [isClient, setIsClient] = useState(false); // To handle client-side code

  useEffect(() => {
    // This ensures that window object is available only on client-side
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
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
        "slug":slug.current,
        "imageUrl": image.asset->url,
        rating
      }`;
      const fetchedProducts: Product[] = await client.fetch(query);
      setProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (isClient) {
      if (products) {
        // Scroll to 200px from the top after products are loaded
        window.scrollTo({
          top: 200,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }
  }, [isClient, products]);

  if (products == null) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg font-medium text-gray-700">
            Please wait, Loading Products.....
          </p>
        </div>
      </div>
    );
  }

  // Filter the products based on inputValue
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  // agar Search kia jayega to yeh wala code run hoga nichy wala nahi hoga
  if (inputValue !== "") {
    const hasResults = filteredProducts.length >0;

    return(
      <WidthWrapper>
        <FilterBar />
        <div className="px-4 py-8 flex flex-col">
          <h2 className="text-2xl self-start font-semibold my-5">
            Search Results
          </h2>
          {hasResults ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product: Product) => (
                <ProductCart key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-lg">No products found.</p>
          )}
        </div>
        <div className="justify-self-center">
          <ViewCollectionButton />
        </div>
      </WidthWrapper>
    );
  }

  return (
    <WidthWrapper>
      <FilterBar />
      <div className="px-4 py-8 flex flex-col">
        {selectedCategory === "allProducts" && (
          <>
            {/* All Products */}
            <h2 className="text-2xl self-start font-semibold my-5">
              All Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product: Product) => (
                <ProductCart key={product.id} product={product} />
              ))}
            </div>
          </>
        )}

        {selectedCategory != "allProducts" && (
          <>
            <h2 className="text-2xl self-start font-semibold my-5">
              {selectedCategory.toUpperCase()}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products
                .filter(
                  (product: Product) => product.categoryName == selectedCategory
                )
                .map((product: Product) => (
                  <ProductCart key={product.id} product={product} />
                ))}
            </div>
          </>
        )}
      </div>
      <div className="justify-self-center">
        <ViewCollectionButton />
      </div>
    </WidthWrapper>
  );
}
