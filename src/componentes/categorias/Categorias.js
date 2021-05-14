import React, { Component } from 'react';
import Navbar from "../navbars/Navbar2";
import Footer from "../footers/Footer1";
import Carta3 from "../carta/Carta3";
import Carta2 from "../carta/Carta2";
import { Link } from "react-router-dom";


function Categorias(){
    return (
      <div>
			    <Navbar />
					<div className="container formulario">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<h2 className="my-2">Categorias</h2>
							</div>

							<Carta3 />

							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<Link to="/sugeridos" className="deco-n"><h2 className="my-2">Productos sugeridos</h2></Link>
							</div>

						  <Carta2 />

							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<Link to="/favoritos" className="deco-n"><h2 className="my-2">Favoritos</h2></Link>
							</div>

							<Carta2 />

						</div>

					</div>

			  <Footer />
      </div>
    );
}

export default Categorias;
