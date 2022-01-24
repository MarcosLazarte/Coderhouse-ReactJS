import Sipi from '../assets/sipi.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'

function Footer(){
    return(
        <>
        <div className="foot">
            <h1 className="foot_titulo">theVoyager</h1>
            <img className="foot_imagen" src={Sipi}/>
            <h3 className="foot_sub">travel-try-smile</h3>
            <div className="foot_containerLinks">
                <FontAwesomeIcon className="foot_link" icon={faInstagram}/>
                <FontAwesomeIcon className="foot_link" icon={faYoutube}/>
                <FontAwesomeIcon className="foot_link" icon={faTwitter}/>
            </div>

            <div className="foot_disclaimer">
            <p>Todos los derechos reservados a las páginas de las que me inspire</p>
            <p>Proyecto realizado para el curso de ReactJS de Coderhouse</p></div>


            
        </div>
        </>
    )
}
export default Footer