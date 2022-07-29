import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import NavBar from "./NavBar";

function DisplayItem({ items }) {
    const [toCart, setToCart] = useState(false)
    const history = useHistory()

    function handleAddClick() {
        setToCart(!toCart)
    }

    function handleClickBack(){
        history.push("/products")
    }

    const btn = toCart?"btn btn-success":"btn btn-warning"
    const params = useParams()
    const id = params.id - 1
    return (
        <div>
             <div>
                 <NavBar/>
                <div className="card gx-1" style={{width: 30 + "rem", position:"absolute", right:"450px"}}>
                    <img style={{height: 200 + "px",width:200 + "px"}} src={items[id].image} className="card-img-top" alt={items[id].title}/>
                    <div className="card-body">
                        <h5 className="card-title">{items[id].title}</h5>
                        <p className="card-text">${items[id].price}</p>
                        <p className="card-text">{items[id].description}</p>
                        <button className={btn} onClick={handleAddClick}>{toCart?"Remove from Cart":"Add to Cart"}</button>
                        <button style={{position:"absolute", right:"30px"}} onClick={handleClickBack} className="btn btn-danger">Back</button>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayItem;