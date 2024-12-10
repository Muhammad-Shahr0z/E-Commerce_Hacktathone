"use client"
import Image from "next/image";
import React from "react";
import Features from "../../components/SectionOne";
import NewCeramic from "../../components/NewCeramic";
import { useAtom } from "jotai";
import { productsData } from "@/app/store";


interface Product {
  image: string;
  name: string;
  price: number;
  id: number;
}
interface Params {
  productId: string;
}


const ProductListing = ({ params }: { params: Params }) => {
  
  const ParamsId: number = Number(params.productId);

  const [products, setProducts] = useAtom<Product[]>(productsData)

const ArrayProduct:Product[]=  products.filter((product) => product.id === ParamsId)
const SingleProduct = ArrayProduct[0]









  return (

  

    <section className="max-w-[1280px] mx-auto">
      <div className="px-4 md:px-8 lg:px-12 py-8">
        {/* Main Product Section */}
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:h-[600px] ">
          {/* Image Div */}
          <div className="w-full md:w-1/2 h-full">
            <Image
              src={SingleProduct.image}
              height={600}
              width={772}
              alt={SingleProduct.image}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Div */}
          <div className="w-full md:w-1/2 lg:px-8 py-6 flex items-center justify-center">
            <div className="w-full">
              <div>
                <p className="text-xl md:text-2xl font-semibold">
                 {SingleProduct.name}
                </p>
                <p className="py-2 text-lg md:text-xl">${SingleProduct.price}</p>
              </div>
              <div className="text-[#505977] text-sm md:text-base">
                <h1 className="font-semibold">Description</h1>
                <div className="my-4">
                  <p>
                    A timeless design, with premium materials features as one of
                    our most popular and iconic pieces. The dandy chair is
                    perfect for any stylish living space with beech legs and
                    lambskin leather upholstery.
                  </p>
                </div>
                <div className="ml-4">
                  <ul className="list-disc space-y-1">
                    <li>Premium material</li>
                    <li>Handmade upholstery</li>
                    <li>Quality timeless classic</li>
                  </ul>
                </div>
                <div className="my-8">
                  <h1 className="font-semibold">Dimensions</h1>
                  <div className="flex gap-8 md:gap-20 text-sm md:text-base mt-2">
                    <div>
                      <h1>Height</h1>
                      <p>110cm</p>
                    </div>
                    <div>
                      <h1>Width</h1>
                      <p>75cm</p>
                    </div>
                    <div>
                      <h1>Depth</h1>
                      <p>50cm</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div className="flex items-center gap-4">
                    <h1>Amount:</h1>
                    <button className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                      <span>+</span> 1 <span>-</span>
                    </button>
                  </div>
                  <button className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NewCeramic key={468} Heading="You might also like" />

      <Features />
    </section>
  );
};

export default ProductListing;