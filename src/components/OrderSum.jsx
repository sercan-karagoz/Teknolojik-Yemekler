export default function OrderSum({total}) {
    

    return (    
        <>
        <p className="total-p"><span>Seçimler</span><span>{total}₺</span></p>
        <p className="total-p"><span>Toplam</span><span>{total+85.5}₺</span></p>
        </>
    );
  }