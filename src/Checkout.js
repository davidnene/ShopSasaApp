import React from "react";
import CheckoutCard from "./CheckoutCard"


function Checkout({ addToCart, setAddToCart, handleToCart, setHandleToCart }) {
return (
    <div>
        
        <div className="container">
            <div className="row">
                {addToCart.map(item =>        
                    (item.toCart? <CheckoutCard item={item} addToCart={addToCart} setAddToCart={setAddToCart} title = {item.title} price = {item.price} image = {item.image} key={item.id} id={item.id} handleToCart={handleToCart} setHandleToCart={setHandleToCart} toCart={item.toCart}/>: null
                ))}
            </div>
        </div>
    </div>
)
};


export default Checkout;