'use client'
import { formatPrice } from "@/utils/formatPrice";
import { CartProductType } from "../product/[id]/ProductDetails";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuanity from "../components/products/SetQuantity";
import { useCart } from "../hooks/useCart";
import { useCallback } from "react";

interface ItemContentType {
    item: CartProductType
}

const ItemContent:  React.FC<ItemContentType>= ({item}) => {

    const {handleRemoveProductFromCart,handleCartQtyDecrease,handleCartQtyIncrease} = useCart();
    return <div className="grid grid-cols-5 text-xs md:text-sm gap-4
    border-[1.5px]
    border-slate-200
    py-4
    items-center">
        <div className="col-span-2 justify-self-start flex gap-2 md:gap-4">
            <Link href={`/product/${item.id}`}>
                <div className="relative w-[70px] aspect-square">
                    <Image src={item.selectedImg} fill alt={item.name} className="object-contain"></Image>
                </div>
            </Link>
            <div className="flex flex-col justify-between items-center">
                <Link href={`/product/${item.id}`}>
                    {truncateText(item.name)}
                    {/* <div>{item.selectedImg}</div> */}
                    <div className="w-[70px]">
                        <button className="text-slate-500 underline" onClick={()=>handleRemoveProductFromCart(item)}>Remove</button>
                    </div>
                </Link>

            </div>
        </div>

        <div className="justify-self-center">{formatPrice(item.price)}</div>
        <div className="justify-self-center">
            <SetQuanity cartCounter={true} cartProduct={item} handleQtyDecrease={()=>{handleCartQtyDecrease(item)}} handleQtyIncrease={()=>{handleCartQtyIncrease(item)}}/>
        </div>
        <div className="justify-self-end font-semibold">{formatPrice(item.price*item.quantity)}</div>
    </div>;
}
 
export default ItemContent;