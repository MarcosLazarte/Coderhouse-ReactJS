import React, {useState} from "react";
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";

function ItemDetail ({name, price, detail, pictureUrl, id, codigo, stock}) {

    const[value, setValue] = useState(0)
    function onAdd(count){
        setValue(count)
    }
    return (
        <>
        <div className="itemDetail_hamburguesa">
            <div>
                <img className="catalogo_imagen" src={pictureUrl} alt={name}/>
            </div>
            <div>
                <h1 className="catalogo_titulo">{name}</h1>
                <p>{price}</p>
                <p>{detail}</p>
                <ItemCount stock={stock} name={name} onAdd={onAdd} id={id}/>
            </div>
        </div>
        </>
    )
}
export default ItemDetail