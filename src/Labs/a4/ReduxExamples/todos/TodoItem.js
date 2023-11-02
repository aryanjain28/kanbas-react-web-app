import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li key={todo.id} className="list-group-item">
      {todo.title}
      <button
        className="btn btn-info mx-2"
        onClick={() => dispatch(setTodo(todo))}
      >
        Edit
      </button>
      <button
        className="btn btn-danger mx-1"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </button>
    </li>
  );
}
export default TodoItem;
