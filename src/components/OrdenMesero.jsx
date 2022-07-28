import React from "react";
import ElementoBarraNavegacion from "./ElementoBarraNavegacion";
import CategoriaMenu from "./OrdenMesero/CategoriaMenu";
import ItemDeInformacion from "./Principal/ItemDeInformacion";
import TarjetaFlotante from "./Principal/TarjetaFlotante";

import "./../CSS/OrdenMesero/OrdenMesero.css";

export default function OrdenMesero() {
  return (
    <>
      <ElementoBarraNavegacion tituloActividad="Orden" />
      <div className="orden-meseros">
        <div className="contenedor-de-productos">
          <CategoriaMenu
            imagen="X"
            nombre="Cerveza"
            descripcion="Yardas, 1/2, cahuamas."
          />
          <CategoriaMenu
            imagen="X"
            nombre="Cerveza"
            descripcion="Yardas, 1/2, cahuamas."
          />
          <CategoriaMenu
            imagen="X"
            nombre="Cerveza"
            descripcion="Yardas, 1/2, cahuamas."
          />
          <CategoriaMenu
            imagen="X"
            nombre="Cerveza"
            descripcion="Yardas, 1/2, cahuamas."
          />
          <CategoriaMenu
            imagen="X"
            nombre="Cerveza"
            descripcion="Yardas, 1/2, cahuamas."
          />
          <CategoriaMenu
            imagen="X"
            nombre="Cerveza"
            descripcion="Yardas, 1/2, cahuamas."
          />
          <CategoriaMenu
            imagen="X"
            nombre="Cerveza"
            descripcion="Yardas, 1/2, cahuamas."
          />
          <CategoriaMenu
            imagen="X"
            nombre="Cerveza"
            descripcion="Yardas, 1/2, cahuamas."
          />
        </div>
      </div>
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
    </>
  );
}
