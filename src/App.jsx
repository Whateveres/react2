//Imports
import "./App.css";
import SocialButton from "./components/SocialButton";
import Formulario from "./components/Formulario";
import Alerta from "./components/Alert";

//Boostrap imports
import 'bootstrap/dist/css/bootstrap.min.css';

//React useState import
import React, { useState } from 'react';

//FontAwesome imports
import { faGithub, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Registro = () => {

  const [alert, setAlert] = useState({
    message: '',
    type: ''
  });

  //Arreglo de objetos con contenido
  const socialIcons = [
    { icon: faGithub },
    { icon: faFacebook },
    { icon: faLinkedin }
  ]

  return (
    <>
      <div className="card" style={{ width: '22rem', height: '30rem' }}>
        <div className="card-body">

          <h1 className="card-title">Crea una cuenta</h1>

          <SocialButton socialIcons={socialIcons} />

          <p className="card-text">O usa tu email para registrarte</p>

          <Formulario setAlert={setAlert} />

          <Alerta message={alert.message} type={alert.type} />
          
        </div>
      </div>
    </>
  )
}

export default Registro