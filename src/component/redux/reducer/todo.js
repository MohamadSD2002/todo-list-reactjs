import { createReducer } from '@reduxjs/toolkit'


export const todo = createReducer('',{
  'SET_TODO': (_, action) => action.payload
})
