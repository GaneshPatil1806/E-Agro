'use client'
import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
    data: any;
}

const ProductCard: React.FC <ProductCardProps>= ({data}) => {

    const productRating = data.reviews.reduce((acc: number, item: { rating: number }) => {
        return acc + item.rating
    }, 0) / data.reviews.length;

    const router = useRouter();

    return <div className="col-span-1 cursor-pointer border-[1.2px]
    border-slate-200
    bg-slate-50
    rounded-sm
    p-2
    transition
    hover:scale-105
    text-center
    text-sm">
        <div onClick={()=>router.push(`product/${data.id}`)} className="flex flex-col items-center w-full gap-1">
            <div className="aspect-square overflow-hidden relative w-full">
                <Image src={data.images[0]} alt={data.name} fill className='w-full h-full object-contain'></Image>
            </div>
            <div className="mt-4">{truncateText(data.title)}</div>
            <div>Quantity: </div>
            <div><Rating value={productRating} readOnly/></div>
            <div>{data.reviews.length} Reviews</div>
            <div className="font-semibold">{formatPrice(data.price)}</div>
        </div>
    </div>;
}
 
export default ProductCard;