import React, { Component } from 'react';
import Navbar from "../navbars/Navbar2";
import Footer from "../footers/Footer2";
import { Link } from "react-router-dom";

function Cambiart(){
    return (
    	<div>
    			<Navbar />
					<div className="container formulario">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<h1>Cambiar tarjeta</h1>
							</div>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-6">
								  <div className="input-group-prepend">
								    <label className="input-group-text" for="inputGroupSelect01">Tarjeta de credito</label>
								  </div>
								  <select className="custom-select" id="inputGroupSelect01">
								    <option selected>Franquisia...</option>
								    <option value="1">One</option>
								    <option value="2">Two</option>
								    <option value="3">Three</option>
								  </select>
								</div>

								<div className="input-group mb-3 col col-xs-12 col-sm-12 col-md-12 col-lg-6" >
								  <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
								  <div className="input-group-append">
								    <span className="input-group-text" id="basic-addon2">Numero de tarjeta de credito</span>
								  </div>
								</div>
							</form>	

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-6">
								  <div className="input-group-prepend">
								    <label className="input-group-text" for="inputGroupSelect01">Nueva tarjeta de credito</label>
								  </div>
								  <select className="custom-select" id="inputGroupSelect01">
								    <option selected>Franquisia...</option>
								    <option value="1">One</option>
								    <option value="2">Two</option>
								    <option value="3">Three</option>
								  </select>
								</div>

								<div className="input-group mb-3 col col-xs-12 col-sm-12 col-md-12 col-lg-6" >
								  <input type="text" className="form-control" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
								  <div className="input-group-append">
								    <span className="input-group-text" id="basic-addon2">Nuevo numero de tarjeta de credito</span>
								  </div>
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

export default Cambiart;