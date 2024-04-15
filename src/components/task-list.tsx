import { useTasks } from "../store/todo";
import { TaskItem } from "./task-item";

export function TaskList() {
  const tasks = useTasks();
  return (
    <ul className="grid grid-cols-1 gap-3">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}
