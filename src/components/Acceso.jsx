import React from "react";

//* Importar componentes de la vista
import ElementoBarraNavegacion from "./ElementoBarraNavegacion";
import Usuario from "./Acceso/Usuario";
import DisplayYTeclado from "./Acceso/DisplayYTeclado";

//* Importar estilos
import "./../CSS/Acceso/Acceso.css";

export default function Acceso() {
  const [usuario, setUsuario] = React.useState("");
  // const [contraseña, setContraseña] = React.useState("");

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

  return (
    <>
      <div className="acceso-principal">
        <ElementoBarraNavegacion tituloActividad="Acceder a Aplicación" />

        <h1>Inicia Sesión</h1>

        <div className="contenedor-usuarios" onClick={seleccionUsuario}>
          <Usuario nombre="Juan" estaActivo={usuario === "Juan"} avatar="1" />
          <Usuario
            nombre="Monica"
            estaActivo={usuario === "Monica"}
            avatar="3"
          />
          <Usuario nombre="Pedro" estaActivo={usuario === "Pedro"} avatar="2" />
        </div>
        <p> Selecciona tu usuario y coloca tu contraseña</p>
        <DisplayYTeclado />
      </div>
    </>
  );
}
