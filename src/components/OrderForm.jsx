import logo from '../assets/logo.svg';
import './Layout.css';
import { FormGroup, Input, Label, Form, Row, Col,InputGroup,Button } from 'reactstrap';
import OrderSum from './OrderSum';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
export default function OrderForm() {
   
  
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
        name="radio1"
        type="radio"
      />
     
      <Label check>
        Küçük
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
      />
     
      <Label check>
        Orta
      </Label>
    </FormGroup>
    <FormGroup check>
      <Input
        name="radio1"
        type="radio"
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
      name="select"
      type="select"
    >
      <option className="option" value="" disabled selected >
        Hamur Kalınlığı
      </option>
      <option>
        Kalın Hamur
      </option>
      <option>
        İnce Hamur
      </option>
      <option>
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
    <Input type="checkbox" />
    <Label check>
      Pepperoni
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
    <Label check>
      Kabak
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline 
  >
    <Input type="checkbox" />
    <Label check>
      Mısır
    </Label>
  </FormGroup>

  <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
    <Label check>
      Sarımsak
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
    <Label check>
      Ananas
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
    <Label check>
      Sosis
    </Label>
  </FormGroup>

  <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
    <Label check>
      Soğan
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
    <Label check>
      Sucuk
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
    <Label check>
      Biber
    </Label>
  </FormGroup>
 
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
    <Label check>
      Tavuk Izgara
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
    <Label check>
      Domates
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
    <Label check>
      Kanada Jambonu
    </Label>
  </FormGroup>
 
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
    <Label check>
      Jalapeno
    </Label>
  </FormGroup>
  <FormGroup
    check
    inline
  >
    <Input type="checkbox" />
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
                <OrderSum/>
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
  