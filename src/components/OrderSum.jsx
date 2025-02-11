export default function OrderSum({secim, total}) {
    

    return (    
        <>
        <p className="total-p"><span>Seçimler</span><span>{secim}₺</span></p>
        <p className="total-p"><span>Toplam</span><span>{total}₺</span></p>
        </>
    );
  }