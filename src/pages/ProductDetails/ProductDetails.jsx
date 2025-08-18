import './ProductDetails.scss'
import {products} from "../../data/data";
import {useParams} from "react-router-dom";

function ProductDetails() {

    const {productId} = useParams()

    const currentProduct = products.find(p => p.id === Number(productId))

    return (
        <div>
            <h1>{currentProduct.name}</h1>
            <img style={{width: '150px'}} src={currentProduct.img} alt=""/>
            <h3>{currentProduct.price}$</h3>
        </div>
    )
}

export default ProductDetails