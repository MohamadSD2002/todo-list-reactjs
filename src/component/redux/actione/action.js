import { createAction } from '@reduxjs/toolkit'

export const createTodo = createAction('ADD_TODO')
export const deleteTodo = createAction('REMOVE_TODO')
export const editTodo = createAction('EDIT_TODO')
export const setTodo = createAction('SET_TODO')
export const clearAll= createAction('CLEAR_ALL_TODOS')

