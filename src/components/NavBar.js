import {Link, NavLink} from 'react-router-dom';
import iNav8 from '../assets/iNav8.png'
import icon from '../assets/icon.jpeg'
import Sipi from '../assets/sipi.png'
import Sopo from '../assets/sopo.png'
import CartWidget from './CartWidget';


export default function NavBar(){
    return (
        <>
        <header>
         <NavLink to={`/items`} activeClassName="testnavbar" className="navBar">
                <Link to={`/`}><p className="apale">Home</p></Link>
                <NavLink to={`/items`} activeClassName="test1"><p className="apale">Catalogo</p></NavLink>
                <Link to={`/`}><div className="apale2">  <img className="navBar_logo" src={Sopo}/></div></Link> 
                <Link to={`/contactanos`}><p className="apale">Contactanos</p></Link>
                <Link to={`/cart`}><p className="apale">Carrito</p></Link>
        </NavLink>
        <CartWidget/>
        </header>
        </>
    )
}