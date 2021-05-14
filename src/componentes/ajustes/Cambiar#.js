import React, { Component } from 'react';
import Navbar from "../navbars/Navbar2";
import Footer from "../footers/Footer2";
import { Link } from "react-router-dom";

function CambiarN(){
    return (
    	<div>
			    <Navbar />
					<div className="container formulario">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<h1>Cambiar contraseña</h1>
							</div>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col col-xs-12 col-sm-12 col-md-6 col-lg-6">
								  <input type="text" className="form-control" placeholder="Numero" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
								  <div className="input-group-append">
								    <span className="input-group-text" id="basic-addon2">*</span>
								  </div>
								</div>

								<div className="input-group mb-3 col col-xs-12 col-sm-12 col-md-6 col-lg-6">
								  <input type="text" className="form-control" placeholder="Verificar numero" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
								  <div className="input-group-append">
								    <span className="input-group-text" id="basic-addon2">*</span>
								  </div>
								</div>
							</form>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col col-xs-12 col-sm-12 col-md-6 col-lg-6">
								  <input type="text" className="form-control" placeholder="Nueva numero" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
								  <div className="input-group-append">
								    <span className="input-group-text" id="basic-addon2">*</span>
								  </div>
								</div>

								<div className="input-group mb-3 col col-xs-12 col-sm-12 col-md-6 col-lg-6">
								  <input type="text" className="form-control" placeholder="Verificar nuevo numero" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
								  <div className="input-group-append">
								    <span className="input-group-text" id="basic-addon2">*</span>
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

export default CambiarN;