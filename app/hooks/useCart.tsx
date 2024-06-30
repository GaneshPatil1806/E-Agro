import exp from "constants";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CartProductType } from "../product/[id]/ProductDetails";
import { toast } from "react-hot-toast";

type CartContextType = {
    cartTotalQty: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType)=> void
}

interface Props {
    [propName: string]: any;
}
export const CartContext = createContext <CartContextType | null>(null);

export const CartContextProvider =(props: Props)=> {
    const [cartTotalQty,setCartTotalQty] = useState(0);
    const [cartProducts,setcartProducts] = useState<CartProductType[] | null>(null);

    useEffect(()=>{
        const cartItems: any = localStorage.getItem('eShopCartItems');
        const cProducts: CartProductType[] | null = JSON.parse(cartItems);
        setcartProducts(cProducts);
    },[])

    const handleAddProductToCart = useCallback((product: CartProductType)=>{
        setcartProducts((prev)=>{
            let updatedCart;
            if(prev){
                updatedCart = [...prev,product];
            }else{
                updatedCart = [product];
            }

            localStorage.setItem('eShopCartItems',JSON.stringify(updatedCart));
            toast.success('Product added to cart!');
            return updatedCart;
        })
    },[]);

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart
    }

    return <CartContext.Provider value={value} {...props}></CartContext.Provider>
}

export const useCart = () => {
    const context = useContext(CartContext);

    if(context===null)
        throw new Error('UseCart must be used within useContextProvider');

    return context;
}