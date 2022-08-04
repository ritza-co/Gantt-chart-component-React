import css from 'styled-jsx/css';

export const GanttTimePeriodCSS = css.resolve`
  div {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: minmax(30px, 1fr);
    outline: 1px solid var(--color-outline);
    text-align: center;
    height: var(--cell-height);
  }
`;
