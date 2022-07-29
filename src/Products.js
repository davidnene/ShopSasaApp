import React from "react";
import { useRouteMatch} from "react-router-dom";
import Card from "./Card";



function Products( {items} ) {
    const match = useRouteMatch()
    console.log(match)
    return (
        <div>
            <div >
                <nav className="navbar bg-light">
                    <form className="container-fluid">
                        <div className="input-group">
                            <span className="input-group-text" id="basic-addon1">search</span>
                            <input type="text" className="form-control" placeholder="search item" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    </form>
                </nav>
            </div>
            <div className="container">
                <div className="row">
                    {items.map(item => (
                        <Card item = {item} title = {item.title} price = {item.price} image = {item.image} key={item.id} id={item.id}/>
                    ))}
                </div>
            </div>
      </div>
    )
}

export default Products;