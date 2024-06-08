import { Button, Divider, ListItemButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div className="text-center fw-bold fs-2">Todos</div>
      {todos.map((todo) => (
        <>
          <ListItemButton
            key={todo.id}
            className="d-flex align-items-center justify-content-between col-12 p-4"
          >
            <p className="col-8">{todo.text}</p>
            <Button
              variant="contained"
              className="col-2"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              Delete
            </Button>
          </ListItemButton>
          <Divider className="border-2" />
        </>
      ))}
    </>
  );
}

export default Todos;
