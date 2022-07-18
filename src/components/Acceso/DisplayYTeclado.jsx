import React from "react";
import { FaBackspace } from "react-icons/fa";
import "./../../CSS/Acceso/DisplayYTeclado.css";

export default function DisplayYTeclado({ caracteres, onClick }) {
  let relleno1 = caracteres >= 1 ? " relleno-circulo" : "";
  let relleno2 = caracteres >= 2 ? " relleno-circulo" : "";
  let relleno3 = caracteres >= 3 ? " relleno-circulo" : "";
  let relleno4 = caracteres === 4 ? " relleno-circulo" : "";

  return (
    <>
      <div className="contenedor-contrasena">
        <div id="caracter-1" className={`circulo-contrasena${relleno1}`}></div>
        <div id="caracter-2" className={`circulo-contrasena${relleno2}`}></div>
        <div id="caracter-3" className={`circulo-contrasena${relleno3}`}></div>
        <div id="caracter-4" className={`circulo-contrasena${relleno4}`}></div>
      </div>

      <div className="contenedor-teclado" onClick={onClick}>
        <div className="fila-teclado">
          <div className="contenedor-numerico">1</div>
          <div className="contenedor-numerico">2</div>
          <div className="contenedor-numerico">3</div>
        </div>
        <div className="fila-teclado">
          <div className="contenedor-numerico">4</div>
          <div className="contenedor-numerico">5</div>
          <div className="contenedor-numerico">6</div>
        </div>
        <div className="fila-teclado">
          <div className="contenedor-numerico">7</div>
          <div className="contenedor-numerico">8</div>
          <div className="contenedor-numerico">9</div>
        </div>
        <div className="fila-teclado">
          <div className="contenedor-numerico-vacio"></div>
          <div className="contenedor-numerico">0</div>
          <div id="cont-eliminar-caracter" className="contenedor-numerico">
            <FaBackspace id="eliminar-caracter" />
          </div>
        </div>
      </div>
    </>
  );
}
