import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { clearAll, createTodo, setTodo } from "../redux/actione/action";
import TodoItem from "./TodoItem";

function TodoList() {
  const dispatch = useDispatch();
  const { todos, todo } = useSelector(
    (state) => ({ todos: state?.todoReducer, todo: state?.todo }),
    shallowEqual
  );

  function addTodo(e) {
    e?.preventDefault();
    dispatch(createTodo(todo));
    dispatch(setTodo(""));
  }

  const onChange = (e) => dispatch(setTodo(e.target.value));

  return (
    <div className="todo-list">
      <div>
        <div id="header">
          <h1 id="title">
            Just do it.
          </h1>
        </div>

        {/* <div className="total-todo">Total todo: {todos.length}</div> */}

      </div>
      <form onSubmit={addTodo} className="add-todo">
        <input
          className="todo-input"
          placeholder="Add a task."
          value={todo}
          onChange={onChange}
        />
        <button className="todo-btn" disabled={!todo}>
          I Got This!
        </button>
      </form>

      <ul>
        {todos?.map((todo) => (
          <TodoItem key={todo?.id} todo={todo} />
        ))}
      </ul>

      <div className="clear-all">
        {!!todos.length && (
          <button onClick={() => dispatch(clearAll())}>Clear All</button>
        )}
      </div>
    </div>
  );
}

export default TodoList;
