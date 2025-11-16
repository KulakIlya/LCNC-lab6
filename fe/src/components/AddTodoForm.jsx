import { useState } from 'react';

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;

    onAdd(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className="add-todo">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
