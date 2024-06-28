'use client';

import React from 'react';
import { CartProductType, selectedImgType } from "@/app/product/[id]/ProductDetails";

interface SetColorProps {
    images: selectedImgType[],
    cartProduct: CartProductType,
    handleColorSelect: (value: selectedImgType) => void
}

const SetColor: React.FC<SetColorProps> = ({ images, cartProduct, handleColorSelect }) => {
    return (
        <div className='flex gap-1'>
            {images.map((img) => {
                return (
                    <div
                        key={img.color} 
                        onClick={() => handleColorSelect(img)} 
                        className={`h-7 w-7 rounded-full border-teal-300 flex items-center justify-center 
                            ${cartProduct.selectedImg.color === img.color ? "border-[1.5px]" : "border-none"}`}
                    >
                        <div
                            style={{ background: img.color }}
                            className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"
                        ></div>
                    </div>
                );
            })}
        </div>
    );
}

export default SetColor;
