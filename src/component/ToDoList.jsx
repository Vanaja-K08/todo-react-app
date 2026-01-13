import ToDoItem from "./ToDoItem";

function ToDoList({todos,onEdit,onDelete,onToggle}){

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
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
}

export default ToDoList;