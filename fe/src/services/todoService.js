const API_URL = 'http://localhost:3000/api/todos';

export async function getTodos() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function createTodo(text) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });
  return res.json();
}

export async function updateTodo(id, updates) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });
  return res.json();
}

export async function deleteTodo(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}
