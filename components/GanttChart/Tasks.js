export default function Tasks({ tasks, setTasks, setTaskDurations }) {
  function onChange(e) {
    const { value } = e.target;
    const idNum = parseInt(e.target.getAttribute('data-task-id'));

    let newTasks = tasks.filter((task) => task.id !== idNum);
    newTasks.push({ id: idNum, name: value });
    newTasks = newTasks.sort((a, b) => a.id - b.id);
    // update original / make API request to update data on backend
    setTasks(newTasks);
  }

  function handleDelete(e) {
    const idNum = parseInt(e.target.getAttribute('data-task-id'));
    const newTasks = tasks.filter((task) => task.id !== idNum);
    // update original / make API request to update data on backend
    setTasks(newTasks);

    setTaskDurations((prevState) => {
      // delete any taskDurations associated with the task
      const newTaskDurations = prevState.filter(
        (taskDuration) => taskDuration.task !== idNum
      );
      return newTaskDurations;
    });
  }

  return (
    <div id="gantt-grid-container__tasks">
      <div className="gantt-task-row"></div>
      <div className="gantt-task-row"></div>
      <div className="gantt-task-row"></div>
      {tasks &&
        tasks.map((tsk) => (
          <div key={tsk?.id} className="gantt-task-row">
            <input
              data-task-id={tsk?.id}
              value={tsk?.name}
              onChange={onChange}
            />
            <button type="button" data-task-id={tsk?.id} onClick={handleDelete}>
              ✕
            </button>
          </div>
        ))}
      <style jsx>{`
        #gantt-grid-container__tasks {
          outline: 1px solid var(--color-outline);
        }

        .gantt-task-row {
          display: flex;
          padding: 2px 0;
          outline: 1px solid var(--color-outline);
          text-align: center;
          height: var(--cell-height);
          border: none;
        }

        input {
          width: 127px;
          border: none;
          outline: none;
          background: none;
        }

        button {
          color: var(--color-orange);
          background: none;
          border-radius: 5px;
          border: none;
          transition: all 0.2s ease;
        }

        button:focus {
          outline: none;
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
}
