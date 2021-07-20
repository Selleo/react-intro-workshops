import { createReducer, createAction } from "@reduxjs/toolkit";

const initialState = {
  byId: {},
};

export const addTodo = createAction("todos/create");
export const toggleArchiveTodo = createAction("todos/toggleArchiveTodo");
export const toggleCompleteTodo = createAction("todos/toggleCompleteTodo");
export const removeTodo = createAction("todos/removeTodo");
export const fetchTodos = createAction("todos/fetchTodo");

export const getTodos = (state) => Object.values(state.todos.byId);

export const todosReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTodo, (state, action) => {
    state.byId[action.payload.id] = action.payload;
  });

  builder.addCase(toggleArchiveTodo, (state, action) => {
    const targetTodo = state.byId[action.payload];

    state.byId[action.payload].isArchived = !targetTodo.isArchived;
  });

  builder.addCase(toggleCompleteTodo, (state, action) => {
    const targetTodo = state.byId[action.payload];

    state.byId[action.payload].isDone = !targetTodo.isDone;
  });

  builder.addCase(removeTodo, (state, action) => {
    delete state.byId[action.payload];
  });

  builder.addCase(fetchTodos, (state, action) => {
    state.byId = action.payload;
  });
});
