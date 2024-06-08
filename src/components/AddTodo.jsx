import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { Button } from "@mui/material";

function AddTodo() {
  const [input, setInput] = React.useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <>
      <form
        onSubmit={addTodoHandler}
        className="form-control p-5 col-12 border-0 mt-5"
      >
        <div className="mb-3 col-12 d-flex row justify-content-around">
          <div className="col-8">
            <input
              type="text"
              className="form-control border-2"
              id="todo"
              name="todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <Button type="submit" variant="contained" className="col-2">
            Add Todo
          </Button>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
