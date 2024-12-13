"use client";

import { FaPlus, FaMinus } from "react-icons/fa";
import Image from "next/image";
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

const CartComponent = (props: ItemProps) => {
  const [addCart, setAddToCart] = useAtom(addToCart);

  const handleDecrement = (id: number) => {
    setAddToCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.Quantity > 1 ? { ...item, Quantity: item.Quantity - 1 } : item
      )
    );
  };

  const handleIncrement = (id: number) => {
    setAddToCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.Quantity < 10 ? { ...item, Quantity: item.Quantity + 1 } : item
      )
    );
  };

  const handleDelete = (id: number) => {
    setAddToCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <tr className="border-b">
      {/* Product Column */}
      <td className="py-2 px-1 sm:py-4 sm:px-4 flex items-center space-x-2 sm:space-x-4">
        <Image
          src={props.item.image}
          alt={props.item.name}
          className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md"
          height={64}
          width={64}
        />
        <span className="text-xs sm:text-base font-medium truncate max-w-[120px] sm:max-w-none">
          {props.item.name}
        </span>
      </td>

      {/* Price Column */}
      <td className="py-2 px-1 sm:py-4 sm:px-4 text-center text-xs sm:text-base">
        <span className="inline-block min-w-[60px]">
          ${props.item.price * props.item.Quantity}
        </span>
      </td>

      {/* Quantity Column */}
      <td className="py-2 px-1 sm:py-4 sm:px-4 text-center">
        <div className="flex items-center justify-center space-x-1 sm:space-x-2">
          {/* Decrement Button */}
          <button
            onClick={() => handleDecrement(props.item.id)}
            className="bg-gray-200 hover:bg-gray-300 px-1 py-1 rounded sm:px-2"
          >
            <FaMinus className="text-xs sm:text-sm" />
          </button>

          {/* Quantity Display */}
          <span className="inline-block min-w-[20px] text-center font-medium text-xs sm:text-base">
            {props.item.Quantity}
          </span>

          {/* Increment Button */}
          <button
            onClick={() => handleIncrement(props.item.id)}
            className="bg-gray-200 hover:bg-gray-300 px-1 py-1 rounded sm:px-2"
          >
            <FaPlus className="text-xs sm:text-sm" />
          </button>
        </div>
      </td>

      {/* Delete Column */}
      <td className="py-2 px-1 sm:py-4 sm:px-4 text-center">
  <div className="flex items-center justify-center h-full">
    <button
      onClick={() => handleDelete(props.item.id)}
      className="text-red-500 hover:text-red-700"
    >
      <MdDelete className="text-xl sm:text-2xl" />
    </button>
  </div>
</td>

    </tr>
  );
};

export default CartComponent;
