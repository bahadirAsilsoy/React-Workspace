import React, { useEffect, useState } from 'react'
import '../css/Header.css'
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';


function Header() {

  const [theme, setTheme] = useState(true);

  const navigate = useNavigate();

  const {products} = useSelector((store) => store.basket);

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
        <div className='flex-row' onClick={() => navigate("/")}>
            <img className='logo' src="./src/images/logo.png" alt="" />
            <p className='logo-text'>BAHO A.Ş.</p>
        </div>

        <div className='flex-row'>
            <input className="search-input" type='text' placeholder='Bir şeyler ara'/>
            <div>
                {
                    theme ? <CiDark className='icon-moon' onClick={changeTheme}/> : <CiLight className='icon-sun' onClick={changeTheme}/>
                }
                <Badge badgeContent={products.length} color="error">
                    <CiShoppingBasket style={{marginRight:"6px"}} className='icon-basket'/>
                </Badge>
            </div>
        </div>
    </div>
  )
}

export default Header