import React, { useState } from "react";
import {Link} from "react-router-dom";

function Card({ title, price, image, id, toCartCheckout, setToCartCheckout }) {
    
    const [handleToCart, setHandleToCart] = useState(false);

    function handleAddClick() {
        
        if (handleToCart === false){
        setHandleToCart(true)
        itemToCart.toCart = true
        setToCartCheckout(()=>[...toCartCheckout, itemToCart])
        
        } else if (handleToCart === true) {
            setHandleToCart(()=> false)
            itemToCart.toCart = false
            setToCartCheckout(()=>[...toCartCheckout, itemToCart])
        }
    };
    
    const itemToCart = {
        image: image,
        title: title,
        price: price,
        id: id,
        toCart: handleToCart
    };
    
    const btn = handleToCart?"btn btn-success":"btn btn-warning"
    
    return (
    <div className='col-3'>
        <div className="card gx-1" style={{width: 18 + "rem", height: 28 + "rem"}}>
            <img style={{height: 200 + "px",width:200 + "px"}} src={image} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">${price}</p>
                <button className={btn} onClick={handleAddClick}>{handleToCart?"Remove from Cart":"Add to Cart"}</button><br/>
                <Link exact="true" to={`/products/${id}`} >See details</Link>     
            </div>
        </div>
    </div>
    
    )
}

export default Card;