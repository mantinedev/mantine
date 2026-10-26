import { IconCheck } from '@tabler/icons-react';
import { Button, Text, Title } from '@mantine/core';
import { Bookshelf } from './Bookshelf';
import classes from './Hero.module.css';
import marigold from './Marigold.module.css';

export function Hero() {
  return (
    <section className={classes.hero} aria-labelledby="sw-hero-title">
      <div className={classes.copy}>
        <Title order={1} id="sw-hero-title" className={classes.title}>
          Every book in your shop, counted, ordered and sold online
        </Title>
        <Text className={classes.lead}>
          Shelfwise is the till, stock list and web shop for independent bookshops. Scan in a
          delivery, take a special order at the counter and have it on your website before the
          kettle boils.
        </Text>
        <div className={`${classes.ctas} ${marigold.zone}`}>
          <Button component="a" href="#demo" size="lg">
            Start a 30-day trial
          </Button>
          <Button component="a" href="#demo" size="lg" variant="default">
            Book a demo
          </Button>
        </div>
        <div className={classes.note}>
          <IconCheck size={16} stroke={1.8} />
          No card needed. Imports your stock from Gardners and Bertrams.
        </div>
      </div>
      <Bookshelf />
    </section>
  );
}
