import './Home.scss'
import {Link, NavLink} from "react-router-dom";
import {categories} from "../../data/data";

function Home() {

    return (
        <div>
            <h1>Categories</h1>
            <Link to={'/category/Electronics'} state={{maxPrice: 600}}>
                Cheapest electronics
            </Link>
            <ul style={{display: 'flex'}}>
                {
                    categories.map((category) => (
                            <li key={category.id}>
                                <Link to={`/category/${category.name}`}>
                                    {category.name}
                                    <img src={category.img} alt={category.name} style={{width: '150px'}}/>
                                </Link>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default Home