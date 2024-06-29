'use client'

import { CartProductType } from "@/app/product/[id]/ProductDetails";

interface setQtyProps {
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handleQtyIncrease: ()=> void;
    handleQtyDecrease: ()=> void;
}

const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded'

const SetQuanity: React.FC<setQtyProps> = ({
    cartCounter,
    cartProduct,
    handleQtyDecrease,
    handleQtyIncrease
}) => {
    return <div className="flex gap-8 items-center">
        {cartCounter? null : <div className="font-semibold">QUANTITY: </div>}
        <div className="flex gap-4 items-center text-base">
            <button onClick={handleQtyDecrease}>-</button>
            <button className={btnStyles}>{cartProduct.quantity}</button>
            <button onClick={handleQtyIncrease} className={btnStyles}>+</button>
        </div>
    </div>
}
 
export default SetQuanity;