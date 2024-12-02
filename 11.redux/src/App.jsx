import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch} from 'react-redux'
import { decrement, increment } from './redux/counterSlice'
import UserList from './UserList'



function App() {

  const dispatch = useDispatch();

  // const { value } = useSelector((store) => store.counter);
  // console.log(value)

  return (
    <>
      {/* <div>{value}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Arttır</button>
        <button onClick={() => dispatch(decrement())}>Azalt</button>
      </div> */}
      <UserList />
    </>
  )
}

export default App
