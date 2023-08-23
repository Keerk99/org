import "./Campo.css";

function Campo(props) {
  
  const manejarCambio = (e) => {
    props.actualizarValor(e.target.value);
  }

  //Destructuración
  const {type = "text"} = props
  // console.log(type);



  const placeholderModificado = `${props.placeholder}...`;

  return <div className={`campo campo-${type}`}>
    <label>{props.title}</label>
    <input type={type} placeholder={placeholderModificado} required={props.required} value={props.valor} onChange={manejarCambio} />
  </div>
}

export default Campo