import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../media/carrito.png';

function Footer1(){
    return (
    	<div className="container-fluid p-5 footer">
			  <div className="row">
			    <div className="col-md-3 col-xs-12 col-sm-6 col-lg-2">
			      <img src={ logo } className="logo"/>
			    </div>
			    <div className="col-md-3 col-xs-12 col-sm-6 col-lg-2">
			      <h5><font>categorias</font></h5>
			      <ul className="list-unstyled text-small">
			        <Link to="/categorias"><li className="text-muted"><font><small className="hover">Deportes</small></font></li></Link>
			        <Link to="/categorias"><li className="text-muted"><font><small className="hover">Musica</small></font></li></Link>
			        <Link to="/categorias"><li className="text-muted"><font><small className="hover">Hogar</small></font></li></Link>
			        <Link to="/categorias"><li className="text-muted"><font><small className="hover">Electrodomesticos</small></font></li></Link>
			        <Link to="/categorias"><li className="text-muted"><font><small className="hover">Tecnologia</small></font></li></Link>
			        <Link to="/categorias"><li className="text-muted"><font><small className="hover">Recreacion</small></font></li></Link>
			      </ul>
			    </div>
			    <div className="col-md-3 col-xs-12 col-sm-6 col-lg-2">
			      <h5><font>tu cuenta</font></h5>
			      <ul className="list-unstyled text-small">
			        <Link to="/cambiart"><li className="text-muted"><font><small className="hover">Cambiar tarjeta</small></font></li></Link>
			        <Link to="/cambiarn"><li className="text-muted"><font><small className="hover">Cambiar nombre de usuario</small></font></li></Link>
			        <Link to="/cambiarc"><li className="text-muted"><font><small className="hover">Cambiar contraseña</small></font></li></Link>
			      </ul>
			    </div>
			    <div className="col-md-3 col-xs-12 col-sm-6 col-lg-2">
			      <h5><font>seguridad</font></h5>
			      <ul className="list-unstyled text-small">
			        <Link to="/seguridad"><li className="text-muted"><font><small className="hover">Politica de privacidad</small></font></li></Link>
			        <Link to="/seguridad"><li className="text-muted"><font><small className="hover">Vendedores garantizados</small></font></li></Link>
			        <Link to="/seguridad"><li className="text-muted"><font><small className="hover">Ajustes</small></font></li></Link>
			      </ul>
			    </div>
				</div>
		  </div>
    );
}

export default Footer1;