"use client"

import Card from "@/app/components/Card";
import FilterBar from "@/app/components/FilterBar";
import WidthWrapper from "@/app/components/WidthWrapper";
import ViewCollectionButton from "../components/ViewCollectionButton";
import { useAtom } from "jotai";
import { filterCatogory, inputValueAtom, productsData } from "../store";
import { client } from "@/sanity/lib/client";
import { use, useEffect } from "react";


interface Product {
  category: string;
  imageUrl: string;
  price: number;
  slug: string;
  name: string;
  productDescription: string;
}


export default function AllProducts() {
  const [inputValue,setInputValue] = useAtom(inputValueAtom);
  const [products, setProducts] = useAtom<Product[]>(productsData);
  const [selectedCategory] = useAtom(filterCatogory);

 
useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "products"]{
        name, category, price,
        "slug":slug.current,
        "imageUrl": image.asset->url
      }`;
      const fetchedProducts: Product[] = await client.fetch(query);
      setProducts(fetchedProducts);
    };
    
    fetchProducts();
  },[]); 



  // Filter the products based on inputValue
const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(inputValue.toLowerCase())
);

// agar Search kia jayega to yeh wala code run hoga nichy wala nahi hoga

if (inputValue !== "") {
  const hasResults = filteredProducts.length > 0;

  return (
    <WidthWrapper>
      <FilterBar />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <h2 className="text-2xl self-start font-semibold my-5">
          Search Results
        </h2>
        {hasResults ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product: Product) => (
              <Card key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg">No products found.</p>
        )}
        <ViewCollectionButton />
      </div>
    </WidthWrapper>
  );
}

  return (

    <WidthWrapper>
      <FilterBar />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        {selectedCategory === "allProducts" && (
          <>
            {/* All Products*/}

            <h2 className="text-2xl self-start font-semibold my-5">
              All Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product:Product) => 
            
                <Card key={product.slug} product={product} />

                )}
            </div>

          </>
       )}

        {selectedCategory != "allProducts" && (
          <>
       

            <h2 className="text-2xl self-start font-semibold my-5">
              All Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.filter((product:Product)=>product.category == selectedCategory).map((product:Product) => 
      
                <Card key={product.slug} product={product} />

                )}
            </div>

          </>
       )}







        <ViewCollectionButton />
      </div>
    </WidthWrapper>
  );
};


