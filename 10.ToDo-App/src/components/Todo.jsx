import React, { useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { TiEdit } from "react-icons/ti";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import "../css/todo.css";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;

  const [editable, setEditable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);
  const [isRemoving, setIsRemoving] = useState(false);

  const removeTodo = () => {
    setIsRemoving(true);
    setTimeout(() => onRemoveTodo(id), 400); // 0.4 saniyelik animasyon süresi
  };

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditable(false);
  };

  return (
    <div className={`todo ${isRemoving ? "todo-removing" : ""}`}>
      <div>
        {editable ? (
          <input
            style={{ width: "400px" }}
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input"
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoMdRemoveCircleOutline
          className="todo-icon-remove"
          onClick={removeTodo}
        />
        {editable ? (
          <IoMdCheckmarkCircleOutline
            className="todo-icon-check"
            onClick={updateTodo}
          />
        ) : (
          <TiEdit
            className="todo-icon-edit"
            onClick={() => setEditable(true)}
          />
        )}
      </div>
    </div>
  );
}

export default Todo;
