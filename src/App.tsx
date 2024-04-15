import { CreateTodo } from "./components/create-todo";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <main className="py-20 max-w-2xl mx-auto">
        <CreateTodo />
      </main>
    </div>
  );
}

export default App;
