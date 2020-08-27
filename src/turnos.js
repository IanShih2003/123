import React from "react";
import "./App.css";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import PELUQUERO from "./PELUQUERO.png";
import COMIDA from "./COMIDA.png";
import personaje from "./personaje.png";
import MALETA from "./MALETA.png";
import LUPA from "./LUPA.png";
import CALENDARIO from "./CALENDARIO.png";
import pregunta from "./pregunta.png";
import axios from "axios";
const configuracion = {
  url: "http://54.162.46.22:3000/turnos/gol",
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  data: { Fecha: "2020-8-26", Hora: "5:17:23", Cant_per: 2, ESTADO: 0 },
};

const sacoturno = async () => {
  alert("Turno Creado")
  console.log("hola");
  const respuesta = await axios(configuracion);
  console.log(respuesta.data);

  if (respuesta.data.status === "Employeed Saved") {
  }
};

function turnos() {
  const negocios = [
    { name: "peluqueria1", id: 1, img: PELUQUERO },
    { name: "restaurante2", id: 2, img: COMIDA },
  ];
  console.log(negocios);
  return (
    <div className="contenedorgigante">
      <div className="header"></div>
      <div className="cajagorda"></div>
      <div className="lacajadelosturnos">
        <div className="textolugar">Lugares mas cercanos:</div>
        <div className="contenedor-negocios">
          {negocios.map((negocio) => (
            <div key={negocio.id} className="cajaverde">
              <Button onClick={sacoturno} className="botonsacar1">
                {" "}
                Sacar turno
              </Button>
              <img src={negocio.img} className="PELUQUERO"></img>
            </div>
          ))}
        </div>
      </div>
      <div className="formcontainer"></div>
      <div className="cajadeabajo">
        <img src={personaje} className="personaje"></img>
        <img src={MALETA} className="MALETA"></img>
        <img src={LUPA} className="lupa"></img>
        <img src={CALENDARIO} className="calendario"></img>
        <img src={pregunta} className="pregunta"></img>
      </div>
    </div>
  );
}

export default turnos;
