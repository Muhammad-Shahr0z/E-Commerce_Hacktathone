"use client";

import Image from "next/image";
import Card from "./ProductCart";
import ViewCollectionButton from "./ViewCollectionButton";

import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../interface";

// Import Swiper.js and its styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const PopularProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);

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

        const result: Product[] = await client.fetch(query);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


 

  return (
    <main className="flex flex-col items-center justify-center gap-y-2 mt-10 px-5 md:px-10 xl:px-0">
      <h1 className="clashDisplay md:text-[2rem] text-[20px] font-[400px] md:self-center self-start mb-3 xl:self-start">
        Our Popular Products
      </h1>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        autoplay={{ delay: 1000 }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },  // For xl screens
        }}
        className="w-full"
      >
        {/* Render Product Cards in Swiper Slides */}
        {products.map((product) => (
          <SwiperSlide key={product.slug}>
            <Card product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows and Pagination */}
      <div className="swiper-navigation">
        <div className="swiper-button-prev">Prev</div>
        <div className="swiper-button-next">Next</div>
      </div>
      <div className="swiper-pagination"></div>

      <ViewCollectionButton />
    </main>
  );
};

export default PopularProduct;
