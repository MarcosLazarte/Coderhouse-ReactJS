//Importar cositas necesarias
import React, {useEffect, useState} from 'react';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';
//Importar componentes
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ItemListContainer from './pages/ItemListContainer';
import Item from './components/Item/Item';
import Cart from './pages/Cart';
import Filtros from './components/Filtros';
import FiltrosCaros from './components/FiltrosCaros';
import Footer from './components/Footer'
//importar context
import { CartProvider } from './components/CartContext';
//importar firestore
import {getFirestore, getFirebase} from './firebase/index.js'
//importar pages
import Contactanos from './pages/Contactanos';
import Test from './components/Test';

function App() {
  const[carritoV2, setCarritoV2] = useState([]);
  const[loading, setLoading] = useState(false);
  const[items, setItems] = useState([]);
  const[orderId, setOrderId] = useState("");

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("Hamburguesas");

    const filtro = itemCollection.where('price', '>', 500)
      .where('price','<',600)

    itemCollection.get().then((querySnapshot) => { // antes en vez de filtro estaba itemCollection
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

  function Button (props){
    const computedClassName = props.active ? 'test1' : 'test2';
    return(<button className={computedClassName}>Test2</button>)
  }
  function clickazo(){
    const wrapper = this.wrapperRef.current;
    wrapper.classList.toggle('is-nav-open');
  }

  return (

    <div className="App">
      <CartProvider value={{carritoV2, setCarritoV2, items}}> 
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route exact path="/items/:codigo" component={Item}>
            </Route>

            <Route exact path="/items">
              <ItemListContainer/>
            </Route>

            <Route exact path="/cart">
              <Cart/>
            </Route>

            <Route exact path="/contactanos">
              <Contactanos/>
            </Route>

            <Route exact path="/filtrosOfertas">
              <Filtros flag={1}/>
            </Route>

            <Route exact path="/filtrosDeluxe">
              <FiltrosCaros flag={2}/>
            </Route>

            <Route exact path="/blog/:asdf" component={Test}>
            </Route>

          </Switch>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;