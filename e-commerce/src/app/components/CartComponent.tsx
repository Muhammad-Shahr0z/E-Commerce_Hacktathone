"use client"

import { FaPlus , FaMinus } from "react-icons/fa";
import Image from "next/image"

import { useAtom } from "jotai";
import { addToCart } from "../addToCart";
import { MdDelete } from "react-icons/md";


interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
    Quantity: number;
  }
  
  interface ItemProps {
    item: Item;
    cart: number;
  
  }
  
const CartComponent = (props:ItemProps) => {


  // Add TO Cart Functionality  this is global veriable of jotai 
  const [addCart, setAddToCart] = useAtom(addToCart);

// console.log(props.cart);

 

 // Decrement function
 const handleDecrement = (id: number) => {

  
  setAddToCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id && item.Quantity > 1
        ? { ...item, Quantity: item.Quantity - 1 }
        : item
    )
  );
};

  // Increment function
  const handleIncrement = (id: number) => {
    setAddToCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.Quantity < 10 ? 
      { ...item, Quantity: item.Quantity + 1 } : item
      )
    );
  };


    // Delete function
    const handleDelete = (id: number) => {
      setAddToCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

  return (
<tr className="border-b">
<td className="py-4 px-2 sm:px-4 flex items-center space-x-4">
  <Image
    src={props.item.image}
    alt="plant"
    className="w-12 h-12 object-cover"
    height={54}
    width={54}
  />
  <span className="text-xs sm:text-base">{props.item.name}</span>
</td>
<td className="py-4 w-8 px-2 sm:px-4">${props.item.price * props.cart}</td>
<td className="py-4 px-2 sm:px-4">



{/*cards Slotes buttons */}

<div className=" flex justify-between items-center w-24">
<button onClick={() => handleDecrement(props.item.id)}><FaMinus/></button>
{props.item.Quantity}
<button onClick={() => handleIncrement(props.item.id)}><FaPlus/></button>
<button onClick={() => handleDelete(props.item.id)} className="text-red-700"><MdDelete /></button>
</div>

</td>
</tr>
  )
}

export default CartComponent