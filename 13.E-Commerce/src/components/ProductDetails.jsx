import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import '../css/ProductDetails.css'
import { addProductToBasket } from '../redux/slices/basketSlice';

function ProductDetails() {

  const { id } = useParams();

  const { products, selectedProduct } = useSelector((store) => store.product)

  const { title, price, description, image } = selectedProduct

  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count
    }

    dispatch(addProductToBasket(payload));
  }
   
  useEffect(() =>{
    getProductById();
  }, []);

  const getProductById = () => {
    products && products.map((product) =>{
        if(product.id == id){
            dispatch(setSelectedProduct(product));
        }
    })
  }

  return (
    <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <div style={{ marginRight: '40px' }}>
                <img src={image} width={300} height={500} alt="" />
      </div>
      <div>
        <h1 style={{ fontFamily: 'arial' }}>{title}</h1>
        <p style={{ fontFamily: 'arial', fontSize: '20px' }}>{description}</p>
        <h1 style={{ fontSize: '50px', fontFamily: 'arial', fontWeight: 'bold', color: 'rgb(185, 76, 76)' }}>{price}₺</h1>
      
        <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CiCirclePlus className='icon-plus' onClick={increment} style={{ fontSize: '40px', marginRight: '15px' }} /> <span style={{ fontSize: '35px' }}>{count}</span> 
                    <CiCircleMinus className='icon-minus' onClick={decrement} style={{ fontSize: '40px', marginLeft: '15px' }} />
        </div>

        <div>
          <button className='buy-button' onClick={addBasket}>Sepete Ekle</button>
        </div>
      </div>
    </div>
    
  )
}

export default ProductDetails