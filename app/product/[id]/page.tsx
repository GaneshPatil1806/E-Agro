import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { products } from "@/utils/products";
import ListRating from "../ListRatings";

interface IParams {
    id?: string;
}

const Product = ({ params }: { params: IParams }) => {

    const product = products.find((prod) => prod.id === Number(params.id));

    // console.log("product", product);
    return (
        <div className="p-8">
            <Container>
                {product ? (
                    <>
                        <ProductDetails product={product} />
                        <div className="flex flex-col mt-20 gap-4">
                            <div>Add rating</div>
                            <ListRating product={product} />
                        </div>
                    </>
                ) : (
                    <div>Product not found</div>
                )}
            </Container>
        </div>
    );
};

export default Product;