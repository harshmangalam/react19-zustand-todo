import { CreateTodo } from "./components/create-todo";
import { Navbar } from "./components/navbar";
import { TaskList } from "./components/task-list";

function App() {
  return (
    <div>
      <Navbar />
      <main className="py-20 max-w-2xl mx-auto">
        <CreateTodo />
        <div className="mt-8">
          <TaskList />
        </div>
      </main>
    </div>
  );
}

export default App;
