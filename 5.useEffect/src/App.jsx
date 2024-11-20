import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() =>{
    console.log("Her zaman calisir")
  })

  useEffect(() => {
    console.log("Ilk render edildiginde calisir")
    // ürünleri veri tabanından getir ve listele
  }, [])


  useEffect(() =>{
    console.log("Component ilk render edildiginde ve firstName veya lastName state degerleri degistiginde calisir.")
  }, [firstName, lastName])

  // useEffect(() =>{
  //   console.log("Component ilk render edildiginde ve lastName state degeri degistiginde calisir.")
  // }, [lastName])

  return (
    <>
      <div><button onClick={() => setFirstName("Bahadir")}>Adi Degistir</button></div>
      <br />
      <div><button onClick={() => setLastName("Asilsoy")}>Soyadi Degistir</button></div>
    </>
  )
}

export default App
