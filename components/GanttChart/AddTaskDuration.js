import { useState } from 'react';

export default function AddTaskDuration({ tasks }) {
  const [task, setTask] = useState('');
  const [startDate, setStartDate] = useState('2022-01-01');
  const [endDate, setEndDate] = useState('2022-01-03');

  function onChange(e) {
    const { value, id } = e.target;

    if (id === 'select-task') {
      setTask(value);
    }
    if (id === 'start-date') {
      setStartDate(value);
    }
    if (id === 'end-date') {
      setEndDate(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form id="add-task-duration" onSubmit={handleSubmit}>
      <h2>Add task duration</h2>
      <fieldset id="task">
        <label htmlFor="select-task">Which task?</label>
        <select
          id="select-task"
          name="select-task"
          onChange={onChange}
          value={task}
        >
          {tasks &&
            tasks.map((tsk) => (
              <option key={tsk?.id} value={tsk?.id}>
                {tsk?.name}
              </option>
            ))}
        </select>
      </fieldset>
      <fieldset id="date">
        <label htmlFor="start-date">Start date:</label>
        <input
          type="date"
          id="start-date"
          name="start-date"
          value={startDate}
          min="2022-01-01"
          max="2050-12-31"
          onChange={onChange}
        />
        <label htmlFor="end-date">End date:</label>
        <input
          type="date"
          id="end-date"
          name="end-date"
          value={endDate}
          min="2022-01-01"
          max="2050-12-31"
          onChange={onChange}
        />
      </fieldset>
      <button type="submit">Add</button>
      <style jsx>{`
        #add-task-duration {
          margin-right: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
        }

        #date > label:nth-child(3) {
          margin-left: 10px;
        }

        h2 {
          font-size: 1.5rem;
        }

        /* form {
          display: grid;
          grid-template-rows: repeat(4, 1fr);
          align-items: center;
        } */

        form > * {
          display: flex;
          align-items: center;
          margin: 1rem 0.3rem;
        }

        fieldset {
          border: none;
          padding: 0.5rem;
        }

        fieldset label {
          margin-right: 10px;
        }

        select {
          font-size: 1.2rem;
          padding: 0.2rem 0.2rem;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
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
