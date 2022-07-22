import * as React from "react";
import { TodosContext } from "../../todo-context";
import "./todo-results.css";

export const TodoResults = () => {

  const { todos } = React.useContext(TodosContext);

  const calculateChecked = () => {
    // Fix an ability to calculate completed tasks
    var checked = 0;
    todos.forEach(function(todo){
      if(todo.checked){
        checked++;
      }
    })
    return checked;
  };

  return (
    <div className="todo-results">
      Done ✅ :  
      {  }  {calculateChecked()}
    </div>
  );
};
