import React, { useState } from "react";
import "../css/currency.css";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_AMyOqDstVe4972h1FfZbPg0NZz7pZDGrAhiviQFt";

function Currency() {

  const [amount, setAmount] = useState(0); 
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0); 

  const exchange = async () => {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    const result = (response.data.data[toCurrency]) * amount;
    setResult((result).toFixed(3));
  }

  return (
    <>
      <div className="currency-div">

        <div>
          <h3 style={{marginTop:"-20px",fontFamily:"arial",}}>DÖVİZ KURU UYGULAMASI</h3>
        </div>

        <div>
          <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className="amount" />

          <select onChange={(e) => setFromCurrency(e.target.value)} className="from-currency-option">
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
          </select>

          <FaRegArrowAltCircleRight
            style={{ fontSize: "25px", marginRight: "10px", position: "relative", top: "8px"}}
          />

          <select onChange={(e) => setToCurrency(e.target.value)} className="to-currency-option">
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
          </select>

          <input value={result} readOnly type="number" className="result" />
          
          <div>
            <button onClick={exchange} className="exchange-button">Çevir</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Currency;
