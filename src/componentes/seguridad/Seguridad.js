import React, { Component } from 'react';
import Navbar from "../navbars/Navbar2";
import Footer from "../footers/Footer1";
import { Link } from "react-router-dom";


function Seguridad(){
    return (
      <div>
			    <Navbar />
					<div className="container formulario">
						<div className="row">
							<div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
								<h1 className="pb-3">Seguridad</h1>
								<div className="accordion mb-5" id="accordionExample">
								  <div className="card">
								    <div className="card-header" id="headingOne">
								      <h2 className="mb-0">
								        <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
								          <h3 className="text-dark ajustes">Politica de privacidad</h3>
								        </button>
								      </h2>
								    </div>

								    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
								      <div className="card-body">
								        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
								      </div>
								    </div>
								  </div>

								  <div className="card">
								    <div className="card-header" id="headingTwo">
								      <h2 className="mb-0">
								        <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
								          <h3 className="text-dark ajustes">Pago en cripto moneda</h3>
								        </button>
								      </h2>
								    </div>
								    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
								      <div className="card-body">
								        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
								      </div>
								    </div>
								  </div>
								  <div className="card">
								    <div className="card-header" id="headingThree">
								      <h2 className="mb-0">
								        <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
								          <h3 className="text-dark ajustes">Vendedores garantizados</h3>
								        </button>
								      </h2>
								    </div>
								    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
								      <div className="card-body">
								        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
								      </div>
								    </div>
								  </div>
								  <div className="card">
								    <div className="card-header" id="headingFour">
								      <h2 className="mb-0">
								        <button className="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
								          <h3 className="text-dark ajustes">Ajustes</h3>
								        </button>
								      </h2>
								    </div>
								    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
								      <div className="card-body">
								        <div className="col-xs-12 col-lg-12 col-sm-12 col-md-12 py-2"><Link to="/cambiarc" className="deco-n"><h5 className="my-2 deco-n">Cambiar contraseña</h5></Link></div>
								        <div className="col-xs-12 col-lg-12 col-sm-12 col-md-12 py-2"><Link to="/cambiarn" className="deco-n"><h5 className="my-2 deco-n">Cambiar nombre de usuario</h5></Link></div>
								        <div className="col-xs-12 col-lg-12 col-sm-12 col-md-12 py-2"><Link to="/cambiart" className="deco-n"><h5 className="my-2 deco-n">Cambiar tarjeta</h5></Link></div>
								        <div className="col-xs-12 col-lg-12 col-sm-12 col-md-12 py-2"><Link to="/cambiarp" className="deco-n"><h5 className="my-2 deco-n">Cambiar pais</h5></Link></div>
								        <div className="col-xs-12 col-lg-12 col-sm-12 col-md-12 py-2"><Link to="/cambiarnu" className="deco-n"><h5 className="my-2 deco-n">Cambiar numero</h5></Link></div>
								        <div className="col-xs-12 col-lg-12 col-sm-12 col-md-12 py-2"><Link to="/cambiarco" className="deco-n"><h5 className="my-2 deco-n">Cambiar correo</h5></Link></div>
								      </div>
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

export default Seguridad;