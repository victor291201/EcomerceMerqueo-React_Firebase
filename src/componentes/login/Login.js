import firebase from "firebase";
import React, { Component } from 'react';
import style from "../css/bootstrap.css";
import Navbar from "../navbars/Navbar3";
import Footer from "../footers/Footer1";
import { Link } from "react-router-dom";

class Login extends Component {

	constructor(args){
		super(args);
		this.newusr = this.newusr.bind(this)
	}

	newusr(){
		alert("hola")
		const email = document.getElementById("nombr").value
		const password = document.getElementById("contraseñ").value

		alert('Creando el usuario con email ' + email);

		firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(function (user) {
			alert('¡Creamos al usuario!');
		})
		.catch(function (error) {
			alert(error)
		});
	}

  render() {
    return (
    	<div>

			    <Navbar />
					<div className="container formulario">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<h1>Registrate</h1>
							</div>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-6">
								  <div className="input-group-prepend">
								    <span className="input-group-text" id="basic-addon1">@</span>
								  </div>
								  <input 
									type="text" className="form-control" name="nombr" id="nombr" placeholder="Nombre de usuario" aria-label="Username" aria-describedby="basic-addon1"/>
								</div>

								<div className="input-group mb-3 col col-xs-12 col-sm-12 col-md-6 col-lg-6">
								  <input 
									type="text" className="form-control" name="contraseñ" id="contraseñ" placeholder="Contraseña de usuario" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
								  <div className="input-group-append">
								    <span className="input-group-text" id="basic-addon2">*</span>
								  </div>
								</div>
							</form>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
								  <input
							    type="text" className="form-control" name="edad" id="edad" placeholder="Especifique" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
								  <div className="input-group-append">
								    <span className="input-group-text" id="basic-addon2">Edad</span>
								  </div>
								</div>	
							</form>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-6">
								  <input
							    type="text" className="form-control" name="correo" id="correo" placeholder="Correo electronico" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
								  <div className="input-group-append">
								    <span className="input-group-text" id="basic-addon2">@example.com</span>
								  </div>
								</div>

								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-6">
								  <input 
							    type="text" className="form-control" name="numero" id="numero" placeholder="Que contenga 11 numeros" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
								  <div className="input-group-append">
								    <span className="input-group-text" id="basic-addon2">Numero de telefono</span>
								  </div>
								</div>	
							</form>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
								  <div className="input-group-prepend">
								    <label className="input-group-text">Pais de residencia</label>
								  </div>
								  <select className="custom-select" name="pais" id="pais">
								    <option selected>seleccionar...</option>
								    <option value="colombia">Colombia</option>
								    <option value="venezuela">Venezuela</option>
								    <option value="argentina">Argentina</option>
								    <option value="chile">Chile</option>
								  </select>
								</div>
							</form>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-6">
								  <div className="input-group-prepend">
								    <label className="input-group-text">Tarjeta de credito</label>
								  </div>
								  <select  className="custom-select" name="tarjeta" id="tarjeta">
								    <option selected>seleccionar...</option>
								    <option value="mastercard">Master card</option>
								    <option value="bbva">BBVA</option>
								    <option value="visa">Visa</option>
								    <option value="banesco">Banesco</option>
								  </select>
								</div>

								<div className="input-group mb-3 col col-xs-12 col-sm-12 col-md-6 col-lg-6" >
								  <input 
							    type="text" className="form-control" name="ctarjeta" id="ctarjeta" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
								  <div className="input-group-append">
								    <span className="input-group-text" id="basic-addon2">Contraseña de tarjeta de credito</span>
								  </div>
								</div>
							</form>		

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
								  <div className="input-group-prepend">
								    <label className="input-group-text">Sexo</label>
								  </div>
								  <select  className="custom-select" name="sexo" id="sexo">
								    <option selected>seleccionar...</option>
								    <option value="femenino">Femenino</option>
								    <option value="masculino">Masculino</option>
								  </select>
								</div>
							</form>
							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
								  
								<Link to="/productos" className="deco-n btn-block"><button onClick={this.newusr} className="btn btn-outline-light btn-block">Registro</button></Link>
								</div>
							</form>

						</div>
					</div>  
			  <Footer />
		  </div>
    );
  }
}

export default Login;
