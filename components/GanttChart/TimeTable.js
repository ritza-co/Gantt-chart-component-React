export default function TimeTable() {
  return (
    <div id="gantt-grid-container__time">
      Time Table
      <style jsx>{`
        #gantt-grid-container__time {
          display: grid;
          overflow-x: auto;
          outline: 1px solid var(--color-outline);
        }

        .gantt-time-period {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: minmax(30px, 1fr);
          outline: 1px solid var(--color-outline);
          text-align: center;
          height: var(--cell-height);
        }

        .gantt-time-period span {
          margin: auto;
        }

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
