import React from "react";
import Card from "./Card";

function Products( {items} ) {
    return (
        <div>
       <nav class="navbar bg-light">
            <form class="container-fluid">
                <div class="input-group">
                    <span class="input-group-text" id="basic-addon1">search</span>
                    <input type="text" class="form-control" placeholder="search item" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </form>
        </nav>
        <div className="container">
            <div className="row">
                {items.map(item => (
                    <Card item = {item} title = {item.title} price = {item.price} image = {item.image}/>
                ))}
            </div>
      </div>
      </div>
    )
}

export default Products;