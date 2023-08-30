import { combineReducers } from "@reduxjs/toolkit"
import { todoReducer } from "./add-remove"
import { todo } from "./todo"

const reducer = combineReducers({
  todoReducer,
  todo
})

export default reducer
