import { useState, useEffect } from "react";

function AppTodo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;

    setTodos((current) => [todo, ...todos]);
    setTodo("");
  };
  return (
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={todo}
          onChange={onChange}
          placeholder="Write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AppTodo;
