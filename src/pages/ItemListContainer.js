//Importar cositas necesarias
import React, {useState, useEffect} from 'react';
//Importar componentes
import ItemList from '../components/Item/ItemList';
import {getFirestore} from '../firebase/index.js'
import Filtros from '../components/Filtros';
import BannerHambu from '../components/BannerHambu.js';
import {Link} from 'react-router-dom';

function filtroOfertas(){
    console.log("filtroOfertas");
}

function filtroDeluxe(){
    console.log("filtroDeluxe");
}

const ItemListContainer = () => {
    const[loading, setLoading] = useState(false);
    const[items, setItems] = useState([]);
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("Hamburguesas");
    
        const filtro = itemCollection.where('price', '>', 500)
        .where('price','<',600)

    itemCollection.get().then((querySnapshot) => { // antes en vez de filtro estaba itemCollection, sí quiero el de los filtros, pongo el filtro
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
          <div  className="catalogo">
            <div className="home_columna"><div className="testoham">let'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomething</div></div>
            <div>
              <div className="catalogo_banners">
                  <Link to={`/filtrosOfertas`}><BannerHambu ofertas={"Ofertas"}/></Link>
                  <Link to={`/filtrosDeluxe`}><BannerHambu ofertas={"Deluxes"}/></Link>
              </div>
              {items ? items.map(hambus => <ItemList key={hambus.id} {...hambus}/>) : <div className="cargandoHambu">Cargando Hamburguis...</div>}
            </div>
            <div className="home_columna"><div className="testoham">let'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomethinglet'seatsomething</div></div>
          </div>
        </>
    )
}
export default ItemListContainer