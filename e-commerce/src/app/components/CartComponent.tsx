import Image from "next/image"
import QuantityBtn from "./QuantityBtn";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { totalCountAtom } from "../addToCart";

interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
    Quantity: number;
  }
  
  interface ItemProps {
    item: Item;
    cart: any;
  }
  


const CartComponent = (props:ItemProps) => {

    // console.log(props.cart);
    

  const [totalCount, setTotalCount] = useState(props.item.Quantity);

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
<td className="py-4 px-2 sm:px-4">${props.item.price * totalCount}</td>
<td className="py-4 px-2 sm:px-4">


<QuantityBtn CountState={{ totalCount, setTotalCount }} />





</td>
</tr>
  )
}

export default CartComponent