import React,{useState} from 'react';
import axios from 'axios';
import './App.css';
import { NavLink, BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import principal from './principal';
import { Link } from 'react-router-dom';
import registrarse from './registrarse';
import index from './index';
import style from './style.css';
import inicio from './inicio';
import turnos from './turnos';

import { register } from './serviceWorker';
import prueba from './prueba';


 function handleChange(e){
   console.log(e.target.value);
 }



const configuracion=
{
  url:"http://54.162.46.22:3000/",
  method: "POST",
  headers:{
    
    Accept:"application/json",
    "Content-Type":"application/json",
  },data:{Nombre:"pepe",Apellido:"pepe", Correo:"pepe", password:22,DNI:22 }
 
 }
 const Registrousuario=async()=>{


   
   console.log("hola")
 const respuesta= await axios(configuracion) 
 console.log(respuesta.data)

if(respuesta.data.status === "Employeed Saved"){
 console.log("funciona");
 
}
 }  

function App(){
 // const [email, setemail] = useState("");
  // const onChangeEmail = (e) => { 
 // console.log(e.target.value);
// setemail(e.target.value) ;
//} 
const [email, setemail] = useState('');
  let history = useHistory();
  const [firstName, setFirstName] = useState('');

  return(
    
    <Router>
      <div className="app">
        <Switch>
          <Route path="/principal" exact component={principal}/>
          <Route path="/Login" exact component={Login}/>
          <Route path="/registrarse" exact component={registrarse}/>
          <Route path="/" exact component={inicio}/>
          <Route path="/turnos" exact component={turnos}/>

    
        </Switch>
      </div>
    </Router>
  );
}

   const Login = () => (
     <div className="contenedorgigante">
             <div className="header"></div>
       <div className="cajitafeliz2">
       <div className="formcontainer">
         <div className="App"></div>
     
<div style={{textAlign: 'center'}} >
    <div id="formulario">
        <input id="email" /*onChange={(e => onChangeEmail(e))}*/ placeholder="Nombre" className="queso"type="text"/>
           
    </div>
    <div>

        <input id="password" placeholder="Direccion" className="queso" type="text"/>
    </div>
    
    <div>
 
        <input id="apellido"  placeholder="Email" className="queso" type="text"/>
    </div>
    <div>
   
        <input id="celular" placeholder="Celular" className="queso" type="text"/>
    </div>
    <div>
  
   
   <input id="celular" placeholder="Contraseña" className="queso" type="text"/>
</div>
<div className="xdrow2">
    <button className="btnlogin" onClick={Registrousuario} > Registrarse</button>
    </div>
    </div>
    

    </div>
    </div>
    
</div>

    );

export default App;