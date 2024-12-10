"use client"
import Image from "next/image";
import Card from "./Card";


import { useAtom } from "jotai";
import { productsData } from "@/app/store";


interface Product {
  image: string;
  name: string;
  price: number;
  id: number;
}



interface Props {
  Heading: string;
}

const NewCeramic = (props: Props) => {

  const [products, setProducts] = useAtom<Product[]>(productsData)


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
        {products.slice(0, 4).map((product) => (
          <Card product={product} key={product.id} />
        ))}

        {/* visible only medium screen  */}
        {/* card 05 */}

        <div className="xl:w-[305px] w-full lg:w-[310px]  md:w-[220px]  h-fit xl:h-[462px] bg-white gap-[24px] xl:hidden flex-col hidden md:flex">
          <Image
            src="/newcomics/5.png"
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
            src="/newcomics/6.png"
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
