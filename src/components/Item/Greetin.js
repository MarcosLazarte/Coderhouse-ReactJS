import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../CartContext';

function Greeting({entrar, onAdd, intento, name, setEntrar}){

    const {items, carritoV2, setCarritoV2} = useContext(CartContext);

    useEffect(() => {
        if(entrar){       //pivote que esta seteado en true hasta que se realice una compra
            onAdd(intento);
        }
    }, [entrar, intento, addItem, onAdd]);

    function addItem(){
        setEntrar(false); //Con esto, apareece el boton "Ir a carrito"
        var pivote = false;
        carritoV2.map( (entry) => {
            if(entry.item.name === name){
                pivote = true;
            }
        })

        if(pivote){ //agrega más hamburguesas sí ya tenias una en el carrito
            let hambuBuscada2 = carritoV2.findIndex((hamburguesa) => hamburguesa.item.name === name)
            var hambuBuscada3 = items.find((hamburguesa) => hamburguesa.name === name)
            let contador = carritoV2[hambuBuscada2].quantity;
            var aux2 = {
                item: hambuBuscada3,
                quantity: intento + contador
            }
            let auxProducto = [...carritoV2]
            auxProducto[hambuBuscada2] = aux2
            setCarritoV2(auxProducto)
        }
        else{ // si no tenias la hamburugesa, la añade
            var hambuBuscada = items.find((hamburguesa) => hamburguesa.name === name)
            var aux = {
                item: hambuBuscada,
                quantity: intento
            }
            setCarritoV2([...carritoV2, aux])
        }
        


    }
    return(<>
    {!entrar && <Link to={`/cart`}><button onClick={() => setEntrar(true)}>Ir al carrito</button></Link>}

    {entrar && <button onClick={addItem}>Añadir al carrito</button>}
    </>
    );   //Sí se realiza una compra se dibuja el boton Ir a carrito
}
export default Greeting