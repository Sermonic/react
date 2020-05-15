import React, { useContext, memo } from "react";
import useToggleState from "./hooks/useToggleState";
import { DispatchContext } from "./contexts/todos.context";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditTodoForm from "./EditTodoForm";

function Todo({ id, task, completed }) {
  const [isEditing, toggle] = useToggleState(false);
  const dispatch = useContext(DispatchContext);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox
            checked={completed}
            onClick={() => dispatch({ type: "TOGGLE", id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete"
              onClick={() => dispatch({ type: "REMOVE", id })}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(Todo);
