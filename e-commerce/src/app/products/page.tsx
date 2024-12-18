"use client"
import Card from "@/app/components/Card";
import FilterBar from "@/app/components/FilterBar";
import WidthWrapper from "@/app/components/WidthWrapper";
import ViewCollectionButton from "../components/ViewCollectionButton";
import { useAtom } from "jotai";
import { filterCatogory, productsData } from "../store";

interface Product {
  image: string;
  name: string;
  price: number;
  id: number;
}

const Products = () => {

const [products, setProducts] = useAtom<Product[]>(productsData)

  const [selectedCategory, setSelectedCategory] = useAtom(filterCatogory);

  return (
    <WidthWrapper>
      <FilterBar />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">




{selectedCategory === "decoration-items" &&(
<>

      <h2 className="text-2xl self-start font-semibold my-5">Decoration Items</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.slice(0,12).map((product) => (
              <Card key={product.id} product={product} />
        
          ))}
   
        </div>

</>

)

}





{selectedCategory === "tables" &&(
<>

     {/* tables */}
     <h2 className="text-2xl self-start font-semibold my-5">Tables</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {products.slice(12,24).map((product) => (
              <Card key={product.id} product={product} />
        
          ))}
   
        </div>


</>

)

}


{selectedCategory === "cutlery" &&(
<>


     {/* Cutlery */}
     <h2 className="text-2xl self-start font-semibold my-5">Cutlery Sets</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {products.slice(24,36).map((product) => (
              <Card key={product.id} product={product} />
        
          ))}
   
        </div>

</>

)

}

{selectedCategory === "chairs" &&(

<>


     {/* Chairs*/}
     <h2 className="text-2xl self-start font-semibold my-5">Chairs</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {products.slice(36,48).map((product) => (
              <Card key={product.id} product={product} />
        
          ))}
   
        </div>

</>

)

}


{selectedCategory === "tableware" &&(

<>

     {/* Tableware*/}
     <h2 className="text-2xl self-start font-semibold my-5">Tableware</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {products.slice(48,60).map((product) => (
              <Card key={product.id} product={product} />
        
          ))}
   
        </div>
</>

)

}



{selectedCategory === "allProducts" &&(

<>

     {/* All Products*/}

     <h2 className="text-2xl self-start font-semibold my-5">All Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          
          {products.map((product) => (
              <Card key={product.id} product={product} />
        
          ))}
   
        </div>
</>

)

}
































        <ViewCollectionButton />
      </div>
    </WidthWrapper>
  );
};

export default Products;
