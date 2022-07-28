import React, { useEffect, useState } from 'react';
import Card from './Card'
import './App.css';
import NavBar from './NavBar';
import {Route, Switch} from 'react-router-dom'
import FrontPage from './FrontPage';
import Products from './Products';

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
      <p><strong>Shop Sasa Ltd</strong></p>
      <NavBar/>
      <Switch>
        <Route exact path ="/products">
          <Products items={items}/>
        </Route>
        <Route exact path="/">
          <FrontPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
