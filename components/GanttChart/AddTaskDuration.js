import { useState } from 'react';
import AddButton from './AddButton';

export default function AddTaskDuration({ tasks, setTaskDurations }) {
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
    if (task === '') return;
    const timeStamp = Date.now();
    const newTaskDuration = {
      id: timeStamp,
      start: startDate,
      end: endDate,
      task: parseInt(task),
    };

    setTaskDurations((prevState) => {
      const newState = prevState;
      return [...newState, newTaskDuration];
    });
  }

  return (
    <form id="add-task-duration" onSubmit={handleSubmit}>
      <h2>Add Task Duration</h2>
      <div className="inner-form-container">
        <fieldset id="task" style={{ paddingLeft: '0px' }}>
          <label htmlFor="select-task">Which task?</label>
          <select
            id="select-task"
            name="select-task"
            onChange={onChange}
            value={task}
          >
            <option disabled defaultValue value="">
              select a task
            </option>
            {tasks &&
              tasks.map((tsk) => (
                <option key={tsk?.id} value={tsk?.id}>
                  {tsk?.name}
                </option>
              ))}
          </select>
        </fieldset>
        <fieldset id="date">
          <div className="fieldset-container">
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
          </div>
          <div className="fieldset-container" style={{ marginLeft: '10px' }}>
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
          </div>
        </fieldset>
      </div>
      <AddButton />
      <style jsx>{`
        #add-task-duration {
          margin-right: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
        }

        h2 {
          font-size: 1.5rem;
        }

        form {
          padding: 1rem;
        }

        form > * {
          display: flex;
          align-items: center;
        }

        .fieldset-container {
          display: flex;
          align-items: center;

          flex-direction: row;
          flex-wrap: wrap;
        }

        fieldset {
          display: flex;
          align-items: center;
          border: none;
          padding: 5px 7px;
        }

        fieldset label {
          margin-right: 10px;
        }

        input[type='text'],
        select {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
          padding: 5px 7px;
          margin: 1rem 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

        input[type='date'] {
          font-family: 'Montserrat', sans-serif;
          padding: 10px 5px;
          border: 1px solid #ededed;
          border-radius: 5px;
          transition: 0.2s ease-out;
        }
      `}</style>
    </form>
  );
}
