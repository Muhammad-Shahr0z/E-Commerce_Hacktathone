import Image from "next/image";
import Card from "./Card";
import ViewCollectionButton from "./ViewCollectionButton";

const products = [
  {
    id: 33,
    name: "Rustic Vase Set",
    price: 155,
    image: "/newcomics/1.png",
  },
  {
    id: 44,
    name: "The Silky Vase",
    price: 125,
    image: "/newcomics/3.png",
  },
];

const PopularProduct = () => {
  return (
    <main className="flex flex-col items-center justify-center gap-y-2 mt-10 px-5 md:px-10 xl:px-0">
      <h1 className="clashDisplay md:text-[2rem] text-[20px] font-[400px] md:self-center self-start mb-3 xl:self-start">
        Our popular products
      </h1>
      {/* // Images Div */}


        <div className="flex gap-5 xl:gap-5">
          {/* card 0 */}
          <div className="xl:w-[305px] w-full lg:w-[320px]  md:w-[220px]  h-fit xl:h-[462px] bg-white gap-[24px] xl:hidden flex-col hidden md:flex">
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
              <p className="satoshi sm:text-[18px] text-[14px]leading-7 text-[#2A254B]">
                £399
              </p>
            </div>
          </div>

          {/* card 01 */}
          <div className="lg:w-[630px] w-full  h-fit xl:h-[462px] bg-white gap-[24px] flex-col hidden xl:flex">
            <Image
              src="/popular/Large.png"
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

  
{products.map((product) => (


      <Card  product={product} key={product.id} />

))} 





        </div>
  <ViewCollectionButton/>

    </main>
  );
};

export default PopularProduct;
