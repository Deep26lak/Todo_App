import React from "react";

const TodoCards = ({ children, index, handlerDeleteTodo, handlerEditTodo }) => {
  return (
    <div>
      <li className="todoItem">
        {children}
        <div className="actionsContainer">
          <button>
            <i
              onClick={() => handlerEditTodo(index)}
              className="fa-solid fa-pen-to-square"
            ></i>
          </button>
          <button>
            <i
              className="fa-solid fa-trash-can"
              onClick={() => handlerDeleteTodo(index)}
            ></i>
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoCards;
