import { atom } from "jotai"

const initialCarts = [
    {
      id: 11,
      name: "The Lucky Lamp",
      price: 299,
      image: "/products/11.png",
    },
    {
      id: 12,
      name: "The Lucky Lamp",
      price: 239,
      image: "/products/12.png",
    },
   
  ]  
  
  export const addToCart = atom(initialCarts)