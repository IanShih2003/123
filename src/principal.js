import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import usuario from "./usuario.png";
import llave from "./llave.png";
import PELUQUERO from "./PELUQUERO.png";
import COMIDA from "./COMIDA.png";
import personaje from "./personaje.png";
import MALETA from "./MALETA.png";
import LUPA from "./LUPA.png";
import CALENDARIO from "./CALENDARIO.png";
import pregunta from "./pregunta.png";
import axios from "axios";



function Principal() {
  
    const [correo, setEmail] = useState("");
    const [password, setPass] = useState("");
  
    const handlerFunc = (func) => {
      return ({ target }) => func(target.value);
    };
  
    const handleCorreo = handlerFunc(setEmail);
    const handlePass = handlerFunc(setPass);
  
    const configuracion = {
      url: "http://localhost:3000/auth",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { Correo: correo, password: password},
    };
    const Login = async () => {
      const respuesta = await axios(configuracion);
      console.log(configuracion.data);
      if (respuesta.data.status === "Employeed Saved") {
      }
    };
  
  return (
    <div className="contenedorgigante">
      <div className="header"></div>
      <div className="cajitafeliz2">
        <div className="formcontainer">
          <Form className="App">
            <img src={usuario} className="usuario"></img>

            <Input
              type="Email"
              className="queso"
              placeholder="Email"
              onChange={handleCorreo}
            ></Input>

            <FormGroup>
              <img src={llave} className="llave"></img>
              <Input
                type="Password"
                className="queso"
                placeholder="Contraseña"
                onChange={handlePass}
              />
            </FormGroup>
            <div className="xdrow">
              <a className="laviymeolvide"> Olvidaste tu contraseña?</a>
              <a href="/registrarse" className="laviymeolvide">
                {" "}
                Ingresa Aquí
              </a>
            </div>
            <Link to={"/turnos"}>
              <Button className="btnlogin" onClick={Login}>
                Ingresar
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Principal;
