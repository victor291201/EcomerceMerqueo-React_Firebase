import React, { Component } from 'react';
import img1 from '../media/prueba1.jpg';
import carrusel4 from '../media/carrusel4.jpg';
import carrusel2 from '../media/carrusel2.jpg';
import carrusel3 from '../media/carrusel3.jpg';
import Navbar from "../navbars/Navbar2";
import Footer from "../footers/Footer1";
import Carta2 from "../carta/Carta2";
import Carta1 from "../carta/Carta1";
import { Link } from "react-router-dom";


function Producto() {
	return (
	  <div>
				<Navbar />
					<div className="container formulario">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 contenedor">
								<div className="card card2 mb-3">
									<div className="bd-exampl bd-example1">
									  <div id="carouselExampleCaptions" className="carousel carousel1 slide" data-ride="carousel">
										<ol className="carousel-indicators">
										  <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
										  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
										  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
										</ol>
										<div className="carousel-inner carousel-inner1">
										  <div className="carousel-item carousel-item1 active">
											<a href="carrusel1.jpg" target="_parent"><img src={ carrusel4 } className="image"/></a>
										  </div>
										  <div className="carousel-item carousel-item1">
											<a href="carrusel1.jpg" target="_parent"><img src={ carrusel2 } className="image"/></a>
										  </div>
										  <div className="carousel-item carousel-item1">
											<a href="carrusel1.jpg" target="_parent"><img src={ carrusel3 } className="image"/></a>
										  </div>
										</div>
										<a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
										  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
										  <span className="sr-only">Previous</span>
										</a>
										<a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
										  <span className="carousel-control-next-icon" aria-hidden="true"></span>
										  <span className="sr-only">Next</span>
										</a>
									  </div>
									</div>

									<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="estrella"><i className="fas fa-star mt-2 ml-2 estar"></i></div>
								
									<div className="card-body mt--1">				
									<h2 className="card-title">Card title</h2>
									<h5>descripcion:</h5>
									<p className="card-text card-text1">This is a wider card with supporting text below as a natural lead-in to additional content. This content is This is a wider card with supporting text below as a natural lead-in to additional content. This content is aakmskdmekmdkemdkemdkmkmedkemdkemdkemkeekkemkkmkkmekmekmekdmekmekdmek little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is aakmskdmekmdkemdkemdkmkmedkemdkemdkemkeekkemkkmkkmekmekmekdmekmekdmek little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is aakmskdmekmdkemdkemdkmkmedkemdkemdkemkeekkemkkmkkmekmekmekdmekmekdmek little bit longer.This is a wider card with supporting text below as a natural lead-in to additional content. This content is aakmskdmekmdkemdkemdkmkmedkemdkemdkemkeekkemkkmkkmekmekmekdmekmekdmek little bit longer.aakmskdmekmdkemdkemdkmkmedkemdkemdkemkeekkemkkmkkmekmekmekdmekmekdmek little bit longer.</p>
									<h5>Vendedor:</h5>
									<Link to="/usuarios" className="deco-n btn btn-link p-0 my-2"><p>victor_291203</p></Link>
									<p className="card-text card-text1"><small className="text-muted">Last updated 3 mins ago</small></p>
									<h4 className="text-warning precio">60.000</h4>
								</div>
								</div>
							</div>



							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<Link to="/sugeridos" className="deco-n"><h2 className="my-2 deco-n">Productos sugeridos</h2></Link>
							</div>

						  <Carta2 />

							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<Link to="/favoritos" className="deco-n"><h2 className="my-2 deco-n">Favoritos</h2></Link>
							</div>

							<Carta2 />	

						</div>

					</div>

			  <Footer />
			  
		  </div>
		);
}

export default Producto;