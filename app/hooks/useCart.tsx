import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { CartProductType } from "../product/[id]/ProductDetails";
import { toast } from "react-hot-toast";

type CartContextType = {
    cartTotalQty: number;
    cartTotalAmt: number;
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType)=> void
    handleRemoveProductFromCart: (product: CartProductType)=> void
    handleCartQtyDecrease:(product: CartProductType)=> void
    handleCartQtyIncrease:(product: CartProductType)=> void
    handleClearCart: ()=> void
}

interface Props {
    [propName: string]: any;
}
export const CartContext = createContext <CartContextType | null>(null);

export const CartContextProvider =(props: Props)=> {

    const [cartTotalQty,setCartTotalQty] = useState(0);
    const [cartTotalAmt,setCartTotalAmt] = useState(0);
    const [cartProducts,setcartProducts] = useState<CartProductType[] | null>(null);

    useEffect(()=>{
        const cartItems: any = localStorage.getItem('eShopCartItems');
        const cProducts: CartProductType[] | null = JSON.parse(cartItems);
        setcartProducts(cProducts);
    },[]);
    
    useEffect(()=>{
        if(cartProducts){
            const {total,qty} = cartProducts?.reduce((acc,item)=>{
                const itemTotal=item.price*item.quantity;
                acc.total += itemTotal;
                acc.qty += item.quantity;

                return acc;
            },{
                total:0,
                qty:0
            })
            
            //console.log("total,qty ",total)
            setCartTotalAmt(total);
            setCartTotalQty(qty);
        }
    },[cartProducts])

    const handleClearCart = useCallback(()=>{
        setcartProducts(null);
        setCartTotalQty(0);
        localStorage.setItem('eShopCartItems',JSON.stringify(null));
    },[])

    const handleCartQtyIncrease = useCallback((product: CartProductType)=>{
        let updatedCart;
        if(cartProducts){
            updatedCart=[...cartProducts];

            const exist = cartProducts.findIndex((item)=>item.id === product.id);
            if(exist>-1){
                updatedCart[exist].quantity++;
            }

            setcartProducts(updatedCart);
            localStorage.setItem('eShopCartItems',JSON.stringify(updatedCart));
        }
    },[cartProducts,setcartProducts])

    const handleCartQtyDecrease = useCallback((product: CartProductType)=>{
        let updatedCart;
        if(cartProducts){
            updatedCart=[...cartProducts];

            const exist = cartProducts.findIndex((item)=>item.id === product.id);
            if(exist>-1){
                if(updatedCart[exist].quantity===1){
                    return toast.error('Minimum limit reached!'); 
                }
                updatedCart[exist].quantity--;
            }

            setcartProducts(updatedCart);
            localStorage.setItem('eShopCartItems',JSON.stringify(updatedCart));
        }
    },[cartProducts,setcartProducts])

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

    const handleRemoveProductFromCart = useCallback((product: CartProductType)=>{
        if(cartProducts){
            const filteredProducts = cartProducts.filter((item)=>{
                return item.id!==product.id;
            })

            setcartProducts(filteredProducts);
            localStorage.setItem('eShopCartItems',JSON.stringify(filteredProducts));
            toast.success('Product removed');
        }   
    },[cartProducts])

    const value = {
        cartTotalQty,
        cartProducts,
        handleAddProductToCart,
        handleRemoveProductFromCart,
        handleCartQtyDecrease,
        handleCartQtyIncrease,
        handleClearCart,
        cartTotalAmt
    }

    return <CartContext.Provider value={value} {...props}></CartContext.Provider>
}

export const useCart = () => {
    const context = useContext(CartContext);

    if(context===null)
        throw new Error('UseCart must be used within useContextProvider');

    return context;
}