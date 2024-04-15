import React from "react";

export function CreateTodo() {
  const modalRef = React.useRef<HTMLDialogElement>(null);

  function handleOpenModal() {
    modalRef.current?.showModal();
  }

  function handleCreateTodo(formData: FormData) {
    console.log(e);
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
            <form action={handleCreateTodo}>
              <textarea
                className="textarea textarea-bordered textarea-primary"
                rows={4}
              />
              <button type="submit">Create</button>
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
