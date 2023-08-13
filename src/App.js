import React, { useState } from "react";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add To-do</button>
      <button>Clear Completed To-do</button>
      <div>Left to do</div>
    </>
  );
}

export default App;
