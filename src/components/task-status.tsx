import { Task } from "../types/todo";

type TaskStatusProps = {
  task: Pick<Task, "status">;
};
export function TaskStatus({ task }: TaskStatusProps) {
  const taskMap = {
    init: {
      name: "Initialized",
      color: "badge-primary",
    },
    progress: {
      name: "In progress",
      color: "badge-success",
    },
    completed: {
      name: "Completed",
      color: "badge-error",
    },
  };
  return (
    <div className={`badge ${taskMap[task.status].color}`}>
      {taskMap[task.status].name}
    </div>
  );
}
