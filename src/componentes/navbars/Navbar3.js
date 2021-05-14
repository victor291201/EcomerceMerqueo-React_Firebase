import firebase from "firebase";
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../media/carrito.png';

class Navbar3 extends Component {

	constructor(args){
		super(args);
		this.singin=this.singin.bind(this)	
	}

	singin(){
		const nombre = document.getElementById("nombre").value
		const contraseña = document.getElementById("contraseña").value
		console.log('Login user ' + nombre);

		firebase.auth().signInWithEmailAndPassword(nombre, contraseña)
		.then(function (user) {
			alert("iniciaste sesion correctamente como: "+ nombre );
		})
		.catch(function (error) {
			alert(error);
		});
	}

  render() {
    return (
    	<div className="container-fluid">
	    	<div className="row">
	    		<header>
					  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow">
					    <a className="navbar-brand" href="#">
					      <img src={ logo } className="logo"/>
					    </a>
					    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					      <span className="navbar-toggler-icon"></span>
					    </button>
					    <div className="collapse navbar-collapse" id="navbarNav">
					      <ul className="navbar-nav ml-auto">
					        <form className="form-inline">
					        	<div className="form-group mx-sm-3 mb-2">
										    <input 
										    type="text" id="nombre" className="form-control" placeholder="Nombre de Usuario" />
									  </div>
									  <div className="form-group mx-sm-3 mb-2">
										    <input 
										    type="password" id="contraseña" className="form-control"  placeholder="Contraseña" />
									  </div>
									  <Link to="/Productos"><button onClick = {this.singin} type="submit" className="btn btn-outline-warning mb-2">Iniciar sesion</button></Link>
									</form>
					      </ul>
					    </div>
					  </nav>
					</header>
				</div>
			</div>
    );
  }
}

export default Navbar3;