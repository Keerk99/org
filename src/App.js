import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/header/Header';
import Formulario from './components/form/Form';
import MiOrg from './components/miOrg';
import Equipo from './components/equipo';
import Footer from './components/footer';

function App() {

  const [mostrarForm, actualizarMostar] = useState(true);
  //const [colaboradores, actualizarColaboradores] = useState([]); Esto es para empezar con datos vacios
  //Para empezar con datos por defectos
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie",
      puesto: "Instructora",
      fav: true
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian",
      puesto: "Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose",
      puesto: "Instructor",
      fav: true
    }
  ]);

  const [equipos, actualizarColorEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programación",
      background: "#D9F7E9",
      subBackground: "#57C278"
    },
    {
      id: uuid(),
      titulo: "Front End",
      background: "#E8F8FF",
      subBackground: "#82CFFA"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      background: "#F0F8E2",
      subBackground: "#A6D157"
    },
    {
      id: uuid(),
      titulo: "Devops",
      background: "#FDE7E8",
      subBackground: "#E06B69"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      background: "#FAE9F5",
      subBackground: "#DB6EBF"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      background: "#FFF5D9",
      subBackground: "#FFBA05"
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      background: "#FFEEDF",
      subBackground: "#FF8A29"
    }
  ]);

  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra

  const cambiarMostar = () => {
    actualizarMostar(!mostrarForm)
  }

  //Registar Colaborador
  const registrarColaborador = (colaborador) => {
    //console.log("Nuevo", colaborador);

    //Spread Operator
    actualizarColaboradores([...colaboradores, colaborador]);
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    // console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }

  //Actualizar color de equipo
  const actualizarColorEquipo = (color, id) => {
    // console.log("Actualizar", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.subBackground = color
      }

      return equipo
    })

    actualizarColorEquipos(equiposActualizados);
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    // console.log(nuevoEquipo);
    actualizarColorEquipos([...equipos, { ...nuevoEquipo, id: uuid() }])
  }

  //Like a colaboradores
  const like = (id) => {
    // console.log("like", id);
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header />
      {/* {mostrarForm === true ? <Formulario /> : <></>} */}
      {mostrarForm && <Formulario datos={equipos.map((equipo) => equipo.titulo)} registrarColab={registrarColaborador} crearEquipo={crearEquipo} />}
      <MiOrg cambiarMostar={cambiarMostar} />
      {
        equipos.map((equipo) => <Equipo datos={equipo} key={equipo.titulo} colab={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} deleteColaborador={eliminarColaborador} actualizarColor={actualizarColorEquipo} like={like} />)
      }
      <Footer />
    </div>
  );
}

export default App;