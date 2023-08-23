// import { useState } from "react";
import "./MiOrg.css";

function MiOrg(props) {

    //Estado - hooks
    //useState
    //useState()
    //const [nombreVariable, funcionActualiza] = useState(valorInicial)
/*     const [mostrar, actualizarMostar] = useState(true);
    const manejarClick = () => {
        actualizarMostar(!mostrar);
    } */

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostar}/>
    </section>
}

export default MiOrg