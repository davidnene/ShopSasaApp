import React from "react";
import CheckoutCard from "./CheckoutCard"

function Checkout({ addToCart, handleToCart, setHandleToCart }) {
return (
    <div>
        {addToCart.map(item =>        
            (item.toCart? <CheckoutCard addToCart={addToCart} title = {item.title} price = {item.price} image = {item.image} key={item.id} id={item.id} handleToCart={handleToCart} setHandleToCart={setHandleToCart}/>: null
        ))}
    </div>
)
};


export default Checkout;