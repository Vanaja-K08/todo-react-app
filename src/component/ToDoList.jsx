import ToDoItem from "./ToDoItem";

function ToDoList({todos}){

    if(todos.length === 0){
        return(
            <p className="text-center">No task added</p>
        )
    }
return (
    <ul className="list-group">
      {todos.map((todo) => (
        <ToDoItem
          todo={todo}
        />
      ))}
    </ul>
  );
}

export default ToDoList;