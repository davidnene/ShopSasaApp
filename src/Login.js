import React from "react";
import {useHistory} from 'react-router-dom';
    

function Login() {
    
  const BG_URL = "https://t3.ftcdn.net/jpg/03/61/99/94/240_F_361999493_Pv7LkdPmL8MVk9o77aadGglcO8pYfkou.jpg"
    const history = useHistory()
    
    function handleLogin() {
            history.push("/home")
    };

    return (
      <div>
        <img src={BG_URL} style={{height:"100%",width:"100%", filter: "brightness(90%)"}} alt="shopping"/>
        <div style={{position:"absolute", left:"450px", bottom: "250px"}}>
            <p><strong>Shop Sasa</strong></p>
            <img style={{height: 50 + "px", width: 50 + "px"}} className="navbar-brand" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2NQ4FQNp0ehabTAuzk7Y43--Y1bkYa5zxg&usqp=CAU" alt="Logo"/>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="try: name@shopsasa.africa"/>
                  {/* <div id="emailHelp" className="form-label">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input required type="password" className="form-control" id="exampleInputPassword1" placeholder="try: @123"/>
                </div>
                <button style={{position:"absolute", left:"100px"}} type="submit" className="btn btn-warning">Login</button>
            </form>
          </div>
      </div>
    )
};

export default Login;