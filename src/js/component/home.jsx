import React from "react";
import { render } from "react-dom";
import Secondscounter from "./counter";

const Home = () => {
	
	window.onload = function() {
		let counter = 0;
		let intervalo = window.setInterval(return(<Secondscounter seconds={counter} />), 1000);
		
	}	
};

export default Home;