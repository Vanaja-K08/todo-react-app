import { useState } from "react";

function ToDoItem({ todo ,onEdit,onDelete,onToggle}) {

    const [editMode, setEditMode] = useState(false);
    const [text, setText] = useState(todo.text);

      const saveEdit = () => {
    onEdit(todo.id, text);
    setEditMode(false);
  };

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {editMode ? (
                <input
                    className="form-control me-2"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            ) : (
                <span
                    onClick={() => onToggle(todo.id)}
                    style={{
                        cursor: "pointer",
                        textDecoration: todo.completed ? "line-through" : "none",
                        color: todo.completed ? "gray" : "black",
                    }}
                >
                    {todo.text}
                </span>
            )}

            <div>
                {editMode ? (
                    <button className="btn btn-success btn-sm me-2" onClick={saveEdit}>
                        Save
                    </button>
                ) : (
                    <button
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => setEditMode(true)}
                    >
                        Edit
                    </button>
                )}

                <button
                    className="btn btn-danger btn-sm"  onClick={() => onDelete(todo.id)}
                >
                    Delete
                </button>
            </div>
        </li>
    )
}

export default ToDoItem;