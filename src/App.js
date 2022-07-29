import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import {Route, Switch} from 'react-router-dom'
import FrontPage from './FrontPage';
import Products from './Products';
import Login from './Login';
import Checkout from './Checkout';
import DisplayItem from './DisplayItem';

function App() {
  const [items, setItems] = useState([]);
  
  function handleItems() {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(items => setItems(items))
  };

  
  useEffect(handleItems, []);
  
  return (
    <div> 
      <Switch>
        <Route exact path ="/products">
          <NavBar/>
          <Products items={items}/>
        </Route>
        <Route exact path={`/products/:id`}>
                <DisplayItem items = {items}/>
            </Route>
        <Route exact path="/home">
        <NavBar/>
          <FrontPage/>
        </Route>
        <Route exact path="/checkout">
          <NavBar/>
          <Checkout/>
        </Route>
        <Route exact path="/">
          <Login/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
