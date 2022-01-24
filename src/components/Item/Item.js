import { useState, useEffect } from "react";
import { Link , useParams } from "react-router-dom";
import {getFirestore} from '../../firebase/index.js'
import ItemDetail from "./ItemDetail.js";

function Item(){
    let { codigo } = useParams();

    const[loading, setLoading] = useState(false);
    const[items, setItems] = useState([]);
    
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("Hamburguesas")
    
        const filtro = itemCollection.where('codigo','==', codigo)
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

    return(
        <>
          <div>
            {items.map(hambus => <ItemDetail key={hambus.id} {...hambus}/>)} 
          </div>
        </>
    )
}
export default Item