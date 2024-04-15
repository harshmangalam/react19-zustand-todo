import { create } from "zustand";
import { Task } from "../types/todo";

interface TodoAction {
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  clearTasks: () => void;
}
interface TodoState {
  tasks: Task[];
  actions: TodoAction;
}
export const useTodoStore = create<TodoState>((set) => ({
  tasks: [],
  actions: {
    addTask: (task: Task) => {
      set((state) => ({ tasks: [...state.tasks, task] }));
    },
    removeTask: (id) => {
      set((state) => {
        const tasks = state.tasks.filter((task) => task.id !== id);
        return {
          tasks,
        };
      });
    },
    clearTasks: () => {
      set(() => ({ tasks: [] }));
    },
  },
}));

export const useTasks = () => useTodoStore((state) => state.tasks);
export const useTodoActions = () => useTodoStore((state) => state.actions);
