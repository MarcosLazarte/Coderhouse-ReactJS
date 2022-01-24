import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import { getFirestore, getFirebase } from '../firebase/index.js';

function Contactanos(){
    const {contactanos} = useParams()
    const [orderId, setOrderId] = useState("");
    const [datos, setDatos] = useState ({
        nombre: '',
        email: '',
        mensaje: '',
    })
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
        const mensajes = db.collection("mensajes")


        const userInfo={
            name: datos.nombre,
            email: datos.email,
            message: datos.message,
        }

        const newMensaje= {
            user: userInfo,
            //date: firebase.firesotre.Timestamp.fromDate(new Date()),
          }
          mensajes.add(newMensaje).then(({id}) => {
            setOrderId(id)
          }).catch(error => {
            console.log('error', error)
          })
        console.log('enviando datos...' +datos.nombre+ ' '+datos.email+ ' '+datos.message)
    }
        

        return(
            <div className="contactanos_body">
                <h2 className="contactanos_titulo">Contacto{contactanos}</h2>
                <div>
                    <form onSubmit={enviarDatos}>
                        <input className="contactanos_form" text="text" placeholder="Nombre" onChange={handleInputChange} name="nombre"/>
                        <input className="contactanos_form" text="text" placeholder="Email" onChange={handleInputChange} name="email"/>
                        <textarea className="contactanos_form message" text="text" placeholder="Message" onChange={handleInputChange} name="message"/>
                        <input className="contactanos_form" type="submit" value="Enviar" />
                    </form>
                </div>
                <ul>
                    <li>{datos.email}</li>
                    <li>{datos.nombre}</li>
                    <li>{datos.message}</li>
                </ul>
            </div>
        )
}

export default Contactanos