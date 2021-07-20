import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  byId: {},
};

export const addTodo = createAction("todos/create");

export const getTodos = (state) => Object.values(state.todos.byId);

export const todosReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.byId[action.payload.id] = action.payload;
  });
});
