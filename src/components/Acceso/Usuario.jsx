import React from "react";
//* Importar imagenes avatars Default
import avatar1 from "./../../img/avatarDefault/avatar1.png";
import avatar2 from "./../../img/avatarDefault/avatar2.png";
import avatar3 from "./../../img/avatarDefault/avatar3.png";
import avatar4 from "./../../img/avatarDefault/avatar4.png";
import avatar5 from "./../../img/avatarDefault/avatar5.png";
import avatar6 from "./../../img/avatarDefault/avatar6.png";

import "./../../CSS/Acceso/Usuario.css";
const avatarDefault = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

export default function Usuario({ nombre, estaActivo, avatar }) {
  const imgAvatar = avatarDefault[avatar];
  const usuarioActivo = estaActivo ? " usuario-activo" : "";

  return (
    <div className={`usuario-avatar${usuarioActivo}`}>
      <img className="imagen-avatar" src={imgAvatar} alt={nombre} />
      <p id={nombre} className="nombre-usuario">
        {nombre}
      </p>
    </div>
  );
}
