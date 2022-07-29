import React, { useState } from "react";
import {Link} from "react-router-dom";

function Card({ item, title, price, image, id }) {
    const [toCart, setToCart] = useState(false)

    function handleAddClick() {
        setToCart(!toCart)
    }

    const btn = toCart?"btn btn-success":"btn btn-warning"
    
    return (
    <div className='col-3'>
        <div className="card gx-1" style={{width: 18 + "rem", height: 28 + "rem"}}>
            <img style={{height: 200 + "px",width:200 + "px"}} src={image} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <button className={btn} onClick={handleAddClick}>{toCart?"Remove from Cart":"Add to Cart"}</button><br/>
                <Link exact="true" to={`/products/${id}`} >See details</Link>     
            </div>
        </div>
    </div>
    
    )
}

export default Card;