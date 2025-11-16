import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import { useTodos } from '../hooks/useTodos';

export default function Home() {
  const { todos, add, toggle, remove } = useTodos();

  return (
    <div className="container">
      <h2>Todo List</h2>

      <AddTodoForm onAdd={add} />

      <TodoList todos={todos} onToggle={toggle} onDelete={remove} />
    </div>
  );
}
