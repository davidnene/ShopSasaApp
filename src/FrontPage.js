import React from "react";
import {useHistory} from "react-router-dom"

function FrontPage() {
    const history = useHistory();
    const IMG_URL = "https://ak.picdn.net/shutterstock/videos/1009669601/thumb/1.jpg";

    function handleShoppingClick() {
        history.push("/products")
    };
    
    return (
    <div>
    <img src={IMG_URL} style= {{height: "100%", width: "100%"}} alt="shopping"/>
    <button style={{position:"absolute", left:"50px", bottom: "100px"}}  className="btn btn-warning" onClick={handleShoppingClick}>Start Shopping!</button>

    </div>)
}

export default FrontPage;