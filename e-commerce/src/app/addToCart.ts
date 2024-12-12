import { atom } from "jotai"

const initialCarts = [
    {
      id: 11,
      name: "The Lucky Lamp",
      price: 299,
      image: "/products/11.png",
      Quantity: 1,
      Finalprice:299
    },
    {
      id: 12,
      name: "The Lucky Lamp",
      price: 239,
      image: "/products/12.png",
      Quantity: 1,
      Finalprice:239
    },
   
  ]  
  


 
  export const addToCart = atom(initialCarts);
  export const itemQuantity = atom(1)
  export const grandTotal = atom(0)
  export const totalCountAtom = atom(0)
