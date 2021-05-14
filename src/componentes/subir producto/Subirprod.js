import React, { Component } from 'react';
import Navbar from "../navbars/Navbar2";
import Footer from "../footers/Footer1";
import firebase from "firebase";

class Subirprod extends Component {

	constructor(args){
		super(args);
		this.state = {
			todos:[]
		}
		this.enviar = this.enviar.bind(this)
	}

	componentWillMount(){

	var nameRef = firebase.database().ref().child("todos")
    nameRef.on('value' , (snapshot) => {
        var dt = snapshot.val()
        this.setState({
          todos: dt
        })
    })
	}

	enviar(){
		var nameRef = firebase.database().ref().child("todos")
    var  dato = this.state.todos
		const objeto = {titulo:this.titulo.value, descripcion:this.descripcion.value, precio:this.precio.value}
		var tm = dato.push(objeto)
		nameRef.set(dato)
	}
  render() {
    return (
    	<div>
			    <Navbar />
					<div className="container formulario">
						<div className="row">
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-3">
								<h2>Subir producto</h2>
							</div>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
								  <div className="input-group-prepend">
								    <span className="input-group-text" id="basic-addon1">titulo</span>
								  </div>
								  <input  ref={input => (this.titulo = input)} type="text" className="form-control" placeholder="..." aria-label="Username" aria-describedby="basic-addon1"/>
								</div>
							</form>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
								  <div className="input-group-prepend">
								    <span className="input-group-text">descripcion</span>
								  </div>
								  <textarea  ref={input => (this.descripcion = input)} className="form-control" aria-label="With textarea"></textarea>
								</div>
							</form>
							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col col-xs-12 col-sm-12 col-md-12 col-lg-12">
								  <input  ref={input => (this.precio = input)} type="text" className="form-control" placeholder="$..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
								  <div className="input-group-append">
								    <span className="input-group-text" id="basic-addon2">Valor</span>
								  </div>
								</div>
							</form>
							
							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-3">
								<h2>Categorias</h2>
							</div>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-6 col-md-6 col-lg-3">
								  <div className="input-group-prepend">
								    <div className="input-group-text">
								      <input type="checkbox"/>
								    </div>
								  </div>
								  <p className="form-control">Musica</p>
								</div>

								<div className="input-group mb-3 col-xs-12 col-sm-6 col-md-6 col-lg-3">
								  <div className="input-group-prepend">
								    <div className="input-group-text">
								      <input type="checkbox"/>
								    </div>
								  </div>
								  <p className="form-control">Deportes</p>
								</div>

								<div className="input-group mb-3 col-xs-12 col-sm-6 col-md-6 col-lg-3">
								  <div className="input-group-prepend">
								    <div className="input-group-text">
								      <input type="checkbox"/>
								    </div>
								  </div>
								  <p className="form-control">Recreacion</p>
								</div>

								<div className="input-group mb-3 col-xs-12 col-sm-6 col-md-6 col-lg-3">
								  <div className="input-group-prepend">
								    <div className="input-group-text">
								      <input type="checkbox"/>
								    </div>
								  </div>
								  <p className="form-control">Tecnologia</p>
								</div>
							</form>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-6 col-md-6 col-lg-3">
								  <div className="input-group-prepend">
								    <div className="input-group-text">
								      <input type="checkbox"/>
								    </div>
								  </div>
								  <p className="form-control">Limpieza</p>
								</div>

								<div className="input-group mb-3 col-xs-12 col-sm-6 col-md-6 col-lg-3">
								  <div className="input-group-prepend">
								    <div className="input-group-text">
								      <input type="checkbox"/>
								    </div>
								  </div>
								  <p className="form-control">Belleza</p>
								</div>

								<div className="input-group mb-3 col-xs-12 col-sm-6 col-md-6 col-lg-3">
								  <div className="input-group-prepend">
								    <div className="input-group-text">
								      <input type="checkbox"/>
								    </div>
								  </div>
								  <p className="form-control">Construccion</p>
								</div>

								<div className="input-group mb-3 col-xs-12 col-sm-6 col-md-6 col-lg-3">
								  <div className="input-group-prepend">
								    <div className="input-group-text">
								      <input type="checkbox"/>
								    </div>
								  </div>
								  <p className="form-control">Juegos</p>
								</div>

							</form>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-6 col-md-6 col-lg-3">
								  <div className="input-group-prepend">
								    <div className="input-group-text">
								      <input type="checkbox"/>
								    </div>
								  </div>
								  <p className="form-control">Electrodomesticos</p>
								</div>

								<div className="input-group mb-3 col-xs-12 col-sm-6 col-md-6 col-lg-3">
								  <div className="input-group-prepend">
								    <div className="input-group-text">
								      <input type="checkbox"/>
								    </div>
								  </div>
								  <p className="form-control">Automotor</p>
								</div>

								<div className="input-group mb-3 col-xs-12 col-sm-6 col-md-6 col-lg-3">
								  <div className="input-group-prepend">
								    <div className="input-group-text">
								      <input type="checkbox"/>
								    </div>
								  </div>
								  <p className="form-control">Estudios</p>
								</div>
							</form>

							<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-3">
								<h2>Agregar imagenes</h2>
							</div>

							<form className="form-inline input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
								<div className="input-group mb-3 col-xs-12 col-sm-12 col-md-12 col-lg-12">
								  <button onClick={this.enviar} className="btn btn-outline-light btn-block">Subir</button>
								</div>
							</form>

						</div>
					</div>  
			  
			  <Footer />

      </div>
    );
  }
}

export default Subirprod;