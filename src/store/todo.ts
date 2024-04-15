import { create } from "zustand";
import { Task } from "../types/todo";
import shortid from "shortid";
interface TodoAction {
  addTask: (title: string) => void;
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
    addTask: (title: string) => {
      const task: Task = {
        title,
        createdAt: new Date(),
        id: shortid(),
        status: "init",
      };
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
