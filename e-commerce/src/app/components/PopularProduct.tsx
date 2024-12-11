"use client"
import Image from "next/image";
import Card from "./Card";
import ViewCollectionButton from "./ViewCollectionButton";
import { productsData } from "../store";
import { useAtom } from "jotai";
import Link from "next/link";

interface Product {
  image: string;
  name: string;
  price: number;
  id: number;
}

const PopularProduct = () => {

  const [products, setProducts] = useAtom<Product[]>(productsData)


  return (
    <main className="flex flex-col items-center justify-center gap-y-2 mt-10 px-5 md:px-10 xl:px-0">
      <h1 className="clashDisplay md:text-[2rem] text-[20px] font-[400px] md:self-center self-start mb-3 xl:self-start">
        Our popular products
      </h1>
      {/* // Images Div */}


        <div className="flex gap-5 xl:gap-5">
          {/* Static Card Visible Only Medium Screen */}
          <Link href="/products/3">
          <div className="xl:w-[305px] w-full lg:w-[320px]  md:w-[220px]  h-fit xl:h-[462px] bg-white gap-[24px] xl:hidden flex-col hidden md:flex">
            <Image
              src="/newcomics/1.png"
              height={375}
              width={305}
              alt="CHAIR"
              className="md:w-auto h-auto transition-transform duration-300 ease-in-out hover:scale-95"
            ></Image>
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                The Lucy Lamp
              </p>
              <p className="satoshi sm:text-[18px] text-[14px]leading-7 text-[#2A254B]">
                £399
              </p>
            </div>
          </div>
          </Link>

          {/* Sofa BIg Image */}
          <div className="lg:w-[630px] w-full  h-fit xl:h-[462px] bg-white gap-[24px] flex-col hidden xl:flex">
            <Image
              src="/products/Large.png"
              height={630}
              width={375}
              alt="CHAIR"
              className="md:w-auto h-auto animate-pulse"
            ></Image>
            <div>
              <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
                The Poplar suede sofa
              </p>
              <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
                £980
              </p>
            </div>
          </div>

  
{products.slice(0,2).map((product) => (


      <Card  product={product} key={product.id} />

))} 

        </div>
  <ViewCollectionButton/>

    </main>
  );
};

export default PopularProduct;
