import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from '../media/carrito.png';

class Navbar2 extends Component {
	constructor(args){
		super(args)
		this.state = {
			buscar: ""
		}
	}

	onChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}

  render() {
    return (
    	<div className="container-fluid">
	    	<div className="row">
	    		<header>
					  <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow">
					    <a className="navbar-brand" href="#">
					      <img src={ logo } className="logo"/>
					    </a>
					    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					      <span className="navbar-toggler-icon"></span>
					    </button>
					    <div className="collapse navbar-collapse" id="navbarNav">
					      <ul className="navbar-nav ml-auto">
				      	  <div className="collapse navbar-collapse" id="navbarNav">
							      <ul className="navbar-nav ml-auto">
							        <li className="nav-item">
							          <Link to="/productos" className="nav-link">Home</Link>
							        </li>
							        <li className="nav-item">
							          <Link to="/tucuenta" className="nav-link">Tu cuenta</Link>
							        </li>
							        <li className="nav-item">
							          <Link to="/" className="nav-link">Conocenos</Link>
							        </li>
							        <li className="nav-item">
							          <Link to="/categorias" className="nav-link">Categorias</Link>
							        </li>
							      </ul>
							       <form className="form-inline">
								       <div className="form-group mx-sm-3 mb-2">
										    <input value={this.state.buscar} onChange={this.onChange.bind(this)} 
										    type="text" className="form-control" name="buscar" id="buscar" placeholder="Buscar..." />
										  </div>
										  <Link to="/busqueda"><button type="submit" className="btn btn-outline-warning mb-2">buscar</button></Link>
										</form>
									</div>
					      </ul>
					    </div>
					  </nav>
					</header>
				</div>
			</div>
    );
  }
}

export default Navbar2;