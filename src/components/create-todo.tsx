"use client";

import React from "react";
import { TextInput } from "./ui/input";
import { useTodoActions } from "../store/todo";
import AddIcon from "../assets/icons/plus.svg?react";
import { Textarea } from "./ui/textarea";

export function CreateTodo() {
  const modalRef = React.useRef<HTMLDialogElement>(null);
  const { addTask } = useTodoActions();

  function handleOpenModal() {
    modalRef.current?.showModal();
  }

  function handleCreateTodo(formData: FormData) {
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    if (!title || !description) {
      return;
    }
    addTask(title, description);
    modalRef.current?.close();
  }
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div className="flex justify-end">
        <button className="btn" onClick={handleOpenModal}>
          <AddIcon className="w-5 h-5 stroke-2" />
          Create Todo
        </button>
      </div>
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
              <TextInput required name="title" id="title" label="Title" />
              <Textarea
                required
                name="description"
                id="description"
                label="Description"
              />
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
