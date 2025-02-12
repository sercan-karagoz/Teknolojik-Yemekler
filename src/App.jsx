import { useState,useEffect } from 'react'

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
  const [total, setTotal] = useState(85.5);
  const [secim, setSecim] = useState(0);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    let minMax = Object.entries(form).filter(([key, value]) => value === true).length;
    setSecim(minMax * 5);
    setTotal(((minMax * 5) + 85.5) * Number(form.adet));
  
    if (form.boyut === "" || form.hamur === "" || minMax < 4 || minMax > 10) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [form]);


  return (
    <>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/orderForm">
            <OrderForm form={form} setForm={setForm} total={total} setTotal={setTotal} secim={secim} setSecim={setSecim} isValid={isValid} setIsValid={setIsValid} />
          </Route>
          <Route exact path="/orderStatus">
            <OrderStatus form={form} total={total} secim={secim}  />
          </Route>
        </Switch>
    </>
  )
}

export default App
