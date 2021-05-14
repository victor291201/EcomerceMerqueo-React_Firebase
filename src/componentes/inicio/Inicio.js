import React, { Component } from "react";
import carrusel1 from "../media/carrusel1.jpg";
import carrusel2 from "../media/carrusel2.jpg";
import carrusel3 from "../media/carrusel3.jpg";
import imagen1 from "../media/imagen1.jpg";
import imagen2 from "../media/imagen2.jpg";
import estilo from "../css/bootstrap.css";
import Navbar from "../navbars/Navbar1";
import Footer from "../footers/Footer1";

function Inicio(){
		return (
			<div>
			    <Navbar />
					<div className="container1">
			    	<div className="row1">		
							<div className="bd-example">
							  <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
							    <ol className="carousel-indicators">
							      <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
							      <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
							      <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
							    </ol>
							    <div className="carousel-inner">
							      <div className="carousel-item active">
							        <img src={ carrusel1 } className="d-block w-100 img-responsive "/>
							        <div className="carousel-caption d-none d-md-block">
							          <h5>Una propuesta de mercadeo inovadora</h5>
							        </div>
							      </div>
							      <div className="carousel-item">
							        <img src={ carrusel2 } className="d-block w-100 img-responsive "/>
							        <div className="carousel-caption d-none d-md-block">
							          <h5>facil e intuitivo</h5>
							        </div>
							      </div>
							      <div className="carousel-item">
							        <img src={ carrusel3 } className="d-block w-100 img-responsive "/>
							        <div className="carousel-caption d-none d-md-block">
							          <h5>proveedores de confianza</h5>                
							        </div>
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
						</div>
					</div>
					<div className="container1">
					  <div className="row2">
				      <div className=" text-white grid">
				      	<div className="text-white bg-dark pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hiden texto1">
				          <div className="p-3 tex">
				            <h2 className="display-5">
				              <font>
				                encuentra lo que siempre quisiste
				              </font>
				            </h2>
				            <p className="lead">
				              <font>
				                tenemos todo lo que buscas
				              </font>
				            </p>
				            <hr className="hr"/>
				            <div className="bg-dark mx-auto">
				              <p className="float-left">
				                <font>
				                  tenemos todo lo que buscas
				                </font>
				              </p>
				            </div>
				          </div> 
					      </div>
					      <div className="imagen1">
					    		<img src={ imagen1 } className="d-block img-fluid"/>
					      </div>
					      <div className="imagen2">
					    		<img src={ imagen2 } className="d-block img-fluid"/>
					      </div>
					      <div className="text-white bg-warning pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hiden texto2">
				          <div className="p-3 tex">
				            <h2 className="display-5">
				              <font>
				                encuentra lo que siempre quisiste
				              </font>
				            </h2>
				            <p className="lead">
				              <font>
				                tenemos todo lo que buscas
				              </font>
				            </p>
				            <hr className="hr"/>
				            <div className="bg-dark mx-auto">
				              <p className="float-left">
				                <font>
				                  tenemos todo lo que buscas
				                </font>
				              </p>
				            </div>
				          </div> 
					      </div>
				      </div>  
				    </div>
			    </div>
			  <Footer />
			</div>
		);
}

export default Inicio;