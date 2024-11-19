import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
let isimler = [
  "Baho",
  "Umut",
  "Deniz",
  "Can"
]

  return (
    <div>
      {
        isimler.map((isim, index) => (
          <div style={{backgroundColor: 'orange', border:'1px solid black'}} key={index}>{isim}</div>
        ))
      }
    </div>
  )
}

export default App
