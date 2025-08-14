import './Categories.scss'
import {products} from "../../data/data";
import {Link, useParams} from "react-router-dom";


function Category() {

    const {categoryId} = useParams();
    console.log(categoryId);

    const currentCategoryArray = products.filter(products => products.categoryId === categoryId)
    console.log(currentCategoryArray);

    return (
        <div>
            <h1>{categoryId}</h1>
            <ul style={{display: 'flex', gap:'1em'}}>
                {
                    currentCategoryArray.map(product =>(
                        <li key={product.name}>
                            <Link to={`/product/${product.id}`} style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
                                {product.name} {product.price}
                                <img src={product.img} alt="" style={{width:'200px'}}/>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Category