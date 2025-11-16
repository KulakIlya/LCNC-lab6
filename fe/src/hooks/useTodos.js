import { useEffect, useState } from 'react';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from '../services/todoService';

export function useTodos() {
  const [todos, setTodos] = useState([]);

  async function load() {
    return getTodos();
  }

  async function add(text) {
    const newTodo = await createTodo(text);
    setTodos([...todos, newTodo]);
  }

  async function toggle(id) {
    const todo = todos.find((t) => t.id === id);
    const updated = await updateTodo(id, { completed: !todo.completed });

    setTodos(todos.map((t) => (t.id === id ? updated : t)));
  }

  async function remove(id) {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t.id !== id));
  }

  useEffect(() => {
    const fetch = async () => {
      const data = await load();
      setTodos(data);
    };

    fetch();
  }, []);

  return { todos, add, toggle, remove };
}
