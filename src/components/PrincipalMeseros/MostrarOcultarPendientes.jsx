import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./../../CSS/CPrincipalMeseros/PendientesYCompletados.css";

export default function MostrarOcultarPendientes() {
  const [mostrar, setmostrar] = React.useState(true);
  const switchTarjeta = (event) => {
    const elemento = document.getElementsByClassName("tarjeta-flotante")[0];
    const icono = document.getElementById("icono-flecha");

    let valorTopElementoCerrado = (75 * window.screen.height) / 100;
    let valorTopElementoAbierto = (10 * window.screen.height) / 100;
    let valorMedioPantalla = (50 * window.screen.height) / 100;
    let valorActual = elemento.style.top;
    valorActual = valorActual.substring(0, valorActual.length - 2); //quitar px

    elemento.style.transition = "top 0.5s";
    valorActual < valorMedioPantalla ? setmostrar(true) : setmostrar(false);

    if (mostrar) {
      elemento.style.top = valorTopElementoAbierto + "px";
      icono.style.transform = "rotate(180deg)";
      setmostrar(false);
    } else {
      elemento.style.top = valorTopElementoCerrado + "px";
      icono.style.transform = "rotate(0deg)";
      setmostrar(true);
    }
  };
  return (
    <div onClick={switchTarjeta} className="activador-tarjeta">
      <div>
        <AiOutlineArrowUp
          id="icono-flecha"
          style={{ fontSize: "30px", fontWeight: "bolder", margin: "0" }}
        />
      </div>
      <p>Pendiente y completado</p>
    </div>
  );
}
