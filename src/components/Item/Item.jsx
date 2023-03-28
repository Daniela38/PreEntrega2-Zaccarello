import React from 'react';
import { Link } from 'react-router-dom';
import "./item.css";

export default function Item(props) {
    return (
        <div className='container'>
        <div className="card" key={props.id}>
            <img src={props.img} className="card-img-top card" alt="..."/>
            <div claclassNamess="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-text">{props.category}</h6>
                <h6 className="card-text">{props.price}</h6>
                <Link to={`/item/${props.id}`} className="btn btn-primary">Ver detalle</Link>
            </div>
        </div>
        </div>
    );
}
