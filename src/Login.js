import React from "react";
import {useHistory} from 'react-router-dom';
    

function Login() {

    const history = useHistory()
    function handleLogin() {
            history.push("/home")
    }
    return (
        <div style={{position:"absolute", left:"450px", bottom: "250px"}}>
            <p><strong>Shop Sasa</strong></p>
        <img style={{height: 50 + "px", width: 50 + "px"}} className="navbar-brand" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2NQ4FQNp0ehabTAuzk7Y43--Y1bkYa5zxg&usqp=CAU" alt="Logo"/>
        <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input required type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button style={{position:"absolute", left:"100px"}} type="submit" className="btn btn-warning">Login</button>
      </form>
      </div>
    )
};

export default Login;