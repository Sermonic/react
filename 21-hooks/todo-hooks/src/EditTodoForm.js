import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";
import { TextField } from "@material-ui/core";

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const { editTodo } = useContext(TodosContext);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
