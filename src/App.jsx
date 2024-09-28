import { useState } from "react";
import TodoInput from "./Components/TodoInput";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    "Buy groceries",
    "Complete React project",
    "Exercise for 30 minutes",
    "Read a book",
    "Water the plants",
  ]);
  const [todoValue, setTodoValue] = useState("");
  function handlerAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    setTodos(newTodoList);
  }

  function handlerDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
  }
  function handlerEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handlerDeleteTodo(index);
  }

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handlerAddTodos={handlerAddTodos}
      />
      <TodoList
        handlerEditTodo={handlerEditTodo}
        todos={todos}
        handlerDeleteTodo={handlerDeleteTodo}
      />
    </>
  );
}

export default App;
