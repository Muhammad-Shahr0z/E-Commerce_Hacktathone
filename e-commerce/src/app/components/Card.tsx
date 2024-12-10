import Image from "next/image";
import Link from "next/link";

interface Product {
  image: string;
  name: string;
  price: number;
  id: number;
}


const Card = ({ product }: { product: Product }) => {
  
  
  return (
    <Link
    href={`/products/${product.id}`}
  >
    <div className="xl:w-[305px] w-full lg:w-[320px] subtle-animate md:w-[220px] h-fit xl:h-[462px] bg-white gap-[24px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-95">

      <Image
        height={375}
        width={305}
        src={product.image}
        alt={product.name}
        className="md:w-auto h-auto"
      />
      <div>
        <p className="clashDisplay sm:text-[20px] leading-7 text-[#2A254B] text-[16px]">
          {product.name}
        </p>
        <p className="satoshi sm:text-[18px] text-[14px] leading-7 text-[#2A254B]">
        £{product.price}
        </p>
      </div>
    </div>
    </Link>
  );
};

export default Card;
