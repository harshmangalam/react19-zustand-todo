"use client";

import React from "react";
import { TextInput } from "./ui/input";
import { useTodoActions } from "../store/todo";

export function CreateTodo() {
  const modalRef = React.useRef<HTMLDialogElement>(null);
  const { addTask } = useTodoActions();

  function handleOpenModal() {
    modalRef.current?.showModal();
  }

  function handleCreateTodo(formData: FormData) {
    const title = formData.get("title")?.toString();
    if (!title) {
      return;
    }
    addTask(title);
  }
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={handleOpenModal}>
        Create Todo
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Create Todo</h3>
          <div>
            {/* @ts-expect-error Action type issues  */}
            <form action={handleCreateTodo} className="flex flex-col gap-4">
              <TextInput name="title" id="title" label="Title" />
              <button className="btn btn-primary btn-block" type="submit">
                Create
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
