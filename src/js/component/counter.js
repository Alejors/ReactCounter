import React from "react";

const Secondscounter = (props) => {
    let counter = props.seconds;
    let numero = counter.toString();
    let numercompleto = numero.padStart(6, '0');
    let arr = numercompleto.split('');
    
    return (
        <div className="d-flex mt-3 justify-content-center counter container-fluid">
            <span className="badge text-bg-dark"><i className="fa-regular fa-clock"></i></span>
            <span className="badge text-bg-dark">{arr[0]}</span>
            <span className="badge text-bg-dark">{arr[1]}</span>
            <span className="badge text-bg-dark">{arr[2]}</span>
            <span className="badge text-bg-dark">{arr[3]}</span>
            <span className="badge text-bg-dark">{arr[4]}</span>
            <span className="badge text-bg-dark">{arr[5]}</span>
        </div>
    )
}

export default Secondscounter;