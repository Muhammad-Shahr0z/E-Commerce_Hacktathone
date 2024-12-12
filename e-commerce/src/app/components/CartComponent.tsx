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
  {/* Product Column */}
  <td className="py-4 px-2 sm:px-4 flex items-center space-x-4">
    <Image
      src={props.item.image}
      alt={props.item.name}
      className="w-16 h-16 object-cover rounded-md"
      height={64}
      width={64}
    />
    <span className="text-sm sm:text-base font-medium">{props.item.name}</span>
  </td>

  {/* Price Column */}
  <td className="py-4 px-2 sm:px-4 text-center text-sm sm:text-base">
  <span className="inline-block min-w-[60px]">
    ${props.item.price * props.item.Quantity}
  </span>
</td>

  {/* Quantity Column */}
  <td className="py-4 px-2 sm:px-4 text-center">
  <div className="flex items-center justify-center space-x-2">
    
    {/* Decrement Button */}
    <button
      onClick={() => handleDecrement(props.item.id)}
      className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
    >
      <FaMinus className="text-sm" />
    </button>
    
    {/* Quantity Display */}
    <span className="inline-block min-w-[30px] text-center font-medium">
      {props.item.Quantity}
    </span>
    
    {/* Increment Button */}
    <button
      onClick={() => handleIncrement(props.item.id)}
      className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
    >
      <FaPlus className="text-sm" />
    </button>
  </div>
</td>


  {/* Delete Column */}
  <td className="py-4 px-2 sm:px-4 text-center">
    <button
      onClick={() => handleDelete(props.item.id)}
      className="text-red-500 hover:text-red-700"
    >
      <MdDelete className="text-2xl" />
    </button>
  </td>
</tr>

  )
}

export default CartComponent