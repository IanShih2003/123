import React from 'react';
import './App.css';
import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import principal from './principal';
import { Link } from 'react-router-dom';
import{ Button, Form, FormGroup, Label, Input} from 'reactstrap';
import axios from 'axios';

function registrarse(){
  
    return(
  <div> 

<div className="contenedorgigante">
<div className="elotrotitulo"> TuFast</div>
<div className="header">
</div>
<div className="cajitafeliz2">
<div>
<Button href="/login" className="btnlogin"id="2"> Cliente</Button>
</div>
      <div className="xdrow2">
      <Button href="/login" className="btnlogin"> Como un negocio</Button>
      </div>
      
       
       
       </div>
       </div>
       
</div>
    )
}
export default registrarse;