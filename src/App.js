import React, { Component } from 'react';
import firebase from "firebase";
import Inicio from "./componentes/inicio/Inicio.js";
import Login from "./componentes/login/Login.js";
import Cambiarc from "./componentes/ajustes/Cambiarc.js";
import Cambiarn from "./componentes/ajustes/Cambiarn.js";
import Cambiarp from "./componentes/ajustes/Cambiarp.js";
import Cambiart from "./componentes/ajustes/Cambiart.js";
import Cambiarnu from "./componentes/ajustes/Cambiar#.js";
import Cambiarco from "./componentes/ajustes/Cambiarco.js";
import Busqueda from "./componentes/busqueda/Busqueda.js";
import Categorias from "./componentes/categorias/Categorias.js";
import Favoritos from "./componentes/favoritos/Favoritos.js";
import Populares from "./componentes/populares/Populares.js";
import Producto from "./componentes/producto/Producto.js";
import Productos from "./componentes/productos/Productos.js";
import Seguridad from "./componentes/seguridad/Seguridad.js";
import Subirprod from "./componentes/subir producto/Subirprod.js";
import Sugeridos from "./componentes/sugeridos/Sugeridos.js";
import Tucuenta from "./componentes/tu cuenta/Tucuenta.js";
import Usuarios from "./componentes/usuarios/Usuarios.js";
import Comprados from "./componentes/comprados/Comprados.js";
import Vendidos from "./componentes/vendidos/Vendidos.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

firebase.initializeApp({
  apiKey: "AIzaSyBI3YBxSs9wClH4FXP0FbuxBwt22HX1Cog",
  authDomain: "merqueo-e6628.firebaseapp.com",
  databaseURL: "https://merqueo-e6628.firebaseio.com",
  projectId: "merqueo-e6628",
  storageBucket: "merqueo-e6628.appspot.com",
  messagingSenderId: "73982634376",
  appId: "1:73982634376:web:3bbba9b61cd412edfd323d",
  measurementId: "G-G9YC2CT8FQ"
});

function App(){
    return (
    	<Router>
	      <div>
	      	<Switch>
		      	<Route path="/" exact component={Inicio}/>
		        <Route path="/login" component={Login}/>
		        <Route path="/cambiarc" component={Cambiarc}/>
		        <Route path="/cambiarn" component={Cambiarn}/>
		        <Route path="/cambiarco" component={Cambiarco}/>
		        <Route path="/cambiarp" component={Cambiarp}/>
		        <Route path="/cambiart" component={Cambiart}/>
		        <Route path="/cambiarnu" component={Cambiarnu}/>
		        <Route path="/busqueda" component={Busqueda}/>
		        <Route path="/categorias" component={Categorias}/>
		        <Route path="/favoritos" component={Favoritos}/>
		        <Route path="/populares" component={Populares}/>
		        <Route path="/producto" component={Producto}/>
		        <Route path="/productos" component={Productos}/>
		        <Route path="/seguridad" component={Seguridad}/>
		        <Route path="/subirprod" component={Subirprod}/>
		        <Route path="/sugeridos" component={Sugeridos}/>
		        <Route path="/tucuenta" component={Tucuenta}/>
		        <Route path="/usuarios" component={Usuarios}/>
		        <Route path="/comprados" component={Comprados}/>
		        <Route path="/vendidos" component={Vendidos}/>
		      </Switch>
	      </div>
      </Router>
    );
}

export default App;
