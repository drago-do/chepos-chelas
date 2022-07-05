import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./../../CSS/CPrincipalMeseros/PendientesYCompletados.css";

export default function MostrarOcultarPendientes() {
  const switchTarjeta = (event) => {
    const elemento = document.getElementsByClassName("tarjeta-flotante")[0];
    const icono = document.getElementById("icono-flecha");

    let valorTopElementoCerrado = (75 * window.screen.height) / 100 + "px";
    let valorTopElementoAbierto = (10 * window.screen.height) / 100 + "px";
    let top = elemento.style.top;
    console.error(top);
    console.error(valorTopElementoCerrado);
    console.log(top === valorTopElementoCerrado);
    console.error(valorTopElementoAbierto);
    console.log(top === valorTopElementoAbierto);
    console.log("----------------------------------------------------");
    elemento.style.top =
      top === valorTopElementoCerrado
        ? valorTopElementoAbierto
        : valorTopElementoCerrado;
    console.log(elemento.style.top);

    elemento.style.transition = "top 0.5s";
    icono.style.transform =
      icono.style.transform === "rotate(180deg)"
        ? "rotate(0deg)"
        : "rotate(180deg)";
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
