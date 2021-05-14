import React, { Component} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import firebase from "firebase";



class Carta3 extends Component {

	constructor() {
		super();
		this.state = {
			card:[]
		}
	};	


	componentWillMount(){
		const nameRef = firebase.database().ref().child('categorias')

		

	  nameRef.on('value' , (snapshot) => {
	  		var dt = snapshot.val()
	  		this.setState({
	  			card : dt
	  		})
	  })
	}

	render() {
		const {card} = this.state
		const renderTodos = card.map(function(valor, index) {
	  	return (	
				<div className="maso col-lg-4 col-md-6 col-sm-6 col-xs-12 my-3">	
				  <div className="card card1 shadow-sm">
				      <Link to="/busqueda" className="deco-n"><img src="https://picsum.photos/200/340" className="card-img-top imagen-carta"/></Link>
				    <div className="card-body">
				      <Link to="/busqueda" className="deco-n"><h5 className="text-dark card-title">{ valor }</h5></Link>
				      <p className="card-text card-text1 precio"><small className="text-muted">1.500 Productos</small></p>
				    </div>
				  </div>
				</div>
			);
	  });

    return (
          <div>
              {renderTodos}
          </div>
        );
      }
    }

export default Carta3;
