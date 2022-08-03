import AddDuration from './AddDuration';
import AddTask from './AddTask';
import Grid from './Grid';
import Tasks from './Tasks';
import TimeRange from './TimeRange';
import TimeTable from './TimeTable';

export default function GanttChart() {
  return (
    <div>
      <Grid>
        <Tasks />
        <TimeTable />
      </Grid>
      <AddTask />
      <AddDuration />
      <TimeRange />
    </div>
  );
}
