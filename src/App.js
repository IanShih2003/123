import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import principal from "./principal";
import { Link } from "react-router-dom";
import registrarse from "./registrarse";
import index from "./index";
import style from "./style.css";
import inicio from "./inicio";
import turnos from "./turnos";

import { register } from "./serviceWorker";
import prueba from "./prueba";
// import turnosform from "./turnosform"
function App() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState('');
  const [correo, setEmail] = useState("");
  const [password, setPass] = useState('');
  const [dni, setDNI] = useState("");

  function handleNombre(e) {
    setNombre(e.target.value)
    console.log(nombre)   
  }
  function handleApellido(e) {
    setApellido(e.target.value)
  }
  function handleCorreo(e) {
    setEmail(e.target.value)
  }
  function handlePass(e) {
    setPass(e.target.value)
  }
  function handleDNI(e) {
    setDNI(e.target.value)
  }  

  const Registrousuario = async () => {
    console.log("hola");
    const respuesta = await axios(configuracion);
    console.log(respuesta.data)
    if (respuesta.data.status === "Employeed Saved") {
      console.log("funciona");
    }
  };

  const configuracion = {
    url: "http://54.162.46.22:3000/",
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      Nombre: nombre,
      Apellido: apellido,
      Correo: correo,
      password: password,
      DNI: dni,
    },
  };

  const Login = () => (
    <div className="contenedorgigante">
      <div className="header"></div>
      <div className="cajitafeliz2">
        <div className="formcontainer">
          <div className="App"></div>
  
          <div style={{ textAlign: "center" }}>
            <div id="formulario">
              <input
                id="nombre"
                placeholder="Nombre"
                onChange={e => handleNombre(e)}
                className="queso"
                type="text"
                value ={nombre}
              />
            </div>
            <div>
              <input
                id="apellido"
                placeholder="apellido"
                onChange={e => handleApellido(e)}
                className="queso"
                type="text"
                value ={apellido}
              />
            </div>
  
            <div>
              <input
                id="correo"
                placeholder="Email"
                onChange={e => handleCorreo(e)}
                className="queso"
                type="text"
                value = {correo}
              />
            </div>
            <div>
              <input
                id="contra"
                placeholder="Contraseña"
                onChange={e => handlePass(e)}
                className="queso"
                type="text"
                value = {password}
              />
            </div>
            <div>
              <input
                id="dni"
                placeholder="DNI"
                onChange={e => handleDNI(e)}
                className="queso"
                type="text"
                value = {dni}
              />
            </div>
            <div className="xdrow2">
              <button className="btnlogin" onClick={Registrousuario}>
                {" "}
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/principal" exact component={principal} />
          <Route path="/Login" exact component={Login} />
          <Route path="/registrarse" exact component={registrarse} />
          <Route path="/" exact component={inicio} />
          <Route path="/turnos" exact component={turnos} />
          {/* <Route path="/turnosform" exact component={turnosform} /> */}
        </Switch>
      </div>
    </Router>
  );
}



export default App;
