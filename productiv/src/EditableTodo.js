import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */
//  /TODO: create is edit state
function EditableTodo({ todo, update, remove }) {

  /** Toggle if this is being edited */
  function toggleEdit() {
    //update the state of the todo to isEditing=true
    todo.isEditing = true;
    update(todo.id);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  //TODO: how to destructure?
  function handleSave(formData) {
    todo.title = formData.title;
    todo.description = formData.description;
    todo.priority = formData.priority;
    todo.isEditing = false;
    update(todo);
  }

  return (
    <div className="EditableTodo">

      {todo.isEditing ?
        <TodoForm initialFormData={todo} handleSave={handleSave}/> :
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className="EditableTodo-toggle btn-link btn btn-sm"
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className="EditableTodo-delBtn btn-link btn btn-sm text-danger"
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo id={todo.id}
                title={todo.title}
                description={todo.description}
                priority={todo.priority} />
        </div>
      }
    </div>
  );
}

export default EditableTodo;
