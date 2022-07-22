import * as React from "react";
import { TodosContext } from "../../todo-context";
import "./todo-form.css";

export const TodoForm = (props) => {
  const [task, setTask] = React.useState("");



  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      props.add(task);
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={() => props.add(task)}>
        Add task
      </button>
    </div>
  );
};
