import { useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState("Baho");
  const [lastName, setLastName] = useState("Asilsoy");
  const [names, setNames] = useState(["Baho", "Umut", "Deniz", "Can"]);
  const [userInfo, setUserInfo] = useState({username: "baholi11", password:"kaholi11"})
  const [show, setShow] = useState(true)
  const [count, setCount] = useState(0)

  const handleChange = () => {
    firstName == "Umut" ? setFirstName("Baho") : setFirstName("Umut")
  }

  // useState: bir state'in değeri set modunu kullanarak değiştirildiğinde component yeniden render edilir.

  const arttir = () => {
    setCount(count + 1)
  }

  const azalt = () => {
    setCount(count - 1)
  }

  console.log("Component render edildi")

  console.log(names)

  return (
    <>
      <div>

        {/* <div>{firstName}</div> */}
        {/* <div><button onClick={handleChange}>Ismi Degistir</button></div> */}

        {/* {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))} */}

        {/* <div>Kullanici Adi: {userInfo.username} Sifre: {userInfo.password}</div> */}

        {/* <div>{show ? <div>{userInfo.username} {userInfo.password}</div> : <div>bilgileri gösterme</div>}</div> */}

        <div>{count}</div>
        <div><button onClick={arttir}>Arttir</button></div>
        <div><button onClick={azalt}>Azalt</button></div>  
      </div>
    </>
  )
}

export default App
