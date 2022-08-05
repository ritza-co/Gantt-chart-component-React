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
        return { ...prevState, toSelectYear: value };
      });
    }
  }

  return (
    <div id="time-range__container">
      <h2>Tracker Period</h2>
      <div id="time-range">
        <fieldset id="select-from" style={{ paddingLeft: '0px' }}>
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
            style={{ marginLeft: '5px' }}
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
            style={{ marginLeft: '5px' }}
          >
            {yearsOptions}
          </select>
        </fieldset>
      </div>
      <style jsx>{`
        #time-range__container {
          margin-right: 10px;
          margin-bottom: 10px;
          padding: 1rem;
          border-radius: 5px;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
        }

        #time-range__container > * {
          display: flex;
          align-items: center;
        }

        #time-range {
          display: flex;
          align-items: center;
          font-size: 14px;
          margin: 0.5rem 0;
        }

        h2 {
          font-size: 1.5rem;
        }

        fieldset {
          border: none;
          padding: 0.5rem;
        }

        fieldset label {
          margin-right: 10px;
        }

        select {
          padding: 5px 7px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}
