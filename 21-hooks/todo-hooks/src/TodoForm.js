import React from "react";
import useInputState from "./hooks/useInputState";
import { Paper } from "@material-ui/core";
import { TextField } from "@material-ui/core";

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");

  return (
    <Paper>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
}

export default TodoForm;
