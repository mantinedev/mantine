import { SimpleGrid, Text, Title } from '@mantine/core';
import { SocialCard } from '@/components/SocialCard';
import classes from './NothingFound.module.css';

export function NothingFound() {
  return (
    <section className={classes.root}>
      <Title order={2} c="bright">
        Nothing found... But do not give up yet!
      </Title>

      <Text className={classes.description}>
        Join Mantine community of 10,000+ developers on Discord or ask your questions on GitHub:{' '}
      </Text>

      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <SocialCard type="discord" />
        <SocialCard type="github" />
      </SimpleGrid>
    </section>
  );
}
