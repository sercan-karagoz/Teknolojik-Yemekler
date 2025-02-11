import { useState } from 'react'

import './App.css'
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import OrderForm from './components/OrderForm';
import OrderStatus from './components/OrderStatus';
import './components/Layout.css';

function App() {
  const initialForm = {
        
    boyut: "",
    hamur: "",
    Pepperoni: false,
    Kabak: false,
    Mısır:false,
    Sarımsak:false,
    Ananas:false,
    Sosis:false,
    Soğan:false,
    Sucuk:false,
    Biber:false,
    TavukIzgara:false,
    Domates:false,
    KanadaJambonu:false,
    Jalapeno:false,
    Salam:false,
    adet:1,
    not: "",
};
  const [form, setForm] = useState(initialForm);
  return (
    <>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/orderForm">
            <OrderForm form={form} setForm={setForm} />
          </Route>
          <Route exact path="/orderStatus">
            <OrderStatus form={form} setForm={setForm} />
          </Route>
        </Switch>
    </>
  )
}

export default App
