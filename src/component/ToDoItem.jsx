import { useState } from "react";

function ToDoItem({ todo }) {

    const [editMode, setEditMode] = useState(false);
    const [text, setText] = useState(todo.text);
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
                    <button className="btn btn-success btn-sm me-2" >
                        Save
                    </button>
                ) : (
                    <button
                        className="btn btn-warning btn-sm me-2"
                    >
                        Edit
                    </button>
                )}

                <button
                    className="btn btn-danger btn-sm"
                >
                    Delete
                </button>
            </div>
        </li>
    )
}

export default ToDoItem;