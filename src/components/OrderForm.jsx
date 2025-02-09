import logo from '../assets/logo.svg';
import './Layout.css';
import { FormGroup, Input, Label, Form, Row, Col,InputGroup,Button } from 'reactstrap';
import OrderSum from './OrderSum';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function OrderForm() {
   
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
       
        not: "",
   };

 
       
   const [form, setForm] = useState(initialForm);
const [total, setTotal] = useState(0);

   const handleChange = (event) => {
   
   
        let { name, value, type } = event.target;
        value = type === 'checkbox' ? event.target.checked : value;
        setForm({ ...form, [name]: value });
       
   
   };


 
  
   
   useEffect(() => {

        setTotal((Object.entries(form).filter(([key,value]) => value === true).length * 5));
   
  }, [form]);








  
    return (
        <>
        <header className="orderForm-header">
        <img src={logo} alt="logo" />
        <span>Anasayfa - <strong>Sipariş Oluştur</strong></span>
    </header>
      <div className="orderForm-container">
  <main>
   <h3>Position Absolute Acı Pizza</h3>
   <div className="orderForm-container-rate">
   <h2>85.50₺</h2>
   <p><span>4.9</span> <span>(200)</span></p>
   </div>
   <p className="orderForm-container-main-p">Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. . Küçük bir pizzaya&nbsp;&nbsp;    bazen pizzetta denir.</p>
  <div className="orderForm-container-main-container">
  <div className="orderForm-container-main-radio">
  <h3>Boyut Seç <span className="required">*</span></h3>
  <FormGroup check>
      <Input
        name="boyut"
        type="radio"
        value="Küçük"
        onChange={handleChange}
      />
     
      <Label check>
        Küçük
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="boyut"
        type="radio"
        value="Orta"
        onChange={handleChange}
      />
     
      <Label check>
        Orta
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="boyut"
        type="radio"
        value="Büyük"
        onChange={handleChange}
      />
     
      
      <Label check>
        Büyük
      </Label>
    </FormGroup>
    <FormGroup
      check
      
    >
      </FormGroup>
  </div>
  <div className="orderForm-container-main-select-container">
  <h3>Hamur Seç <span className="required">*</span></h3>
  <FormGroup>
    <Label for="exampleSelect">
     
    </Label >
    <Input
      id="exampleSelect"
      name="hamur"
      type="select"
      onChange={handleChange}
    >
      
      <option value="Kalın Hamur">
        Kalın Hamur
      </option>
      <option value="İnce Hamur">
        İnce Hamur
      </option>
      <option value="Çok İnce Hamur">
        Çok İnce Hamur
      </option>
    </Input>
  </FormGroup>
  </div>

  </div>
  <div className="orderForm-container-check">
<h3>Ek Malzemeler</h3>
<span>En fazla 3 ek malzeme seçilebilirsiniz. 5₺ </span>
<div className="orderForm-container-checkbox">
<Form>
    <Row>
    <Col >
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" name="Pepperoni" value="Pepperoni" onChange={handleChange} />
    <Label check>
      Pepperoni
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" name="Kabak" value="Kabak" onChange={handleChange} />
    <Label check>
      Kabak
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline 
  >
    <Input type="checkbox" name="Mısır" value="Mısır" onChange={handleChange} />
    <Label check>
      Mısır
    </Label>
  </FormGroup>

  <FormGroup
    check
    inline
  >
    <Input type="checkbox" name="Sarımsak" value="Sarımsak" onChange={handleChange} />
    <Label check>
      Sarımsak
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" name="Ananas" value="Ananas" onChange={handleChange} />
    <Label check>
      Ananas
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" name="Sosis" value="Sosis" onChange={handleChange} />
    <Label check>
      Sosis
    </Label>
  </FormGroup>

  <FormGroup
    check
    inline
  >
    <Input type="checkbox" name="Soğan" value="Soğan" onChange={handleChange} />
    <Label check>
      Soğan
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" name="Sucuk" value="Sucuk" onChange={handleChange} />
    <Label check>
      Sucuk
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" name="Biber" value="Biber" onChange={handleChange} />
    <Label check>
      Biber
    </Label>
  </FormGroup>
 
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" name="TavukIzgara" value="TavukIzgara" onChange={handleChange} />
    <Label check>
      Tavuk Izgara
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" name="Domates" value="Domates" onChange={handleChange} />
    <Label check>
      Domates
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" name="KanadaJambonu" value="KanadaJambonu" onChange={handleChange} />
    <Label check>
      Kanada Jambonu
    </Label>
  </FormGroup>
 
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" name="Jalapeno" value="Jalapeno" onChange={handleChange} />
    <Label check>
      Jalapeno
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" name="Salam" value="Salam" onChange={handleChange} />
    <Label check>
      Salam
    </Label>
  </FormGroup>
 
  </Col>
  </Row>
</Form>




</div>
</div>
<div className="orderForm-container-note">
<h3>Sipariş Notu</h3>
<Form>
<Input
    bsSize="sm"
    className="mb-3"
    placeholder="Siparişine eklemek istediğin bir not var mı?"
    name="not"
    onChange={handleChange}
  />
</Form>
<hr/>
</div>
<div className="orderForm-container-button">
    <div className="orderForm-container-button-counter">
<InputGroup>
    <Button style={{ backgroundColor: '#FDC913', border: 'none', color: 'black' }}>
      -
    </Button>
    <Input placeholder="1" className="counter-input" />
    <Button  style={{ backgroundColor: '#FDC913', border: 'none', color: 'black' }}>
      +
    </Button>
  </InputGroup>
  </div>
  <div className="orderForm-container-button-price">
    <div className="orderForm-container-button-price-total">
      <h3 className="total-h3">Sipariş Toplamı</h3>
      <div className="orderForm-container-button-price-total-price">
                <OrderSum total={total}/>
      </div>
    </div>
   <Link to="/orderStatus"> <button  className="price-button">SİPARİŞ VER</button></Link>
  </div>
    </div>
  </main>
   
      </div>
      </>
    );
  }
  