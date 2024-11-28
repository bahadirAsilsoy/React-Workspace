import React from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { TiEdit } from "react-icons/ti";
import "../css/todo.css";
import "../css/todoCreate.css";

function Todo({ todo, onRemoveTodo }) {
  const { id, content } = todo;

  const removeTodo = () => {
    onRemoveTodo(id);
  }

  return (
    <>
      <div className="todo">

        <div>{content}</div>

        <div>
          <IoMdRemoveCircleOutline className="todo-icon-remove" onClick={removeTodo}/>
          <TiEdit className="todo-icon-edit" />
        </div>

      </div>
    </>
  );
}

export default Todo;
