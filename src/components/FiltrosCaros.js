import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';

import {getFirestore} from '../firebase/index.js'
import ItemList from "./Item/ItemList.js";

function FiltrosCaros ({flag}) {
    
    const[loading, setLoading] = useState(false);
    const[items, setItems] = useState([]);

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("Hamburguesas")
    
        const filtro = itemCollection.where('price','>',600)
        filtro.get().then((querySnapshot) => { // antes en vez de filtro estaba itemCollection, sí quiero el de los filtros, pongo el filtro
            if(querySnapshot.size === 0){
              console.log("no results");
            }else{
              setItems(querySnapshot.docs.map(doc => doc.data()))
            }
          }).catch(error => {
            console.log("error");
          }).finally(() => {
            setLoading(false);
          })
        }, []);

        if(flag === 1){
            
            return(
            <>
                <div  className="hamburguesasContenedor"> 
                    {items ? items.map(hambus => <ItemList key={hambus.id} {...hambus}/>) : <div className="cargandoHambu">Cargando Hamburguis...</div>} 
                </div>        
            </>
            )
        }
        else if(flag === 2){
            return(
                <>
                <Link to={`/filtrosOfertas`}><button>Ofertas</button></Link>
                <Link to={`/items`}><button>Volver</button></Link>
                <div  className="hamburguesasContenedor"> 
                    {items ? items.map(hambus => <ItemList key={hambus.id} {...hambus}/>) : <div className="cargandoHambu">Cargando Hamburguis...</div>} 
                </div>        
            </>
            )
        }
}
export default FiltrosCaros