import { useEffect, useState } from 'react';
import { Button, Title } from '@mantine/core';
import { DOORS_OPEN } from './data';
import classes from './Fieldwork.module.css';

function getParts(now: number) {
  let diff = Math.max(0, DOORS_OPEN - now);
  const days = Math.floor(diff / 864e5);
  diff -= days * 864e5;
  const hours = Math.floor(diff / 36e5);
  diff -= hours * 36e5;
  const minutes = Math.floor(diff / 6e4);
  diff -= minutes * 6e4;
  const seconds = Math.floor(diff / 1e3);
  return [
    { value: String(days), label: 'days' },
    { value: String(hours).padStart(2, '0'), label: 'hours' },
    { value: String(minutes).padStart(2, '0'), label: 'minutes' },
    { value: String(seconds).padStart(2, '0'), label: 'seconds' },
  ];
}

function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, []);

  const parts = getParts(now ?? DOORS_OPEN);

  return (
    <div className={classes.countdown} aria-live="off">
      <span className={classes.countdownLabel}>Doors open in</span>
      <div className={classes.countdownGrid}>
        {parts.map((part) => (
          <div key={part.label}>
            <b>{part.value}</b>
            <span>{part.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className={classes.hero} aria-labelledby="fw-hero-title">
      <div className={`${classes.heroMain} ${classes.wrap}`}>
        <Title order={1} id="fw-hero-title" className={classes.heroTitle}>
          Fieldwork <span className={classes.year}>2027</span>
        </Title>
        <p className={classes.lead}>
          Two days for the designers, engineers and policy people who build public services. Real
          projects, honest talks about what went wrong, and a lot of people who have filled in the
          same forms you have.
        </p>
        <div className={classes.heroActions}>
          <Button component="a" href="#tickets" size="lg">
            Get tickets
          </Button>
          <Button component="a" href="#schedule" size="lg" variant="default">
            See the schedule
          </Button>
        </div>
      </div>
      <aside className={classes.heroSide} aria-label="Date and place">
        <div className={classes.when}>
          <b>13–14 May</b>
          <span>Thursday and Friday, 2027</span>
        </div>
        <div className={classes.where}>
          <b>Tobacco Factory</b>
          Raleigh Road, Southville, Bristol
        </div>
        <Countdown />
      </aside>
    </section>
  );
}
