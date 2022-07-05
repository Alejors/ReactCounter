import React from "react";
import ReactDOM from "react-dom";
import Secondscounter from "./component/counter";

import "../styles/index.css";
let counter = 0;
window.onload = function(){
    let interval = window.setInterval(() => {
        ReactDOM.render(<Secondscounter seconds={counter} />, document.querySelector("#app"));
        counter++;        
    }, 1000);
}

ReactDOM.render(<Secondscounter seconds={counter} />, document.querySelector("#app"));