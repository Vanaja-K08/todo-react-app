import { useState } from 'react';
import './App.css'
import Header from './component/Header'
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap
import ToDoList from './component/ToDoList';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  const addTodo = () => {
    if (task.trim() === "") {
      setError("Task cannot be empty!");
      return;
    }
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task,
        completed: false,
      },
    ]);

    setTask("");
    setError("");
  };
  return (
    <div className="container mt-5 bg-primar">
      <Header />
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addTodo}>
          Add
        </button>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}

      <ToDoList
        todos={todos}
      />
    </div>
  );
}

export default App
