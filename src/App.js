import React, { useEffect, useState } from 'react';
import Card from './Card'
import './App.css';
import NavBar from './NavBar';
import {Route, Switch} from 'react-router-dom'
import FrontPage from './FrontPage';
import Products from './Products';
import Login from './Login';
import Checkout from './Checkout';

function App() {
  const [items, setItems] = useState([]);

  function handleItems() {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(items => setItems(items))
  };

  console.log(items)

  useEffect(handleItems, []);
  
  return (
    <div> 
      <Switch>
        <Route exact path ="/products">
          <NavBar/>
          <Products items={items}/>
        </Route>
        <Route exact path="/home">
        <NavBar/>
          <FrontPage/>
        </Route>
        <Route path="/checkout">
          <NavBar/>
          <Checkout/>
        </Route>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
