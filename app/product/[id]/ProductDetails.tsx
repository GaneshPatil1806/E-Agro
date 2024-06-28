'use client'
import SetColor from "@/app/components/products/setColor";
import { Rating } from "@mui/material";
import { useCallback, useState } from "react";

interface ProductDetailsProps {
    product: any;
}

export type CartProductType = {
    id: string,
    name: string,
    category: string,
    description: string,
    brand: string,
    selectedImg: selectedImgType,
    quantity: number,
    price: number
}

export type selectedImgType = {
    color: string,
    colorCode: string,
    image: string,
}

const Horizontal =()=> {
    return <hr className="w-[30%] mt-2 my-2"></hr>
}

const ProductDetails: React.FC <ProductDetailsProps> = ({product}) => {
    //console.log(product)
    const productRating = product.reviews.reduce((acc: number, item: { rating: number }) => {
        return acc + item.rating
    }, 0) / product.reviews.length;

    const [cartProduct,setCartProduct] = useState<CartProductType>({
        id: product._id,
        name: product.title,
        description: product.description,
        category: product.category,
        brand: product.brand,
        selectedImg: {...product.images[0]},
        quantity: 1,
        price:product.price
    });

    const handleColorSelect = useCallback((value:selectedImgType)=>{
        setCartProduct((prev)=>{
            return {...prev,selectedImg:value}
        })
    },[cartProduct.selectedImg])

    return ( 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>Image</div>
            <div className="flex flex-col gap-1 text-slate-500">
                <h2 className="text-3xl font-medium text-slate-700">{product.title}</h2>
                <div className="flex items-center gap-2">
                    <div><Rating value={productRating} readOnly/></div>
                    <div>{product.reviews.length} reviews</div>
                </div>
                <Horizontal/>
                <div className="text-justify">{product.description}</div>
                <Horizontal/>

                <div>
                    <span className="font-semibold">CATEGORY:</span>
                </div>
                <div>
                    <span className="font-semibold">BRAND:</span>
                </div>  

                <div className={product.inStock ? 'text-teal-400' : 'text-rose-400'}>{product.inStock ? 'In stock' : 'Out of stock'}</div>

                <SetColor 
                cartProduct={cartProduct}
                handleColorSelect={handleColorSelect}
                images={product.images}/>

                <Horizontal/>
                Quantity
                <Horizontal/>
                Add to Cart
            </div>
        </div>
     );
}
 
export default ProductDetails;