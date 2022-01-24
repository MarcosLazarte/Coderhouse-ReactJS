import React, {useContext} from "react"
import CartContext from '../components/CartContext';

function CartWidget() {
    const {carritoV2 ,setCarritoV2} = useContext(CartContext);

    if(carritoV2.length === 0){
        return<></>
    }
    else if(carritoV2.length > 0) {
        let suma = 0;
        carritoV2.map((entry) => suma = suma + entry.quantity)
        return(
            <>
                <div className="navBar_cartWidget">{suma}</div>
            </>
        )
    }
}
export default CartWidget