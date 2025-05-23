import { useState } from "react";
import "./ToDoList.css";

import Title from "./Title";
import Form from "./Form";
import ToDo from "./ToDo";

const ToDoList = () => {
  const [todos, setToDos] = useState([
    { id: 1, text: "Learn React", completed: false },
  ]);

  const addToDo = (text) => {
    setToDos((prevState) => {
      return [{ id: Date.now(), text: text, completed: false }, ...prevState];
    });
  };

  const deleteToDo = (id) => {
    setToDos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  const editToDo = (id) => {
    const newText = prompt("Update this ToDo");
    if (newText === null) return;

    setToDos((prevState) => {
      return prevState.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo,
      );
    });
  };

  return (
    <div>
      <Title title="ToDo List" />
      <Form addToDo={addToDo} deleteToDo={deleteToDo} />
      {todos.length > 0 ? (
        todos.map((todo) => (
          <ToDo
            key={todo.id}
            todo={todo}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        ))
      ) : (
        <p>You are free</p>
      )}
    </div>
  );
};

export default ToDoList;
