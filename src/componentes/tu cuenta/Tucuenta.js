import React, { Component } from 'react';
import img1 from '../media/prueba1.jpg';
import Navbar from "../navbars/Navbar2";
import Footer from "../footers/Footer1";
import Carta2 from "../carta/Carta2";
import Carta1 from "../carta/Carta1";
import { Link } from "react-router-dom";


function Tucuenta(){
    return (
    	<div>
			    <Navbar />
					<div className="container formulario">
						<div className="row p-4 my-0 text-white rounded bg-dark banner text-center">
							<div className="col-lg-6 col-md-5 col-sm-12 col-xs-12 d-inline justify-content-center align-items-center d-flex mb-3">
						    <img src={ img1 } className="usuario"/>
						   </div>

						   <div className="col-lg-6 col-md-7 col-sm-12 col-xs-12">
						    <h2 className="font-italic">victorcrvts291201</h2>
						    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
						    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
									<Link to="/subirprod" className="btn btn-outline-warning">Subir producto</Link>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="card border-dark mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-5">
							  <div className="card-header">Datos de usuario</div>
							  <div className="card-body text-dark">
							    <h5 className="card-title">Sexo</h5>
							    <p className="card-text">Masculino</p>
							    <h5 className="card-title">pais</h5>
							    <p className="card-text">Colombia</p>
							    <h5 className="card-title">Edad</h5>
							    <p className="card-text">24</p>
							   <h5 className="card-title">Numero</h5> 
							   <p className="card-text">300455402</p>
							   <h5 className="card-title">Email</h5> 
							   <p className="card-text">victor2012kdmke@gmail.com</p>
							   <Link to="/seguridad" className="btn btn-outline-warning float-right">Editar</Link>
							  </div>
							</div>

							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<Link to="/favoritos" className="deco-n"><h2 className="my-2 deco-n">Favoritos</h2></Link>
							</div>

							<Carta2 />

							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<Link to="/comprados" className="deco-n"><h2 className="my-2 deco-n">Comprados</h2></Link>
							</div>

							<Carta2 />

							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<Link to="/vendidos" className="deco-n"><h2 className="my-2 deco-n">Vendidos</h2></Link>
							</div>

							<Carta2 />

						</div>

					</div>

			  <Footer />

      </div>
    );
}

export default Tucuenta;