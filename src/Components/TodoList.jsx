import React from "react";
import TodoCards from "./TodoCards";

const TodoList = ({ todos, handlerDeleteTodo, handlerEditTodo }) => {
  return (
    <ul className="main">
      {todos.map((todo, index) => {
        return (
          <TodoCards
            key={index}
            index={index}
            handlerDeleteTodo={handlerDeleteTodo}
            handlerEditTodo={handlerEditTodo}
          >
            <p>{todo}</p>
          </TodoCards>
        );
      })}
    </ul>
  );
};

export default TodoList;
