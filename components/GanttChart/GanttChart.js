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
  const [data, setData] = useState(null);
  const [timeRange, setTimeRange] = useState({
    fromSelectMonth: 0,
    fromSelectYear: '2022',
    toSelectMonth: 1,
    toSelectYear: '2022',
  });

  useEffect(() => {
    client('data.json').then(
      (data) => {
        setData(data);
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
  }, []);

  return (
    <div id="gantt-container">
      <Grid>
        <Tasks />
        <TimeTable />
      </Grid>
      <Settings>
        <AddTask />
        <AddTaskDuration />
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
