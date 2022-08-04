import { useEffect, useState } from 'react';
import AddTaskDuration from './AddTaskDuration';
import AddTask from './AddTask';
import Grid from './Grid';
import Settings from './Settings';
import Tasks from './Tasks';
import TimeRange from './TimeRange';
import TimeTable from './TimeTable';
import { client } from '../../utils/fetchWrapper';

export default function GanttChart() {
  const [tasks, setTasks] = useState(null);
  const [taskDurations, setTaskDurations] = useState(null);
  const [timeRange, setTimeRange] = useState({
    fromSelectMonth: 0,
    fromSelectYear: '2022',
    toSelectMonth: 1,
    toSelectYear: '2022',
  });

  // console.log('Gannt Chart render', { tasks }, { taskDurations });
  useEffect(() => {
    client('data.json').then(
      (data) => {
        setTasks(data?.tasks);
        setTaskDurations(data?.taskDurations);
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
  }, []);

  return (
    <div id="gantt-container">
      <Grid>
        <Tasks
          tasks={tasks}
          setTasks={setTasks}
          setTaskDurations={setTaskDurations}
        />
        <TimeTable
          timeRange={timeRange}
          tasks={tasks}
          taskDurations={taskDurations}
          setTaskDurations={setTaskDurations}
        />
      </Grid>
      <Settings>
        <AddTask setTasks={setTasks} />
        <AddTaskDuration tasks={tasks} setTaskDurations={setTaskDurations} />
        <TimeRange timeRange={timeRange} setTimeRange={setTimeRange} />
      </Settings>
      <style jsx>{`
        #gantt-container {
          --color-text: #272a2e;
          --color-primary-dark: #0195e4;
          --color-primary-light: #9ddcff;
          --color-secondary: #4be35a;
          --color-tertiary: #f7f7f7;
          --color-orange: #ef5350;
          --color-outline: #e9eaeb;
          --border-radius: 5px;
          --cell-height: 40px;
          padding: 1rem;
        }

        input {
          font-family: 'Noto Sans Display', sans-serif;
          height: 100%;
          padding: 10px 5px;
          border: 1px solid var(--color-tertiary);
          border-radius: var(--border-radius);
          transition: 0.2s ease-out;
        }

        input:focus {
          outline-color: var(--color-primary-dark);
        }

        button:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
