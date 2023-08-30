import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo } from "../redux/actione/action";

function TodoItem({ todo }) {
  const [box, setBox] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editinput, setEditinput] = useState(todo.title);

  const dispatch = useDispatch();
  function removeTodo(id) {
    dispatch(deleteTodo(id));
  }

  const submit = (e) => {
    e?.preventDefault();
    setEdit((edit) => !edit);
    if (edit) {
      dispatch(editTodo({ id: todo.id, title: editinput }));
    }
  };
  const input = (
    <input
      className="edit-input"
      type="text"
      value={editinput}
      onChange={({ target: { value } }) => setEditinput(value)}
      ref={(node) => node && node?.focus()}
    />
  );
  const text = (
    <div
      onDoubleClick={() => setEdit((edit) => !edit)}
      onMouseOver={() => setBox(true)}
      onMouseLeave={() => setBox(false)}
    >
      <div className="text-todo">{todo.title}</div>
      {box && <div className="box-todo">{todo.title}</div>}
    </div>
  );
  return (
    <form className="todo" onSubmit={submit}>
      <div>
        <li className="li-todo">{edit ? input : text}</li>
      </div>
      <div>
        <button className="submit-edit" onClick={submit}>
          {edit ? "Submit" : "Edit"}
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          Remove
        </button>
      </div>
    </form>
  );
}
export default TodoItem;
