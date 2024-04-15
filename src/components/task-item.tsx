import { Task } from "../types/todo";
import { TaskStatus } from "./task-status";

export function TaskItem({ task }: { task: Task }) {
  return (
    <li>
      <article className="card card-bordered">
        <div className="card-body">
          <div className="card-title">{task.title}</div>
          <TaskStatus task={task} />
        </div>
      </article>
    </li>
  );
}
