import React, {useContext, useState, useEffect} from "react"
import CartContext from '../components/CartContext';
import {Link} from 'react-router-dom';
import {getFirestore, getFirebase} from '../firebase/index.js'


function Cart(){
    const {carritoV2 ,setCarritoV2} = useContext(CartContext);
    const[orderId, setOrderId] = useState("");
    const [datos, setDatos] = useState ({
        nombre: '',
        email: '',
        phone: 0,
    })

    function borrarProducto(index){
        let auxProducto = [...carritoV2]
        auxProducto.splice(index, 1)
        setCarritoV2(auxProducto)
    }

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault()

        const db = getFirestore();
        const firebase = getFirebase();
        const orders = db.collection("orders")

        const userInfo={
            name: datos.nombre,
            email: datos.email,
            phoneNumer: datos.phone,
        }
        let total = 0;
        carritoV2.map((entry) => total = total + entry.item.price * entry.quantity )
        const newOrder= {
            buyer: userInfo,
            items: carritoV2,
            total,
            //date: firebase.firesotre.Timestamp.fromDate(new Date()),
          }
          orders.add(newOrder).then(({id}) => {
            setOrderId(id)
          }).catch(error => {
            console.log('error', error)
          })
        console.log('enviando datos...' +datos.nombre+ ' '+datos.email+ ' '+datos.phone)
    }

    if(carritoV2.length === 0){
        return(
            <div className="cart_body">
                <h1 className="cart_titulo">El carrito esta vacio</h1>
                <Link to={`/items`}><div className="testo">Tienes hambre? Tengo la solución</div></Link>
            </div>
        )
    }else if (carritoV2.length > 0 ){
        let suma = 0;
        carritoV2.map((entry) => suma = suma + entry.item.price * entry.quantity )
            return(
                <div className="cart_body">
                    {carritoV2.map((entry,index) =>
                    <div key={entry.item.id} className="cart">
                        <h1 className="cartTitulo" >{entry.item.name}</h1>
                        <img className="cartImagen" src={entry.item.pictureUrl} alt={entry.item.name}/>
                        <p className="cartPrecio">{entry.item.price}</p>
                        <p className="cartCantidad">{entry.quantity}</p>
                        <button className="cartBorrar" onClick={() => borrarProducto(index)}>Borrar</button>
                    </div>)}

                    <div className="cartTotal">El total es: {suma}</div>

                    <div>
                        <form onSubmit={enviarDatos}>
                            <input text="text" placeholder="Nombre" onChange={handleInputChange} name="nombre"/>
                            <input text="text" placeholder="Email" onChange={handleInputChange} name="email"/>
                            <input text="text" placeholder="Phone" onChange={handleInputChange} name="phone"/>
                            <input type="submit" value="Enviar" />
                        </form>
                    </div>
                    <ul>
                        <li>{datos.email}</li>
                        <li>{datos.nombre}</li>
                        <li>{datos.phone}</li>
                    </ul>
                </div>
            )
    }

}
export default Cart;