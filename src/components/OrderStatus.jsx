import logo from '../assets/logo.svg';
import './Layout.css';


export default function OrderStatus({form,setForm} ) {
  
    return (
      <div className="orderStatus-container">
         <img src={logo} alt="logo" />
         <h1>TEBRİKLER!<br />SİPARİŞİNİZ ALINDI</h1>
         <p>Siparişiniz: Position Absolute Acı Pizza <br />
         Adet: {form.adet} <br />
         Hamur: {form.hamur} <br />
         Boyut: {form.boyut} <br />
         </p>
  </div>
    );
  }
  