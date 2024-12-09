import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'

function Product({ product }) {

  const {id, title, price, description, image, rating, rate, count} = product

  const navigate = useNavigate();

  return (
    <div>

        <div className='card'>

            <img className="image" src={image} alt="" />

            <div>
                <p style={{textAlign:"center", height:"50px"}}> {title} </p>
                <h3 style={{textAlign:"end", marginRight:"18px"}}> {price}€ </h3>
            </div>

            <div style={{textAlign:"end", marginRight:"8px"}}>
                <button onClick={() => navigate("/product-details/" + id)} className='detail-button'>Detayına Git</button>
            </div>

        </div>

    </div>
  )
}

export default Product