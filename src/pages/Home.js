import React from 'react';
import { useState, useEffect } from "react";
import {getFirestore} from '../firebase/index.js'
import { Link , useParams } from "react-router-dom";
import ItemList from '../components/Item/ItemList';

function Home(){
    const[loading, setLoading] = useState(false);
    const[items, setItems] = useState([]);
    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const itemCollection = db.collection("Hamburguesas");

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
    <div className="home_body">
        <div className="home">
            <div className="homeShade"></div>
        </div>
        <h1 className="home_titulo">theVoyager</h1>
        <h2 className="home_subtitulo">- Buenos Aires -</h2>
        <div>
          {items.length ?
          <div className="home_imagenes">
            <img className="home_imagen" src={items[2].pictureUrl}/>
            <img className="home_imagen" src={items[0].pictureUrl}/>
            <img className="home_imagen" src={items[6].pictureUrl}/>
            <div className="home_imagenes-shade"></div>
            <div className="home_imagenes-titulos">
              <p className="home_imagenes-cuerpo">Travel</p>
              <p className="home_imagenes-cuerpo">Try</p>
              <p className="home_imagenes-cuerpo">Smile</p> 
            </div>
          </div>
          : <div className="cargandoHambu">Cargando Hamburguis...</div>}
        </div>
        <div className="home_cuerpo">
            <div className="home_columna"></div>
            <div>
                <div className="home_cuerpo-espacio"></div>
                <div className="home_cuerpo-tituloDecoracion">
                    <div className="home_cuerpo-titulo2">Un poco de nosotros</div>
                </div>
                <div className="home_cuerpo-parrafo">
                    Nacimos en el 2001 en Boedo, provenientes de una extensa tradición gastronómica familiar. En un comienzo, nos avocamos a comida casera y café de alta gama; construyendo nuestro propio ADN. En ese camino, nos obsesionamos con la hamburguesa perfecta, y haciendo pruebas, lentamente empezamos a testear el producto.
                    El impacto de la gente fue inmediato. Fascinados con la experiencia, se lanzaron a recomendar el sándwich de boca a boca.Ese enorme fervor y entusiasmo que la propia presión de los clientes transformó, hizo de la birra bar un centro de culto para los fanáticos de las hamburguesas.
                </div>
                    <div className="home_cuerpo-titulo">¿EL SECRETO DEL ÉXITO?</div>
                <div className="home_cuerpo-parrafo">
                    ES UN SOLO INGREDIENTE: NUESTRA PASÍON
                    Desde 1992 gestamos productos en nuestras cocinas que son reconocidos, el periodismo especializado nos posicionó en reiteradas ocasiones como la mejor hamburguesa de Argentina.
                    Provenimos de una familia con tradición gastronómica y como resultado de nuestra pasión elaboramos hamburguesas extraordinarias y una inolvidable experiencia de compra.
                </div>
                <div>
                <div className="home_cuerpo-tituloDecoracion">
                    <div className="home_cuerpo-titulo2">Locales</div>
                </div>
                </div>
                <div className="home_cuerpo-parrafo">
                    Al igual que con nuestra hamburguesa, nos tomamos el tiempo necesario en diseñar y desarrollar cada rincón de nuestro local. Por eso en TBC vas a encontrar el mejor servicio y diseño para cubrir todas tus necesidades.
                </div>
            <div className="home_cuerpo-espacio"></div>
            </div>
            <div className="home_columna"></div>
        </div>
    </div>
    )
}
export default Home;