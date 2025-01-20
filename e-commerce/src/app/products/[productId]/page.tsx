"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Features from "../../components/SectionOne";
import dynamic from "next/dynamic"; // Import dynamic for server component
import { useAtom } from "jotai";
import { addToCart } from "@/app/addToCart";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../interface";
import NewCeramic from "@/app/components/NewCeramic";

interface ProductAddToCart {
  categoryName: string;
  imageUrl: string;
  price: number;
  slug: string;
  name: string;
  Quantity: number;
  Finalprice: number;
  id: number;
  discount: number;
}

interface Params {
  productId: string;
}

const ProductListing = ({ params }: { params: Params }) => {
  const ParamsId: number = eval(params.productId);

  const [SingleProduct, setSingleProduct] = useState<Product | null>(null);
  const [count, setCount] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const [addCart, setAddToCart] = useAtom<ProductAddToCart[]>(addToCart);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product" && id == ${ParamsId}][0]{
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
        const fetchedProduct: Product = await client.fetch(query);
        setSingleProduct(fetchedProduct);
        setPrice(Math.round(fetchedProduct.originalPrice * (1 - fetchedProduct.discount / 100)));
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProducts();
  },[ParamsId]);

  if (!SingleProduct) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg font-medium text-gray-700">
            Please wait, Loading Products...
          </p>
        </div>
      </div>
    );
  }


  const updatedObject: ProductAddToCart = {
    ...SingleProduct,
    Quantity: count,
    Finalprice: price,
  };

  const handleCountIncrement = () => {
    if (count === 10) {
      toast.warn("You Can Add Only 10 Items", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setCount((prevCount) => prevCount + 1);
    setPrice(
      (prevPrice) =>
        prevPrice + Math.round(SingleProduct.originalPrice * (1 - SingleProduct.discount / 100))
    );
  };

  const handleCountDecrement = () => {
    if (count === 1) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
    setPrice(
      (prevPrice) =>
        prevPrice - Math.round(SingleProduct.originalPrice * (1 - SingleProduct.discount / 100))
    );
  };

  const handleAddToCart = () => {
    if (addCart.some((product) => product.id === SingleProduct.id)) {
      toast.warn("This item is already in your cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setAddToCart([...addCart, updatedObject]);
      toast.success("Item added to cart successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <section className="max-w-[1280px] mx-auto caret-transparent">
        <div className="px-4 md:px-8 lg:px-12 py-8">
          {/* Main Product Section */}
          <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:h-[600px]">
            {/* Image Div */}
            <div className="w-full md:w-1/2 h-full">
              <Image
                src={SingleProduct.imageUrl}
                height={600}
                width={772}
                alt={SingleProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Div */}
            <div className="w-full md:w-1/2 lg:px-8 py-6 flex items-center justify-center">
              <div className="w-full">
                <div>
                  <p className="text-xl md:text-2xl font-semibold">{SingleProduct.name}</p>
                  <p className="py-2 text-lg md:text-xl font-bold">€{price}</p>
                  {SingleProduct.discount > 4 && (
                    <p className="text-red-500 text-md line-through">
                      €{SingleProduct.originalPrice}
                    </p>
                  )}
                </div>
                <div className="text-[#505977] text-sm md:text-base">
                  <h1 className="font-semibold">Description</h1>
                  <div className="my-4">
                    <p>{SingleProduct.description}</p>
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
                        <p>{SingleProduct.dimensions.height}cm</p>
                      </div>
                      <div>
                        <h1>Width</h1>
                        <p>{SingleProduct.dimensions.width}cm</p>
                      </div>
                      <div>
                        <h1>Depth</h1>
                        <p>{SingleProduct.dimensions.depth}cm</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center gap-4">
                    <div className="flex items-center gap-4">
                      <h1>Amount:</h1>
                      <div className="flex gap-4 bg-[#F5F5F5] rounded-md px-4 py-2">
                        <button
                          className="text-green-800 text-sm font-bold"
                          onClick={handleCountDecrement}
                        >
                          -
                        </button>
                        {count}
                        <button
                          className="text-red-800 text-sm font-bold"
                          onClick={handleCountIncrement}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className="w-full md:w-[146px] h-[56px] bg-[#2A254B] text-white"
                    >
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

        <ToastContainer />
      </section>
    </>
  );
};

export default ProductListing;
