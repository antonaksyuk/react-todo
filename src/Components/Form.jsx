import { useState } from "react";
import PropTypes from "prop-types";

const Form = ({ addToDo }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      setError("Enter any ToDo");
    } else {
      setError("");
      addToDo(text.trim());
      setText("");
    }
  };

  const changeHandler = (e) => {
    setText(e.target.value);
    if (error) {
      setError("");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Add ToDo..."
        value={text}
        onChange={changeHandler}
      />
      <button type="submit">add</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};

Form.propTypes = {
  addToDo: PropTypes.func.isRequired,
};

export default Form;
