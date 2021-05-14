import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../media/carrito.png';

function Navbar1(){
    return (
    	<div className="container-fluid">
	    	<div className="row">
	    		<header>
					  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow">
					    <div className="navbar-brand" href="#">
					      <img src={ logo } className="logo"/>
					    </div>
					    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					      <span className="navbar-toggler-icon"></span>
					    </button>
					    <div className="collapse navbar-collapse" id="navbarNav">
					      <ul className="navbar-nav ml-auto">
					        <li className="nav-item">
					          <Link to="/productos"><div className="nav-link" href="#">Home</div></Link>
					        </li>
					        <li className="nav-item">
					          <Link to="/tucuenta"><div className="nav-link" href="#">Tu cuenta</div></Link>
					        </li>
					        <li className="nav-item">
					          <Link to="/"><div className="nav-link" href="#">Conocenos</div></Link>
					        </li>
					        <li className="nav-item">
					          <Link to="/categorias"><div className="nav-link" href="#">Categorias</div></Link>
					        </li>
					      </ul>
					      <form action="" className="form-inline">
					        <Link to="/login"><button className="btn btn-outline-warning" type="button">iniciar sesion</button></Link>
					      </form>
					    </div>
					  </nav>
					</header>
				</div>
			</div>
    );
}

export default Navbar1;