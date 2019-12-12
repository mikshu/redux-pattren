import { ADD_TODO, FILTER_TODO } from "../type";
let nextTodoId = 1;
export const setAddTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  payload: text
});
export const filterTodo = data => ({
  type: FILTER_TODO,
  payload: data
});
