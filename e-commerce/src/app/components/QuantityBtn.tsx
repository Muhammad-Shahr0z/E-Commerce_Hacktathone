"use client"

import { FaPlus , FaMinus } from "react-icons/fa";


type TotalCountProps = {
    totalCount: number;
    setTotalCount: (count: number) => void;
  };



const QuantityBtn = ({ CountState }: { CountState: TotalCountProps }) => {
    const { totalCount, setTotalCount } = CountState;
    
    


    function handleCountDecrement() {
        if(totalCount === 1) return
        setTotalCount(totalCount-1)
    }
    
    function handleCountIncrement() {
        if(totalCount === 10) return
        setTotalCount(totalCount+1)

    }

  return (
    <>


<div className=" flex justify-between items-center w-[70px]">
<button onClick={handleCountDecrement}><FaMinus/></button>
{totalCount}
<button onClick={handleCountIncrement}><FaPlus /></button>
</div>
 
    </>
  )
}

export default QuantityBtn