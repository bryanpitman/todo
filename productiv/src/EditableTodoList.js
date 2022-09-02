import React from "react";
import EditableTodo from "./EditableTodo";
import { v4 as uuid } from "uuid";


/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, update, remove }) {

  //loop over todos array
  //instantial teach todo as EditableTodo

  return (
    <div id={uuid()}>
      {todos.map(t => <EditableTodo key={t.id} todo={t} update={update} remove={remove}/>)}
    </div>
  );
}

export default EditableTodoList;
