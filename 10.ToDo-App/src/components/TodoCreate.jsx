import React from 'react'
import '../css/todoCreate.css'

function TodoCreate() {
  return (

    <>
        <div className='todo-create'>
            <input className='todo-input' type="text" placeholder='ToDo giriniz.'/>
            <button className='todo-create-button'>ToDo Oluştur</button>
        </div>
    </>

  )
}

export default TodoCreate