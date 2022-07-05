import React from "react";
//* Importar componentes de la vista
import PendientesYCompletados from "./PrincipalMeseros/PendientesYCompletados";
import InformacionGeneral from "./PrincipalMeseros/InformacionGeneral";
import LogoChepos from "./PrincipalMeseros/LogoChepos";

export default function PrincipalMeseros() {
  return (
    <div>
      <InformacionGeneral />
      <LogoChepos />
      <PendientesYCompletados />
    </div>
  );
}
