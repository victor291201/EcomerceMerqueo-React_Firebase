import React, { Component } from 'react';
import Navbar from "../navbars/Navbar2";
import Footer from "../footers/Footer1";
import Carta2 from "../carta/Carta2";
import Carta1 from "../carta/Carta1";
import { Link } from "react-router-dom";

function Busqueda(){
    return (
      <div>
			    <Navbar />
					<div className="container formulario">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
								<h2 className="my-2">Resultados de "..."</h2>
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
				<Footer/>
      </div>
    );
}

export default Busqueda;
