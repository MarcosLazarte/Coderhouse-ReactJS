import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Greeting from './Greetin';


function ItemCount ({stock: initialStock, onAdd, name}){

    const[count, setCount] = useState(0);
    const[stock, setStock] = useState(initialStock);


    const addCount = () => {
        if(stock>0){
            setCount(count +1)
            setStock(stock -1)
        }
    }
    const takeCount = () => {
        if (count>0){
            setCount(count -1)
            setStock(stock +1)
        }
    }
    
    const [pivote3, setPivote3] = useState(true);   //Llave para entrar en el if de Greetings y devolver boton de comprar o ir a carrito

    return(
        <div>
             Stock disponible: {stock} 
            <h3> <button onClick={takeCount}>-</button> Estas llevando: {count} <button onClick={addCount}>+</button></h3>
            <div>
                <Greeting entrar={pivote3} setEntrar={setPivote3} onAdd={onAdd} name={name} intento={count}/>
            </div>
        </div>
    )
}
export default ItemCount