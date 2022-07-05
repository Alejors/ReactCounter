import React from "react";

const Secondscounter = (props) => {
    let counter = props.seconds;
    let numero = counter.toString();
    let numercompleto = numero.padStart(6, '0');
    let arr = numercompleto.split('');
    
    return (
        <div className="d-flex mt-3 justify-content-center counter container-fluid">
            <div className="col-md-1"><i className="fa-regular fa-clock"></i></div>
            <div className="col-md-1 centenamil">{arr[0]}</div>
            <div className="col-md-1 decenamil">{arr[1]}</div>
            <div className="col-md-1 mil">{arr[2]}</div>
            <div className="col-md-1 centena">{arr[3]}</div>
            <div className="col-md-1 decena">{arr[4]}</div>
            <div className="col-md-1 unidad">{arr[5]}</div>
        </div>
    )
}

export default Secondscounter;