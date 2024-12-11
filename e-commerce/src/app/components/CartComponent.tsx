import Image from "next/image"

interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
  }
  
  interface ItemProps {
    item: Item;
  }
  


const CartComponent = (props:ItemProps) => {

    
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
<td className="py-4 px-2 sm:px-4">${props.item.price}</td>
<td className="py-4 px-2 sm:px-4">
  <select className="border rounded-md px-2 py-1 text-xs sm:text-sm">
    <option>1</option>
    <option>2</option>
    <option>3</option>
  </select>
</td>
</tr>
  )
}

export default CartComponent