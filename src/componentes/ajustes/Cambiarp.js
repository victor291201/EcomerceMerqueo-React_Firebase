import React, { Component } from 'react';
import Navbar from "../navbars/Navbar2";
import Footer from "../footers/Footer2";
import { Link } from "react-router-dom";

function Cambiarp(){
    return (
    	<div>
    			<Navbar />
					<div className="container formulario">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<h1>Cambiar pais</h1>
							</div>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
								  <div className="input-group-prepend">
								    <label className="input-group-text" for="inputGroupSelect01">Pais</label>
								  </div>
								  <select className="custom-select" id="inputGroupSelect01">
								    <option selected>Seleccionar...</option>
								    <option value="1">One</option>
								    <option value="2">Two</option>
								    <option value="3">Three</option>
								  </select>
								</div>
							</form>	

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
								  <div className="input-group-prepend">
								    <label className="input-group-text" for="inputGroupSelect01">Nuevo pais</label>
								  </div>
								  <select className="custom-select" id="inputGroupSelect01">
								    <option selected>Seleccionar...</option>
								    <option value="1">One</option>
								    <option value="2">Two</option>
								    <option value="3">Three</option>
								  </select>
								</div>
							</form>		

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
								  <Link to ="/productos"className="btn btn-outline-light btn-block">Confirmar</Link>
								</div>
							</form>
						</div>
					</div>
				<Footer />
			</div>
    );
}

export default Cambiarp;