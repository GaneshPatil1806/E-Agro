import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { product } from "@/utils/product";
interface Iparams {
    productId? : string
}

const Product = ({params} : {params: Iparams}) => {
    // console.log(params)
    //console.log(product)
    return (
        <div className="p-8">
            <Container>
                <ProductDetails product={product}/>
            </Container>
        </div>
    );
}
 
export default Product;