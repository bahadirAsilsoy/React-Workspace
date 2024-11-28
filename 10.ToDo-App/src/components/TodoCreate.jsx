import React, { useCallback, useState } from "react";
import "../css/todoCreate.css";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    if(!newTodo) return;

    const request ={
        id : Math.floor(Math.random() * 9999999999999),
        content : newTodo
    }
    onCreateTodo(request)
  };

  return (
    <>
      <div className="todo-create">
        <input
          value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
          className="todo-input"
          type="text"
          placeholder="ToDo giriniz."/>
        <button onClick={createTodo} className="todo-create-button">
          ToDo Oluştur
        </button>
      </div>
    </>
  );
}

export default TodoCreate;
