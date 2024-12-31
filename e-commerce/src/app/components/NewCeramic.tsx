"use client"

import Image from "next/image";
import Card from "./Card";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";

interface Product {
  category: string;
  imageUrl: string;
  price: number;
  slug: string;
  name: string;
  productDescription: string;
}


interface Props {
  Heading: string;
}

const NewCeramic = (props: Props) => {
  

  const [products, setProducts] = useState<Product[] | null>(null);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "products"]{
          name, category, price,
          "slug": slug.current,
          "imageUrl": image.asset->url,
          productDescription
        }`;
        const fetchedProduct: Product[] = await client.fetch(query);
        setProducts(fetchedProduct);

      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProducts();
  }, []);



  if (!products) {
    return <div className="flex flex-col gap-4 items-center justify-center h-[80vh]">
      <p className="text-2xl font-bold tracking-wider text-blue-600">Loading...</p>
      <div className="w-32 h-32 rounded-full border-t border-blue-600 animate-spin"></div>;
    </div>
  }


  return (
    <main
      className="flex flex-col items-center justify-center gap-y-2 px-5 md:px-0 h-fit xl:px-0"
      id="ceramic"
    >
      <h1 className="clashDisplay md:text-[2rem] text-[20px]  font-[400px] self-start md:self-center xl:self-start mb-3 md:mt-10 lg:mt-0">
        {props.Heading}
      </h1>
      {/* // Images Div */}
      <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3 xl:gap-x-5  gap-5">
        {products.filter((item)=>item.category == "decoration-items").slice(0,4).map((product) => (
          <Card product={product} key={product.slug} />
        ))}

        {/* visible only medium screen  */}
        {/* card 05 */}

        <div className="xl:w-[305px] w-full lg:w-[310px]  md:w-[220px]  h-fit xl:h-[462px] bg-white gap-[24px] xl:hidden flex-col hidden md:flex">
          <Image
            src="/products/6.png"
            height={375}
            width={305}
            alt="CHAIR"
            className="md:w-auto h-auto transition-transform duration-300 ease-in-out hover:scale-95"
          ></Image>
          <div>
            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
              The Lucy Lamp
            </p>
            <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
              £399
            </p>
          </div>
        </div>

        {/* visible only medium screen  */}
        {/* card 06 */}

        <div className="xl:w-[305px] w-full lg:w-[310px]  md:w-[220px]  bg-white gap-[24px] xl:hidden flex-col hidden md:flex">
          <Image
            src="/products/8.png"
            height={375}
            width={305}
            alt="CHAIR"
            className="md:w-auto h-auto transition-transform duration-300 ease-in-out hover:scale-95"
          ></Image>
          <div>
            <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
              The Lucy Lamp
            </p>
            <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
              £399
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewCeramic;
