import "./Colaborador.css";
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai"

function Colaborador(props) {
    const { nombre, puesto, foto, id, fav } = props.datos;
    const { backgroundCard, deleteColab, like } = props;

    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={()=>deleteColab(id)}/>
        <div className="encabezado" style={{background: backgroundCard}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color="red" onClick={()=> like(id)} />: <AiOutlineHeart onClick={()=> like(id)} />}           
        </div>
    </div>

}

export default Colaborador