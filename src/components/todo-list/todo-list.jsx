import * as React from "react";
import { Checkbox } from "../checkbox/checkbox";
import { TodosContext } from "../../todo-context";
import "./todo-list.css";

export const TodoList = (props) => {
  const { todos, setTodos } = React.useContext(TodosContext);




  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      props.check(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">To Do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              key={todoItem.id}
              checked={todoItem.checked}
              label={todoItem.label}
              onClick={() => props.check(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => props.delete(todoItem.id)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};
