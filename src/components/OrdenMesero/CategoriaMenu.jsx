import React from "react";

export default function CategoriaMenu({ imagen, nombre, id, descripcion }) {
  return (
    <>
      <div className="categoria-menu" id={id}>
        <div className="imagen-categoria">{imagen}</div>
        <div className="informacion-categoria">
          <p className="nombre-principal">{nombre}</p>
          <p className="descripcion">{descripcion}</p>
        </div>
      </div>
    </>
  );
}
