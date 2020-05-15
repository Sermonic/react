import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import { TodosContext } from "./contexts/todos.context";
import { TextField } from "@material-ui/core";

function EditTodoForm({ id, task, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);
  const { dispatch } = useContext(TodosContext);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch({ type: "EDIT", id, newTask: value });
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
