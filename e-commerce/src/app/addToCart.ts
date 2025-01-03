import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"


interface ProductAddToCart {
  category: string;
  imageUrl: string;
  price: number;
  slug: string;
  name: string;
  Quantity: number;
  Finalprice: number;
}



// const initialCarts:ProductAddToCart[] = [
//     {
//       slug: "modern-cutlery-2",
//       category: "cutlery",
//       name: "The Lucky Lamp",
//       price: 299,
//       imageUrl: "/products/11.png",
//       Quantity: 1,
//       Finalprice:299
//     },

//   ]  
  


 
  export const addToCart = atomWithStorage<ProductAddToCart[]>('cartState', []);
  export const itemQuantity = atom(1)
  export const grandTotal = atom(0)
  export const totalCountAtom = atom(0)