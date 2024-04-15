import { useTodoActions } from "../store/todo";
import DeleteIcon from "../assets/icons/delete.svg?react";
export function DeleteTask({ id }: { id: string }) {
  const { removeTask } = useTodoActions();
  function handleDeleteTask(formData: FormData) {
    const id = formData.get("id")?.toString();
    if (!id) {
      return;
    }
    removeTask(id);
  }
  return (
    // @ts-expect-error Action type issues
    <form action={handleDeleteTask}>
      <input type="hidden" name="id" value={id} />
      <button type="submit" className="btn btn-circle btn-error btn-sm">
        <DeleteIcon className="w-5 h-5" />
      </button>
    </form>
  );
}
