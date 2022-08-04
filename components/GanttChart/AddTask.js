import { useState } from 'react';

export default function AddTask({ setTasks }) {
  const [task, setTask] = useState('');

  function onChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTaskName = e.target.elements[0].value;

    setTasks((prevState) => {
      const newState = prevState;
      // find largest task number, add 1 for new task - else could end up with tasks with same id
      const maxIdVal = prevState.reduce(function (a, b) {
        return Math.max(a, b.id);
      }, -Infinity);

      // create new task
      newState.push({ id: maxIdVal + 1, name: newTaskName });

      return [...newState];
    });
    setTask('');
  }

  return (
    <form id="add-task" onSubmit={handleSubmit}>
      <h2>Add task</h2>
      <input value={task} onChange={onChange} placeholder="add task name" />
      <button type="submit">Add</button>
      <style jsx>{`
        #add-task {
          margin-right: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
        }

        h2 {
          font-size: 1.5rem;
        }

        form > * {
          display: flex;
          align-items: center;
          margin: 1rem 0.3rem;
        }

        input {
          height: var(--cell-height);
        }

        button {
          width: 70px;
          height: 50px;
          color: white;
          background: var(--color-secondary);
          font-weight: 600;
          font-size: 1.1rem;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
          padding: 0.5rem 1rem;
          margin: 0.5rem;
          border: 0;
          border-radius: 5px;
          transition: all 0.3s ease;
        }

        button:hover,
        button:focus {
          opacity: 0.85;
        }
      `}</style>
    </form>
  );
}
