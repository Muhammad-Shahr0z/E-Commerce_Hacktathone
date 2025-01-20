import Image from "next/image";
import Link from "next/link";
import { Product } from "../../../interface";

const ProductCart = ({ product }: { product: Product }) => {

if(!product){
return <div>Product not found</div>;
}

  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case "sale":
        return "bg-green-500";
      case "popular":
        return "bg-yellow-500";
      case "limited":
        return "bg-blue-500";
      case "discount":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div
      key={product.id}
      className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300 w-full max-w-[300px] mx-auto"
    >
      <Link href={`/products/${product.id}`}>
        <div className="relative w-full h-64">
          {/* Image */}
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          {/* Tags */}
          {product.tags && (
            <div className="absolute top-2 left-2 space-y-1">
              {product.tags.slice(0, 1).map((tag, index) => (
                <span
                  key={index}
                  className={`text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md ${getTagColor(
                    tag
                  )}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 space-y-1">
              <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md">
                -{product.discount}% off
              </span>
            </div>
          )}
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        {product.discount > 0 ? (
          <p className="text-gray-800 text-lg font-bold">
            €{Math.round(product.originalPrice * (1 - product.discount / 100))}
          </p>
        ) : (
          <span className="opacity-0">No Discount</span>
        )}

        {product.discount > 0 ? (
          <p className="text-red-500 text-md line-through">
            €{product.originalPrice}
          </p>
        ) : (
          <p className="text-black text-lg font-bold">
            €{product.originalPrice}
          </p>
        )}

        {/* Rating Section */}
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              fill={index < Math.round(product.rating.rate) ? "gold" : "none"}
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-yellow-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.25l6.172 3.83-1.638-7.07 5.466-4.86-7.22-.62L12 2.25l-2.78 6.28-7.22.62 5.466 4.86-1.638 7.07L12 17.25z"
              />
            </svg>
          ))}
          <span className="ml-2 text-gray-600 text-sm">
            ({product.rating.count} reviews)
          </span>
        </div>
      </div>
    </div>




  );
};

export default ProductCart;