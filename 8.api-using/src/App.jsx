import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  const getAllUsers = async () => {
    const response = await axios.get(BASE_URL + "/users");
    console.log(response.data);
  };

  const getUsersById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    console.log(response.data);
  };

  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response" , response.data);
  }

  useEffect(() => {
    // getAllUsers();
    // getUsersById(2);
    const newUser = {
      "username": "can",
      "password": "zzz"
    }
    createUser(newUser);
  }, []);

  return <></>;
}

export default App;
