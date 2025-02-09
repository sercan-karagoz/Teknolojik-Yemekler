import { useState } from 'react'

import './App.css'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import OrderStatus from './components/OrderStatus';
import './components/Layout.css';

function App() {
  
  return (
    <>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/orderForm">
            <OrderForm />
          </Route>
          <Route exact path="/orderStatus">
            <OrderStatus />
          </Route>
        </Switch>
    </>
  )
}

export default App
