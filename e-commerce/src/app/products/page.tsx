import Card from "@/app/components/Card";
import FilterBar from "@/app/components/FilterBar";
import WidthWrapper from "@/app/components/WidthWrapper";
import Link from "next/link";
import ViewCollectionButton from "../components/ViewCollectionButton";

const products = [
  {
    id: 11,
    name: "The Candy Chair",
    price: 250,
    image: "/products/1.png",
  },
  {
    id: 22,
    name: "Pluto Vase Set",
    price: 125,
    image: "/products/2.png",
  },
  {
    id: 33,
    name: "The Silky Vase",
    price: 95,
    image: "/products/1.png",
  },
  {
    id: 44,
    name: "The Lucky Lamp",
    price: 304,
    image: "/products/9.png",
  },
  {
    id: 55,
    name: "The Candy Chandelier",
    price: 750,
    image: "/products/3.png",
  },
  {
    id: 66,
    name: "Studio Vase Set",
    price: 85,
    image: "/products/6.png",
  },
  {
    id: 77,
    name: "The Silky Vase",
    price: 95,
    image: "/products/5.png",
  },
  {
    id: 88,
    name: "The Lucky Lamp",
    price: 99,
    image: "/products/8.png",
  },
  {
    id: 99,
    name: "Studio Vase Set",
    price: 85,
    image: "/products/2.png",
  },
  {
    id: 101,
    name: "The Silky Vase",
    price: 95,
    image: "/products/7.png",
  },
  {
    id: 111,
    name: "The Lucky Lamp",
    price: 299,
    image: "/products/3.png",
  },
  {
    id: 121,
    name: "The Lucky Lamp",
    price: 299,
    image: "/products/2.png",
  },
];

const Products = () => {
  return (
    <WidthWrapper>
      <FilterBar />

      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        <ViewCollectionButton />
      </div>
    </WidthWrapper>
  );
};

export default Products;
