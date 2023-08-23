import "./Equipo.css";
import Colaborador from "../colaborador";
import hexToRgba from "hex-to-rgba";

function Equipo(props) {

    //Destructuración
    const { /* background, */ subBackground, titulo, id } = props.datos //Con eso ya no es necesario poner props.datos
    const { colab, deleteColaborador, actualizarColor, like } = props

    const colorFondo = {
        background: hexToRgba(subBackground, 0.6)
    }

    //console.log(colab.length > 0);
    const colorSubrayado = {
        borderColor: subBackground
    }

    return <>
        {colab.length > 0 &&
            <section className="equipo" style={colorFondo}>
                <input type="color" className="input-color" value={subBackground} onChange={(e) => {
                    actualizarColor(e.target.value, id);
                }} />
                <h3 style={colorSubrayado}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colab.map((colaborador, index) => <Colaborador datos={colaborador} key={index} backgroundCard={subBackground} deleteColab={deleteColaborador} like={like} />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo