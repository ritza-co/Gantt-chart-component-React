export default function TimeRange() {
  return (
    <div id="time-range">
      <fieldset id="select-from">
        <legend>From</legend>
        <select id="from-select-month" name="from-select-month"></select>
        <select id="from-select-year" name="from-select-year"></select>
      </fieldset>

      <fieldset id="select-to">
        <legend>To</legend>
        <select id="to-select-month" name="to-select-month"></select>
        <select id="to-select-year" name="to-select-year"></select>
      </fieldset>
      <style jsx>{`
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
      `}</style>
    </div>
  );
}
