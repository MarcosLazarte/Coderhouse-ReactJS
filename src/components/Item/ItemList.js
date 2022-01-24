import React, {useState} from "react";
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount";

function ItemList ({name, price, detail, pictureUrl, id, codigo, stock}) {

    const[value, setValue] = useState(0)
    function onAdd(count){
        setValue(count)
    }
    return (
        <>
        <div className="catalogo_hamburguesa">
            <div>
                <Link to={"/items/"+codigo}><img className="catalogo_imagen" src={pictureUrl} alt={name}/></Link>
                <Link to={codigo}><h1 className="catalogo_titulo">{name}</h1></Link>
            </div>
        </div>
        </>
    )
}
export default ItemList