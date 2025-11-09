import { Text, Title } from '@mantine/core';
import { SocialCards } from '@/components/SocialCards';
import classes from './NothingFound.module.css';

export function NothingFound() {
  return (
    <section className={classes.root}>
      <Title order={2} c="bright" className={classes.title}>
        Nothing found... But do not give up just yet!
      </Title>

      <Text className={classes.description}>
        Join Mantine community of 10,000+ developers on Discord or ask your questions on
        GitHub:{' '}
      </Text>

      <SocialCards />
    </section>
  );
}
