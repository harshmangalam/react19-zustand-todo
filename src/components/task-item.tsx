import { Task } from "../types/todo";
import { DeleteTask } from "./delete-task";
import { TaskStatus } from "./task-status";

export function TaskItem({ task }: { task: Task }) {
  return (
    <li>
      <article className="card card-bordered">
        <div className="card-body relative">
          <div className="card-title">{task.title}</div>
          <TaskStatus task={task} />
          <div className="absolute right-4 top-4">
            <DeleteTask id={task.id} />
          </div>
        </div>
      </article>
    </li>
  );
}
