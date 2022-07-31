import Card from "./Card";
import Search from "./Search";
import React, { useState } from "react";




function Products({ items, addToCart, setAddToCart, handleToCart, setHandleToCart }) {

    const [input, setInput] = useState('');

    return (
        <div>
            <div className="container">
                <div className="row">
                    <Search items={items} input={input} setInput={setInput} />
                        {input.length < 1? items.map(item => (
                            <Card item = {item} title = {item.title} price = {item.price} image = {item.image} key={item.id} id={item.id} toCartCheckout={addToCart} setToCartCheckout={setAddToCart} handleToCart={handleToCart} setHandleToCart={setHandleToCart}/>
                        )): null}
                </div>
            </div>
      </div>
    )
}

export default Products;