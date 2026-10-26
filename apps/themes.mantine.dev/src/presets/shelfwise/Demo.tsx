import { Text, Title } from '@mantine/core';
import { DemoForm } from './DemoForm';
import classes from './Demo.module.css';

export function Demo() {
  return (
    <section className={classes.section} id="demo" aria-labelledby="sw-demo-title">
      <div className={classes.demo}>
        <div>
          <Title order={2} id="sw-demo-title" className={classes.title}>
            See your own shop in Shelfwise
          </Title>
          <Text className={classes.text}>
            Send us your stock list and we’ll load it into a trial account, so the demo shows your
            books.
          </Text>
        </div>
        <DemoForm />
      </div>
    </section>
  );
}
