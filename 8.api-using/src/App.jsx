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
    // POST : veri eklemek için kullanılır
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  const updateUser = async (userId, updatedUser) => {
    // PUT : veri güncellemek için kullanılır
    await axios.put(`${BASE_URL}/users/${userId}`, updatedUser);
  };

  const deleteUserById = async (userId) => {
    const deletedUser = await axios.delete(`${BASE_URL}/users/${userId}`);
    console.log(deletedUser);
  };

  useEffect(() => {
    // getAllUsers();
    // getUsersById(2);

    // const newUser = {
    //   "username": "can",
    //   "password": "zzz"
    // }
    // createUser(newUser);
    
    // updateUser("7bcb", {
    //   "username": "afacan",
    //   "password": "bbb"
    // })

    //deleteUserById("7bcb");
  }, []);

  return <></>;
}

export default App;
