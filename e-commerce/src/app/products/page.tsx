"use client"


import FilterBar from "@/app/components/FilterBar";
import ViewCollectionButton from "../components/ViewCollectionButton";
import { useAtom } from "jotai";
import { filterCatogory, inputValueAtom, productsData } from "../store";
import { client } from "@/sanity/lib/client";
import {  useEffect } from "react";
import { Product } from "../../../interface";
import ProductCart from "@/app/components/ProductCart";


export default function AllProducts() {
  const [inputValue] = useAtom(inputValueAtom);
  const [products, setProducts] = useAtom<Product[]>(productsData);
  const [selectedCategory] = useAtom(filterCatogory);

 
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
  },[]); 



  // Filter the products based on inputValue
const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(inputValue.toLowerCase())
);

// agar Search kia jayega to yeh wala code run hoga nichy wala nahi hoga

if (inputValue !== "") {
  const hasResults = filteredProducts.length > 0;

  return (
    <>
      <FilterBar />
      <div className="px-4 py-8 flex flex-col">
        <h2 className="text-2xl self-start font-semibold my-5">
          Search Results
        </h2>
        {hasResults ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product:Product) => (
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
    </>
  );
}

  return (

    <>
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
              {products.filter((product:Product)=>product.categoryName == selectedCategory).map((product:Product) => 
      
                <ProductCart key={product.id} product={product} />

                )}
            </div>

          </>
       )}



      </div>
<div className="justify-self-center">

        <ViewCollectionButton  />
</div>
    </>
 
  );
};


