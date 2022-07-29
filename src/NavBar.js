import React from "react";
import {Link} from "react-router-dom"
import {useHistory} from "react-router-dom"

function NavBar() {

  const history = useHistory()

  function handleLogOut() {
      history.push("/")
  }
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <img style={{height: 50 + "px", width: 50 + "px"}} className="navbar-brand" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2NQ4FQNp0ehabTAuzk7Y43--Y1bkYa5zxg&usqp=CAU" alt="Logo"/>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" exact="true" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" exact="true" aria-current="page" to="/products">Products</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" exact="true" aria-current="page" to="/checkout">Checkout</Link>
              </li>
              <li className="nav-item">
              <button style={{position:"absolute", right:"100px"}} onClick={handleLogOut} type="submit" className="btn btn-warning">logout</button>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    )

}

export default NavBar;