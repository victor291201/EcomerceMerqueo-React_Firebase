import React, { Component } from 'react';
import carrusel5 from '../media/carrusel5.jpg';
import carrusel6 from '../media/carrusel6.jpg';
import carrusel7 from '../media/carrusel7.jpg';
import Navbar from "../navbars/Navbar2";
import Footer from "../footers/Footer1";
import Carta2 from "../carta/Carta2";
import Carta1 from "../carta/Carta1";
import { Link } from "react-router-dom";

function Productos(){
    return (
      <div>
	
			    <Navbar/>
					<div className="bd-example formulario mb-3">
					  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
					    <ol className="carousel-indicators">
					      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
					      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
					      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
					    </ol>
					    <div className="carousel-inner">
					      <div className="carousel-item active">
					        <img src={ carrusel7 } className="d-block w-100 image"/>
					      </div>
					      <div className="carousel-item">
					        <img src={ carrusel5 } className="d-block w-100 image"/>
					      </div>
					      <div className="carousel-item">
					        <img src={ carrusel6 } className="d-block w-100 image"/>
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
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<Link to="/populares" className="deco-n"><h2 className="my-2 deco-n">Productos populares</h2></Link>
							</div>

							<Carta1 />

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

export default Productos;