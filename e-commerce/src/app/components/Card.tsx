import Image from "next/image";


const Card = ({product}:any) => {
  return (
    <>
      <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate  md:w-[220px]  h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col hover:animate-pulse">
        <Image
        height={375}
        width={305}
          src={product.image}
          alt={product.name}
          className="md:w-auto h-auto"
        ></Image>
        <div>
          <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
            The Silky Vase
          </p>
          <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
            £125
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
