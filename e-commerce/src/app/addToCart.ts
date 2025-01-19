import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"


interface ProductAddToCart {
  categoryName: string;
  imageUrl: string;
  price: number;
  slug: string;
  name: string;
  Quantity: number;
  Finalprice: number;
  id: number;
  discount:number
}


 
  export const addToCart = atomWithStorage<ProductAddToCart[]>('cartState', []);
  export const itemQuantity = atom(1)
  export const grandTotal = atom(0)
  export const totalCountAtom = atom(0)
