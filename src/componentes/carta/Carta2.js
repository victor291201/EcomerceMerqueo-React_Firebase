import React, { Component} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import firebase from "firebase";



class Carta2 extends Component {

	constructor() {
		super();
		this.state = {
      todos:[],
      itemp:1,
      numeri:3,
		}
    this.handleClick = this.handleClick.bind(this);
	};

	
  componentWillMount(){
    const nameRef = firebase.database().ref().child('todos')

    nameRef.on('value' , (snapshot) => {
        var dt = snapshot.val()
        this.setState({
          todos: dt
        })
    })
  }

	handleClick(event) {
    var val = this.state.numeri
    this.setState({
          itemp :Number(event.target.id)
    });
  }

	render() {
    const {todos,itemp,numeri} = this.state
		const final = numeri * itemp;
    const inicio = final - numeri;
		var todosjun = todos.slice(inicio,final)
		const renderTodos = todosjun.map((todo, index) => {
		      return (
		        <div className="maso col-lg-4 col-md-6 col-sm-6 col-xs-12 my-3">	
						  <div className="card card1 shadow-sm">
						    <Link to="/producto" className="deco-n"><img src={ todo.imagen } className="card-img-top imagen-carta"/></Link>	
						    <div className="card-body">
						      <Link to="/producto" className="deco-n"><h5 className="card-title text-dark">{ todo.titulo }</h5></Link>
						      <p className="card-text card-text1 descripcion">{ todo.descripcion }</p>
						      <p className="card-text card-text1 precio2"><small className="text-muted">Last updated { todo.tiempo } ago</small></p>
						      <p className="text-warning precio">{ todo.precio }</p>
						    </div>
						  </div>
						</div>
					);
        });
			const pageNumbers = [];
        for (let i = 1; i <= 3; i++) {
          pageNumbers.push(i);
        }
      const renderPageNumbers = pageNumbers.map(number => {
          return (
            <li className="page-item page-link"
              key={number}
              id={number}
              onClick={this.handleClick}
            >
              {number}
            </li>
          );
        });
    
    


    return (
          <div>
              {renderTodos}
            <div aria-label="Page navigation example" className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mt-2">
							  <ul className="pagination justify-content-center">
							    {renderPageNumbers}
							  </ul>
							</div>	
          </div>
        );
      }
    }

export default Carta2;