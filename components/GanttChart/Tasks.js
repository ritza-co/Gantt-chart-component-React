export default function Tasks() {
  return (
    <div id="gantt-grid-container__tasks">
      Tasks
      <style jsx>{`
        #gantt-grid-container__tasks {
          outline: 1px solid var(--color-outline);
        }

        .gantt-task-row {
          padding: 2px 0;
          outline: 1px solid var(--color-outline);
          text-align: center;
          height: var(--cell-height);
          /* expand across whole grid */
          grid-column: 1/-1;
          width: 100%;
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
          height: calc(var(--cell-height) * 4);
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
