import Link from 'next/link';
import { Button, Container, Group, rem, SimpleGrid, Text } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import { FEATURES_DATA } from './features';
import { Hero } from './Hero';
import classes from './Jumbotron.module.css';

export function Jumbotron() {
  const features = FEATURES_DATA.map((feature) => (
    <div className={classes.feature} key={feature.title}>
      <div className={classes.featureIcon}>
        <feature.icon style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
      </div>

      <div className={classes.featureBody}>
        <Text fw={500} className={classes.featureTitle}>
          {feature.title}
        </Text>
        <Text size="sm" c="dimmed" mt={4}>
          {feature.description}
        </Text>
      </div>
    </div>
  ));

  return (
    <div className={classes.jumbotron}>
      <Container size={1100} className={classes.inner}>
        <Hero />

        <Text className={classes.description}>
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 100 customizable components and 50 hooks to cover you in any situation
        </Text>

        <SimpleGrid cols={{ base: 1, md: 3 }} style={{ maxWidth: rem(800) }} spacing={30} mt={40}>
          {features}
        </SimpleGrid>

        <Group className={classes.controls}>
          <Button
            component={Link}
            href="/getting-started/"
            size="xl"
            radius="md"
            className={classes.control}
            data-primary
            variant="gradient"
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="outline"
            radius="md"
            className={classes.control}
            data-github
            leftSection={<GithubIcon size={22} />}
          >
            GitHub
          </Button>
        </Group>
      </Container>
    </div>
  );
}
