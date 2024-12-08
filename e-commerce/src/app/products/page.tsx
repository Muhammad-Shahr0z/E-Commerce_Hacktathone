

import Card from "@/app/components/Card";
import FilterBar from "@/app/components/FilterBar";
import WidthWrapper from "@/app/components/WidthWrapper";



const products = [
  {
    id: 1,
    name: "The Candy Chair",
    price: "£250",
    image: "/products/1.png",
  },
  {
    id: 2,
    name: "Pluto Vase Set",
    price: "£125",
    image: "/products/2.png",
  },
  {
    id: 3,
    name: "The Silky Vase",
    price: "£95",
    image: "/products/1.png",
  },
  {
    id: 4,
    name: "The Lucky Lamp",
    price: "£304",
    image: "/products/9.png",
  },
  {
    id: 5,
    name: "The Candy Chandelier",
    price: "£750",
    image: "/products/3.png",
  },
  {
    id: 6,
    name: "Studio Vase Set",
    price: "£85",
    image: "/products/6.png",
  },
  {
    id: 7,
    name: "The Silky Vase",
    price: "£95",
    image: "/products/5.png",
  },
  {
    id: 8,
    name: "The Lucky Lamp",
    price: "£299",
    image: "/products/8.png",
  },
  {
    id: 9,
    name: "Studio Vase Set",
    price: "£85",
    image: "/products/2.png",
  },
  {
    id: 10,
    name: "The Silky Vase",
    price: "£95",
    image: "/products/7.png",
  },
  {
    id: 11,
    name: "The Lucky Lamp",
    price: "£299",
    image: "/products/3.png",
  },
  {
    id: 12,
    name: "The Lucky Lamp",
    price: "£299",
    image: "/products/2.png",
  },
];

const Products = () => {
  return (
 <WidthWrapper>

<FilterBar/>

    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center animate-cart-item">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
        <Card key={product.id} product={product} />
        ))}
      </div>
      <button className="md:w-[170px] w-full h-[56px] bg-[#F9F9F9] text-[#2A254B] font-[400] text-[1rem] leading-6 satoshi tracking-wider hover:bg-[#4a393978] my-8">
        View collection
      </button>
    </div>
     </WidthWrapper>
  );
};

export default Products;
