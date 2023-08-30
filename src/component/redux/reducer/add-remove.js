import { createReducer } from "@reduxjs/toolkit";

function generateId(todos) {
  return todos.length ? todos[todos.length - 1].id + 1 : 1;
}

export const todoReducer = createReducer([], {
  ADD_TODO: (state, action) => [
    ...state,
    { id: generateId(state), title: action.payload },
  ],
  REMOVE_TODO: (state, action) =>
    state?.filter((todo) => todo.id !== action.payload),
  EDIT_TODO: (state, action) =>
    state?.map((todo) =>
      todo.id == action.payload.id ? action.payload : todo
    ),
    CLEAR_ALL_TODOS:()=>[]
});
