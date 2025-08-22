import './Categories.scss'
import {products} from "../../data/data";
import {Link, useLocation, useParams, useSearchParams} from "react-router-dom";

function Category() {
    const {categoryId} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation()

    const currentCategoryArray = products.filter(p => p.categoryId === categoryId);

    function filterPriceChange(e) {
        setSearchParams({maxPrice: e.target.value});
    }

    // const priceMaxFilter = searchParams.get("maxPrice");

    const priceMaxFilter = location.state.maxPrice

    const filteredProducts = priceMaxFilter ? (
        currentCategoryArray.filter(p => p.price <= Number(priceMaxFilter))
    ) : currentCategoryArray;

    return (
        <div>
            {currentCategoryArray.length > 0 ? (
                <>
                    <h1>{categoryId}</h1>
                    <input type="text" placeholder="max price" onChange={filterPriceChange}/>
                    <ul style={{display: 'flex', gap: '1em'}}>
                        {filteredProducts.map(product => (
                            <li key={product.name}>
                                <Link to={`/product/${product.id}`}
                                      style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
                                    {product.name} {product.price}
                                    <img src={product.img} alt="" style={{width: '200px'}}/>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>Category not found</p>
            )}
        </div>
    )
}

export default Category
