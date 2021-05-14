import React, { Component } from 'react';
import Navbar from "../navbars/Navbar2";
import Footer from "../footers/Footer2";
import { Link } from "react-router-dom";

function Cambiarn(){
    return (
    	<div>
			    <Navbar />
					<div className="container formulario">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<h1>Cambiar nombre de usuario</h1>
							</div>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-6">
								  <div className="input-group-prepend">
								    <span className="input-group-text" id="basic-addon1">@</span>
								  </div>
								  <input type="text" className="form-control" placeholder="Nombre de usuario" aria-label="Username" aria-describedby="basic-addon1"/>
								</div>

								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-6">
								  <div className="input-group-prepend">
								    <span className="input-group-text" id="basic-addon1">@</span>
								  </div>
								  <input type="text" className="form-control" placeholder="Verificar nombre de usuario" aria-label="Username" aria-describedby="basic-addon1"/>
								</div>

							</form>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-6">
								  <div className="input-group-prepend">
								    <span className="input-group-text" id="basic-addon1">@</span>
								  </div>
								  <input type="text" className="form-control" placeholder="Nuevo nombre de usuario" aria-label="Username" aria-describedby="basic-addon1"/>
								</div>

								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-6 col-lg-6">
								  <div className="input-group-prepend">
								    <span className="input-group-text" id="basic-addon1">@</span>
								  </div>
								  <input type="text" className="form-control" placeholder="Verificar nuevo nombre de usuario" aria-label="Username" aria-describedby="basic-addon1"/>
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

export default Cambiarn;