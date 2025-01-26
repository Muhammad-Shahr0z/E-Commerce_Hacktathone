import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { Product } from "../../interface";


  export const addToCart = atomWithStorage<Product[]>('cartState', []);
  export const itemQuantity = atom(1)
  export const grandTotal = atom(0)
  export const totalCountAtom = atom(0)
