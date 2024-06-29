'use client'
import Image from "next/image";
import { CartProductType} from "@/app/product/[id]/ProductDetails";

interface ProductImageProps {
    cartProduct?: CartProductType;
    product?: { images: string[]; title: string };
    handleColorSelect: (value: string) => void;
}

const SetProductImage: React.FC<ProductImageProps> = ({
    cartProduct,
    product,
    handleColorSelect
}) => {

    //console.log(cartProduct)
    //console.log("object ",product?.images)
    return (
        <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
            <div className="flex flex-col items-center justify-center gap-4 cursor-pointer border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
                {product?.images.map((image: string) => (
                    <div
                        key={image}
                        onClick={() => handleColorSelect(image)}
                        className={`relative w-[80%] aspect-square rounded border-teal-300 ${cartProduct?.selectedImg === image? 'border-[1.5px]' : 'border-none'}`}
                    >
                        <Image src={image} alt='undefined' fill className='object-contain' />
                    </div>
                ))}
            </div>
            <div className="col-span-5 relative aspect-square">
                {cartProduct?.selectedImg && (
                    <Image
                        fill
                        className='w-full h-full object-contain max-h-[500px] min-h-[300px] sm:min-h-[400px]'
                        src={cartProduct.selectedImg}
                        alt={cartProduct.name}
                    />
                )}
            </div>
        </div>
    );
}

export default SetProductImage;