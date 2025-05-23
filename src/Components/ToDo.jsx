import "./ToDo.css";

const ToDo = ({ todo, deleteToDo, editToDo }) => {
  return (
    <div className="todo">
      <div>{todo.text}</div>
      <div className="buttons">
        <button onClick={() => editToDo(todo.id)} type="button">
          Edit
        </button>
        <button onClick={() => deleteToDo(todo.id)} type="button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ToDo;
