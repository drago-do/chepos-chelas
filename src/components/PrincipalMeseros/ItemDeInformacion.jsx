import React from "react";

//*Importar el CSS
import "./../../CSS/CPrincipalMeseros/ItemDeInformacion.css";
export default function ItemDeInformacion({
  numeroid,
  producto,
  estado,
  nombreMesero,
  estadoEnCaja,
  precio,
}) {
  return (
    <div className="item-contenedor">
      <div className="item-contenedor-imagen">X</div>
      <div className="item-contenido-listar-informacion1">
        <div className="item-contenedor-informacion">
          <div className="item-contenedor-numeroid">#{numeroid}</div>
          <div className="item-contenedor-producto">{producto}</div>
        </div>
        <div className="item-contenedor-informacion">
          <div className="item-contenedor-estado">{estado}</div>
          <div className="item-contenedor-nombreMesero">{nombreMesero}</div>
        </div>
      </div>
      <div className="item-contenido-listar-informacion2">
        <div className="item-contenedor-estadoEnCaja">{estadoEnCaja}</div>
        <div className="item-contenedor-precio">$ {precio}</div>
      </div>
    </div>
  );
}
