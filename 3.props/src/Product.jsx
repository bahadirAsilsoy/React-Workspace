import React from 'react'

function Product({productName, price}) {
    // const {productName, price} = props; == //{productName : "Ayakkabı", price : 3200}
  return (
    <>
        <div> ÜRÜN BİLGİLERİ</div>

        <div>
            <div> Ürün : {productName}</div>
            <div> Fiyat : {price} TL</div>
        </div>
    </>
  )
}

export default Product