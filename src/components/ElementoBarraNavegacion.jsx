import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

import "./../CSS/ElementosGenerales.css";

export default function ElementoBarraNavegacion({ tituloActividad }) {
  const pathname = window.location.pathname;
  //Eliminar caracteres hasta encontrar el primer slash
  const pathnameAnterior = (pathname) => {
    if (pathname.substring(pathname.length, pathname.length - 1) === "/") {
      return pathname;
    } else {
      return pathnameAnterior(pathname.substring(0, pathname.length - 1));
    }
  };
  return (
    <div className="elemento-barra-navegacion">
      <Link to={pathnameAnterior(pathname)}>
        <AiOutlineRollback
          style={{
            color: "black",
            fontSize: "1.5rem",
            padding: "0.2rem",
            width: "1em",
          }}
        />
      </Link>
      <h3>{tituloActividad}</h3>
      <Link to="/" className="regresar-y-cerrar">
        Inicio
      </Link>
    </div>
  );
}
