import React from "react";
//* Importar componentes de la vista
import TarjetaFlotante from "./Principal/TarjetaFlotante";
import InformacionGeneral from "./Principal/InformacionGeneral";
import LogoChepos from "./Principal/LogoChepos";
import ItemDeInformacion from "./Principal/ItemDeInformacion";

export default function Principal() {
  return (
    <div>
      <InformacionGeneral />
      <LogoChepos />
      <TarjetaFlotante titulo="Pendientes y Completados">
        <ItemDeInformacion
          numeroid="1"
          producto="Yarda indio"
          estado="Pendiente"
          nombreMesero="Juan"
          estadoEnCaja="Sin Pagar"
          precio="350"
        />
      </TarjetaFlotante>
    </div>
  );
}
