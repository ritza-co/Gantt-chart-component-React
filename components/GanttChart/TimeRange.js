import { months } from '../../constants';

export default function TimeRange({ timeRange, setTimeRange }) {
  // add date selector values
  let monthsOptions = [];
  for (let i = 0; i < months.length; i++) {
    monthsOptions.push(
      <option key={i} value={i}>
        {months[i]}
      </option>
    );
  }

  const yearsOptions = [];
  for (let i = 2022; i <= 2050; i++) {
    yearsOptions.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  function onChange(e) {
    const { value, id } = e.target;

    if (id === 'from-select-month') {
      setTimeRange((prevState) => {
        return { ...prevState, fromSelectMonth: value };
      });
    }
    if (id === 'from-select-year') {
      setTimeRange((prevState) => {
        return { ...prevState, fromSelectYear: value };
      });
    }
    if (id === 'to-select-month') {
      setTimeRange((prevState) => {
        return { ...prevState, toSelectMonth: value };
      });
    }
    if (id === 'to-select-year') {
      setTimeRange((prevState) => {
        return { ...prevState, toSelectMonth: value };
      });
    }
  }

  return (
    <div id="time-range">
      <fieldset id="select-from">
        <legend>From</legend>
        <select
          id="from-select-month"
          name="from-select-month"
          value={timeRange.fromSelectMonth}
          onChange={onChange}
        >
          {monthsOptions}
        </select>
        <select
          id="from-select-year"
          name="from-select-year"
          value={timeRange.fromSelectYear}
          onChange={onChange}
        >
          {yearsOptions}
        </select>
      </fieldset>

      <fieldset id="select-to">
        <legend>To</legend>
        <select
          id="to-select-month"
          name="to-select-month"
          value={timeRange.toSelectMonth}
          onChange={onChange}
        >
          {monthsOptions}
        </select>
        <select
          id="to-select-year"
          name="to-select-year"
          value={timeRange.toSelectYear}
          onChange={onChange}
        >
          {yearsOptions}
        </select>
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
