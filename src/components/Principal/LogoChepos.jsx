import React from "react";
import { Link } from "react-router-dom";

//*Importar CSS
import "./../../CSS/Principal/LogoChepos.css";

export default function LogoChepos() {
  return (
    <>
      <Link to="/acceso">
        <p className="logo-chepos">LOGO</p>
      </Link>
    </>
  );
}
