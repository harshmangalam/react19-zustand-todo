export type Task = {
  id: string;
  status: "init" | "progress" | "completed";
  title: string;
  createdAt: Date;
};
