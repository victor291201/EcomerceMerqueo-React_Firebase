import React, { Component } from 'react';
import { todos } from "../json/populares.json";

var todos1 = [];

for (var i = 1; i <= 3; i++) {
	todos1.push(todos[i]);
}

function mostrar2 (){
	var page1 = document.getELementById('page1');
	var page2 = document.getELementById('page2');
	var page3 = document.getELementById('page3');
	page2.innerHTML = 
	<div>
		{todos1}
	</div>
	;
}