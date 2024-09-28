import React from "react";

const TodoInput = ({ handlerAddTodos, setTodoValue, todoValue }) => {
  return (
    <header>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Enter Todo..."
      />
      {todoValue && (
        <button
          onClick={() => {
            handlerAddTodos(todoValue);
            setTodoValue("");
          }}
        >
          Add
        </button>
      )}
    </header>
  );
};

export default TodoInput;
