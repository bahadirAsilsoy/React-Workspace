import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import { BrowserRouter } from 'react-router-dom'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, setDrawer } from './redux/slices/basketSlice'

function App() {

  const {products , drawer, totalAmount} = useSelector((store) => store.basket);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateBasket())
  }, []);

  return (
    <>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer className='drawer' sx={{padding:"20px"}} anchor='right'  onClose={() => dispatch(setDrawer())} open={drawer} >
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>

                  <div className='flex-row' style={{padding:"15px"}}>
                    <img style={{marginRight:"8px"}}src={product.image} width={50} height={50}/>
                    <p p style={{width:"190px"}}>{product.title}({product.count})</p>
                    <p style={{marginRight:"10px", color:"#C82333", font:"icon", fontWeight:"bold"}}>{product.price}€</p>
                    <button className='drawer-delete-button'>Sil</button>
                  </div>

                </div>
              )
            })
          }

          <div>
            <p style={{textAlign:"end", marginRight:"24px"}}>toplam tutar: {totalAmount}€</p>
          </div>


          </Drawer>
      </PageContainer>
    </>
  )
}

export default App
