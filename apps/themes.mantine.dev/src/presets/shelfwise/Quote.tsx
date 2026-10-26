import { Avatar } from '@mantine/core';
import classes from './Quote.module.css';

const STATS = [
  { value: '6 hours', label: 'saved every week' },
  { value: '£1,840', label: 'online sales last month' },
];

export function Quote() {
  return (
    <section className={classes.section} aria-label="What booksellers say">
      <div className={classes.quote}>
        <div>
          <blockquote className={classes.text}>
            “We used to spend Sunday afternoons counting stock. Now I spend them reading, which is
            the whole reason I opened a bookshop.”
          </blockquote>
          <div className={classes.stats}>
            {STATS.map((stat) => (
              <span key={stat.label}>
                <b>{stat.value}</b>
                {stat.label}
              </span>
            ))}
          </div>
        </div>
        <div className={classes.who}>
          <Avatar size={56} className={classes.avatar}>
            AO
          </Avatar>
          <span>
            <b>Aoife O’Connell</b>
            <span className={classes.role}>Owner, Bound &amp; Found, Galway</span>
          </span>
        </div>
      </div>
    </section>
  );
}
