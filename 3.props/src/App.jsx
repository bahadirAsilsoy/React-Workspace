import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {

  return (
    <>
      <Container>
        <Product productName="Telefon" price={20500}/>
      </Container>
    </>
  )
}

export default App
