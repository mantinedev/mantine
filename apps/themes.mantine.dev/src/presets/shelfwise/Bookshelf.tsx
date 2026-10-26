import { Paper } from '@mantine/core';
import { spines, stockRows } from './data';
import classes from './Bookshelf.module.css';

export function Bookshelf() {
  return (
    <div className={classes.scene} aria-hidden="true">
      <Paper shadow="md" className={classes.card}>
        <div className={classes.cardTitle}>The Salt Path</div>
        <div className={classes.author}>Raynor Winn, paperback</div>
        <dl className={classes.counts}>
          {stockRows.map((row) => (
            <div key={row.label} className={classes.count}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
        <div className={classes.order}>
          <span className={classes.dot} />
          Special order for Mrs Patel, text her when it arrives
        </div>
      </Paper>

      <div className={classes.books}>
        {spines.map((spine) => (
          <div
            key={spine.title}
            className={classes.book}
            data-out={spine.out || undefined}
            style={{
              width: spine.width,
              height: spine.height,
              background: `var(--sw-spine-${spine.color})`,
              color: `var(--sw-spine-${spine.ink})`,
            }}
          >
            <span>{spine.title}</span>
          </div>
        ))}
      </div>
      <div className={classes.plank} />
    </div>
  );
}
