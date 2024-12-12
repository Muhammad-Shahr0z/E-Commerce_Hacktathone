"use client"
import Card from "@/app/components/Card";
import FilterBar from "@/app/components/FilterBar";
import WidthWrapper from "@/app/components/WidthWrapper";
import ViewCollectionButton from "../components/ViewCollectionButton";
import { useAtom } from "jotai";
import { productsData } from "../store";

interface Product {
  image: string;
  name: string;
  price: number;
  id: number;
}

const Products = () => {

const [products, setProducts] = useAtom<Product[]>(productsData)

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
