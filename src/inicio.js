import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import{ Button, Form, FormGroup, Label, Input} from 'reactstrap';
import{ FacebookLoginButton } from 'react-social-login-buttons';
import Imagentelefono from './Imagentelefono.png';
import DIBUJO2 from './DIBUJO2.png';
function inicio(){
    return(

 
     <div className="contenedorgigante">
<div className="tituloprincipal"> TuFast</div>
        <div>
           <div className="header">


            </div>
            <img src={Imagentelefono} className="imagentelefono"></img>
            <img src={DIBUJO2} className="DIBUJO2"></img>
            <Button href="/registrarse" className="btninicio"> Registrarse</Button>
            <div>
<Button href="/principal" className="btninicio2"> Ingresar</Button>

</div>
</div>
</div>
    



       
    );
}
export default inicio;