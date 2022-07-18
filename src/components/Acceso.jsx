import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

//* Importar componentes de la vista
import ElementoBarraNavegacion from "./ElementoBarraNavegacion";
import Usuario from "./Acceso/Usuario";
import DisplayYTeclado from "./Acceso/DisplayYTeclado";

//* Importar estilos
import "./../CSS/Acceso/Acceso.css";

export default function Acceso() {
  const [usuario, setUsuario] = React.useState("");
  const [contraseña, setContraseña] = React.useState("");
  let navigate = useNavigate();

  const verificarContraseña = () => {
    // !Mejorar esta implementacion
    if (contraseña === "5454" && usuario === "Jonathan") {
      // return navigate("/administracion");
      <Navigate replace to="/administacion" />;
      console.log("hola");
    }
    if (contraseña === "5454" && usuario === "Josh") {
      return navigate("/caja");
    }
    if (contraseña === "5454" && usuario === "Juan") {
      return navigate("/orden-mesero");
    }
    console.log("Contraseña incorrecta");
    setContraseña("");
  };

  const seleccionUsuario = (e) => {
    let usuarioSeleccionado = "";
    // console.log(e);
    // console.log(e.target);
    //Si el target es una imagen se muestra la propiedad alt, si es un p, se muestra el texto si no se muestra el valor
    if (e.target.tagName === "IMG") {
      usuarioSeleccionado = e.target.alt;
    }
    if (e.target.tagName === "P") {
      usuarioSeleccionado = e.target.innerText;
    }
    if (e.target.tagName === "DIV") {
      usuarioSeleccionado = e.target.lastChild.id;
    }
    console.log(usuarioSeleccionado);
    setUsuario(usuarioSeleccionado);
  };

  if (contraseña.length >= 4) {
    verificarContraseña();
  }
  const teclaPrecionada = (e) => {
    // console.log(e);
    // console.log(e.target.innerText);
    // console.log(e.target.id);
    // console.log(e.target);
    //Si el e.target.id es igual a cont-eliminar-caracter o igual a eliminar-caracter o el parentNode.id es igual a cont-eliminar-caracter o igual a eliminar-caracter se elimina el ultimo caracter de la contraseña
    if (
      e.target.id === "cont-eliminar-caracter" ||
      e.target.id === "eliminar-caracter" ||
      e.target.parentNode.id === "cont-eliminar-caracter" ||
      e.target.parentNode.id === "eliminar-caracter"
    ) {
      let contraseñaActualizada = contraseña.slice(0, -1);
      setContraseña(contraseñaActualizada);
    } else {
      setContraseña(contraseña + e.target.innerText);
    }
  };

  return (
    <>
      <div className="acceso-principal">
        <ElementoBarraNavegacion tituloActividad="Acceder a Aplicación" />

        <h1 className="titulo-inicia-sesion">Inicia Sesión</h1>

        <div className="contenedor-usuarios" onClick={seleccionUsuario}>
          <Usuario nombre="Josh" estaActivo={usuario === "Josh"} avatar="1" />
          <Usuario
            nombre="Monica"
            estaActivo={usuario === "Monica"}
            avatar="3"
          />
          <Usuario
            nombre="Jonathan"
            estaActivo={usuario === "Jonathan"}
            avatar="2"
          />
          <Usuario
            nombre="Carlos"
            estaActivo={usuario === "Carlos"}
            avatar="4"
          />
          <Usuario nombre="Poly" estaActivo={usuario === "Poly"} avatar="5" />
        </div>
        <p> Selecciona tu usuario y coloca tu contraseña</p>
        <DisplayYTeclado
          caracteres={contraseña.length}
          onClick={teclaPrecionada}
        />
      </div>
    </>
  );
}
