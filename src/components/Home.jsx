import logo from '../assets/logo.svg';
import './Layout.css';
import { Link } from 'react-router-dom';
export default function Home() {
    

    return (
      <div className="home-container">
        
        <img src={logo} alt="logo" />
       
    <h1>KOD ACIKTIRIR<br />PİZZA, DOYURUR</h1>
   <Link to="/orderForm"> <button>ACIKTIM</button></Link>
      </div>
    );
  }
  