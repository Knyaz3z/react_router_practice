import './Header.scss'
import {NavLink} from "react-router-dom";

function Header() {

    return (
        <div>
            <h1>Header</h1>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/cart'}>Cart</NavLink>
            <NavLink to={'/category'}>Category</NavLink>
            <hr/>
        </div>
    )
}

export default Header