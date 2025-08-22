import './Cart.scss'
import {Link} from "react-router-dom";


function Cart() {

    return (
        <div>

            Cart

            <Link to={'/thanks'}>
                <button>Order</button>
            </Link>
        </div>
    )
}

export default Cart