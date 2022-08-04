import {
  monthDiff,
  getDaysInMonth,
  getDayOfWeek,
} from '../../utils/dateFunctions';
import { months } from '../../constants';

export default function TimeTable({ timeRange, tasks, taskDurations }) {
  // for dynamic css styling.
  const ganttTimePeriod = {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: 'minmax(30px, 1fr)',
    outline: '1px solid var(--color-outline)',
    textAlign: 'center',
    height: 'var(--cell-height)',
  };

  const ganntTimePeriodSpan = {
    margin: 'auto',
  };

  // creating rows
  const startMonth = new Date(
    parseInt(timeRange.fromSelectYear),
    timeRange.fromSelectMonth
  );
  const endMonth = new Date(
    parseInt(timeRange.toSelectYear),
    timeRange.toSelectMonth
  );
  const numMonths = monthDiff(startMonth, endMonth) + 1;
  let month = new Date(startMonth);

  let monthRows = [];
  let dayRows = [];
  let dayRow = [];
  let weekRows = [];
  let weekRow = [];

  for (let i = 0; i < numMonths; i++) {
    // month rows
    monthRows.push(
      <div key={i} style={ganttTimePeriod}>
        <span style={ganntTimePeriodSpan}>
          {months[month.getMonth()] + ' ' + month.getFullYear()}
        </span>
      </div>
    );

    // add day rows and week rows
    const numDays = getDaysInMonth(month.getFullYear(), month.getMonth() + 1);
    const currYear = month.getFullYear();
    const currMonth = month.getMonth() + 1;

    for (let i = 1; i <= numDays; i++) {
      dayRow.push(
        <div
          key={i}
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: 'minmax(30px, 1fr)',
            outline: '1px solid var(--color-outline)',
            textAlign: 'center',
            height: 'var(--cell-height)',
          }}
        >
          <span>{i}</span>
        </div>
      );

      weekRow.push(
        <div
          key={i}
          style={{
            display: 'grid',
            gridAutoFlow: 'column',
            gridAutoColumns: 'minmax(30px, 1fr)',
            outline: '1px solid var(--color-outline)',
            textAlign: 'center',
            height: 'var(--cell-height)',
          }}
        >
          <span>{getDayOfWeek(currYear, currMonth - 1, i - 1)}</span>
        </div>
      );
    }
    dayRows.push(
      <div key={i} style={ganttTimePeriod}>
        {dayRow}
      </div>
    );

    weekRows.push(
      <div key={i} style={ganttTimePeriod}>
        {weekRow}
      </div>
    );

    dayRow = [];
    weekRow = [];

    month.setMonth(month.getMonth() + 1);
  }

  return (
    <div
      id="gantt-grid-container__time"
      style={{ gridTemplateColumns: `repeat(${numMonths}, 1fr)` }}
    >
      {monthRows}
      {dayRows}
      {weekRows}
      <style jsx>{`
        #gantt-grid-container__time {
          display: grid;
          overflow-x: auto;
          outline: 1px solid var(--color-outline);
        }

        /* .gantt-time-period {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(30px, 1fr);
          outline: 1px solid var(--color-outline);
          text-align: center;
          height: var(--cell-height);
        } */

        /* .gantt-time-period span {
          margin: auto;
        } */

        .gantt-time-period-cell-container {
          grid-column: 1/-1;
          display: grid;
        }

        .gantt-time-period-cell {
          position: relative;
          outline: 1px solid var(--color-outline);
        }

        .taskDuration {
          position: absolute;
          height: calc(var(--cell-height) / 3);
          top: calc(var(--cell-height) / 3);
          z-index: 1;
          background: linear-gradient(
            90deg,
            var(--color-primary-light) 0%,
            var(--color-primary-dark) 100%
          );
          border-radius: 2px;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
          cursor: move;
        }

        .taskDuration:focus {
          outline: 1px solid black;
        }

        .dragging {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
