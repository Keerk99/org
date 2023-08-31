import { useState } from "react";
import "./Form.css";
import Campo from "../campo";
import ListaOpciones from "../listaOpciones";
import Boton from "../boton";
import { v4 as uuid } from 'uuid';


function Formulario(props) {

    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipo] = useState("");
    const [titulo, actualizarTitulo] = useState("");
    const [subBackground, actualizarColor] = useState("");

    const {registrarColab, crearEquipo} = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            id: uuid(),
            nombre, //name : nombre,
            puesto, //occupation: puesto,
            foto, //photo : foto
            equipo
        }
        registrarColab(datosAEnviar);
    }

    const manejarEnvioCrearEquipo = (e) => {
        e.preventDefault();
        let datosAEnviar = {
            titulo,
            subBackground
        }
        crearEquipo(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo title="Nombre" placeholder="Ingresar nombre" required valor={nombre} actualizarValor={actualizarNombre} />
            <Campo title="Puesto" placeholder="Ingresar puesto" required valor={puesto} actualizarValor={actualizarPuesto} />
            <Campo title="Foto" placeholder="Ingresar enlace de foto" required valor={foto} actualizarValor={actualizarFoto} />
            <ListaOpciones valor={equipo} actualizarValor={actualizarEquipo} equipos={props.datos} />
            <Boton>Crear</Boton>
        </form>

        <form onSubmit={manejarEnvioCrearEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo title="Titulo" placeholder="Ingresar titulo" required valor={titulo} actualizarValor={actualizarTitulo} />
            <Campo title="Color" placeholder="Ingresar el color Hex" required valor={subBackground} actualizarValor={actualizarColor} type={"color"} />
            <Boton>Registar Equipo</Boton>
        </form>
    </section>
}

export default Formulario