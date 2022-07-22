import * as React from "react";
import { TodoForm } from "./components/todo-form/todo-form";
import { TodoList } from "./components/todo-list/todo-list";
import { TodoResults } from "./components/todo-results/todo-results";
import { TodosContext } from "./todo-context";
import "./index.css";

export const App = () => {
  const [todos, setTodos] = React.useState([]);



  const todosTemplate = [
  {
    id: 0,
    label: "Fix an ability to display all tasks",
    checked: false
  },
  {
    id: 1,
    label: "Fix a layout, checkboxes should be listed in a column",
    checked: false
  },
  {
    id: 2,
    label: "Fix an ability to add a new task",
    checked: false
  },
  {
    id: 3,
    label: "Fix an ability to toggle a task",
    checked: false
  },
  {
    id: 4,
    label: "Fix an ability to delete a task",
    checked: false
  },
  {
    id: 5,
    label: "Fix an ability to count completed tasks",
    checked: true
  }
];

const handleAddTodo = (title) => {
  setTodos([...todos, { id: todos.length, label: title, checked: false }]);
};

  React.useEffect(() => {
    setTodos(todosTemplate);

  }, []);

  const toggleCheck = (id) => {
    // Fix an ability to toggle task
    setTodos(function(prev){
      return [
        ...prev.slice(0, id),
        {...prev[id], checked: !prev[id].checked},
        ...prev.slice(id + 1)

      ]
    })
  };

  const handleDelete = (id) => {
    // Fix an ability to delete task
    setTodos(function(prev){
      const ArrayNew = prev.filter(function(item){
        return item.id !== id
      }
      )
      return ArrayNew
    }
    )
  };

  return (
    <div className="root">
      <TodosContext.Provider value={{ todos }}>
        <TodoList check={toggleCheck} delete={handleDelete}/>
        <TodoResults />
        <TodoForm add={handleAddTodo}/>
      </TodosContext.Provider>
    </div>
  );
};
