import React, { useEffect, useState } from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

function Header() {

  const [theme, setTheme] = useState(false);    

  const changeTheme = () => {
    const root = document.getElementById("root");
    if(theme) {
        root.style.backgroundColor = "black";
        root.style.color="#fff";
    } else {
        root.style.backgroundColor = "#fff";
        root.style.color="black";
    }
    setTheme(!theme);
  }

  return (
    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
        <div className='flex-row'>
            <img className='logo' src="./src/images/logo.png" alt="" />
            <p className='logo-text'>BAHO A.Ş.</p>
        </div>

        <div className='flex-row'>
            <input className="search-input" type='text' placeholder='Bir şeyler ara'/>
            <div>
                {
                    theme ? <CiDark className='icon-moon' onClick={changeTheme}/> : <CiLight className='icon-sun' onClick={changeTheme}/>
                }
                <CiShoppingBasket className='icon-basket'/>
            </div>
        </div>
    </div>
  )
}

export default Header