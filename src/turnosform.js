import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import turnosform from "./turnosform";
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

function turnosform(){
    return (
        <div className="contenedorgigante">
          <div className="header"></div>
          <div className="cajitafeliz2">
            <div className="formcontainer">
              <Form className="App">
                <img src={usuario} className="usuario"></img>
    
                <Input type="Email" className="queso" placeholder="Email"></Input>
    
                <FormGroup>
                  <img src={llave} className="llave"></img>
                  <Input
                    type="Password"
                    className="queso"
                    placeholder="Contraseña"
                  />
                </FormGroup>
                <div className="xdrow">
                  <a className="laviymeolvide"> Olvidaste tu contraseña?</a>
                  <a href="/registrarse" className="laviymeolvide">
                    {" "}
                    Ingresa Aquí
                  </a>
                </div>
                <Link to={"/turnosform"}>
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
export default turnosform;
