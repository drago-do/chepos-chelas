import React from "react";

//*Importar Componentes
import MostrarOcultarPendientes from "./MostrarOcultarPendientes";
import ItemDeInformacion from "./ItemDeInformacion";
//*Importar CSS
import "./../../CSS/CPrincipalMeseros/PendientesYCompletados.css";

let top75vh = 75;
let valorTopTarjetaInicial = (top75vh * window.screen.height) / 100 + "px";

export default function PendientesYCompletados() {
  const elemento = document.getElementsByClassName("tarjeta-flotante")[0];
  const icono = document.getElementById("icono-flecha");

  const [valorTopTarjeta, setvalorTopTarjeta] = React.useState(
    valorTopTarjetaInicial.substring(0, valorTopTarjetaInicial.length - 2)
  );

  const [posicionInicial, setposicionInicial] = React.useState(0);

  const scrollTarjeta = (event) => {
    elemento.style.transition = "top 0s";
    let nuevoMovimiento = event.changedTouches[0].clientY;
    let desplazamiento = nuevoMovimiento - posicionInicial;
    setvalorTopTarjeta(parseInt(valorTopTarjeta) + parseInt(desplazamiento));
    elemento.style.top = valorTopTarjeta + "px";
    setposicionInicial(nuevoMovimiento);
    icono.style.transform =
      valorTopTarjeta > 300 ? "rotate(0deg)" : "rotate(180deg)";
  };

  const puntoDePartidaTouch = (event) => {
    setposicionInicial(event.changedTouches[0].clientY);
    let valorTopTarjeta;
    try {
      valorTopTarjeta = elemento.style.top;
    } catch (error) {
      valorTopTarjeta = valorTopTarjetaInicial.substring(
        0,
        valorTopTarjetaInicial.length - 2
      );
    }
    setvalorTopTarjeta(valorTopTarjeta);
  };

  const finalCapturaTouch = (event) => {
    let top75vhAPixeles = (75 * window.screen.height) / 100;
    let top10vhAPixeles = (10 * window.screen.height) / 100;
    if (valorTopTarjeta > 300) {
      elemento.style.transition = "top 0.5s";
      elemento.style.top = top75vhAPixeles + "px";
    } else {
      elemento.style.transition = "top 0.5s";
      elemento.style.top = top10vhAPixeles + "px";
    }
    icono.style.transform =
      valorTopTarjeta > 300 ? "rotate(0deg)" : "rotate(180deg)";
  };

  return (
    <div
      className="tarjeta-flotante"
      onTouchMoveCapture={scrollTarjeta}
      onTouchStartCapture={puntoDePartidaTouch}
      onTouchEndCapture={finalCapturaTouch}
      style={{ top: valorTopTarjetaInicial }}
    >
      <div>
        <MostrarOcultarPendientes />
        <div className="contenedor-pendientes-completados">
          <h3>Pendiente</h3>
          <div className="contenedor-pendientes">
            <ItemDeInformacion
              numeroid="1"
              producto="Yarda indio"
              estado="Pendiente"
              nombreMesero="Juan"
              estadoEnCaja="Sin Pagar"
              precio="350"
            />
            <ItemDeInformacion
              numeroid="1"
              producto="Yarda indio"
              estado="Pendiente"
              nombreMesero="Juan"
              estadoEnCaja="Sin Pagar"
              precio="350"
            />
            <ItemDeInformacion
              numeroid="1"
              producto="Yarda indio"
              estado="Pendiente"
              nombreMesero="Juan"
              estadoEnCaja="Sin Pagar"
              precio="350"
            />
            <ItemDeInformacion
              numeroid="1"
              producto="Yarda indio"
              estado="Pendiente"
              nombreMesero="Juan"
              estadoEnCaja="Sin Pagar"
              precio="350"
            />
          </div>
          <h3>Completado</h3>
          <div className="contenedor-completados">
            <ItemDeInformacion
              numeroid="1"
              producto="Yarda indio"
              estado="Entregado"
              nombreMesero="Juan"
              estadoEnCaja="Pagado"
              precio="350"
            />
            <ItemDeInformacion
              numeroid="1"
              producto="Yarda indio"
              estado="Entregado"
              nombreMesero="Juan"
              estadoEnCaja="Pagado"
              precio="350"
            />
            <ItemDeInformacion
              numeroid="1"
              producto="Yarda indio"
              estado="Entregado"
              nombreMesero="Juan"
              estadoEnCaja="Pagado"
              precio="350"
            />
            <ItemDeInformacion
              numeroid="1"
              producto="Yarda indio"
              estado="Entregado"
              nombreMesero="Juan"
              estadoEnCaja="Pagado"
              precio="350"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
