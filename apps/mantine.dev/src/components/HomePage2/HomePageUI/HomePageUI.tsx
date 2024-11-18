import { IconArrowUpRight } from '@tabler/icons-react';
import { Button, Container, Overlay, Text, Title } from '@mantine/core';
import banner from './banner.webp';
import classes from './HomePageUI.module.css';

export function HomePageUI() {
  return (
    <div className={classes.wrapper}>
      <Container size={1440} className={classes.container}>
        <div className={classes.image} style={{ backgroundImage: `url(${banner.src})` }} />
        <Overlay className={classes.overlay} opacity={1} zIndex={1} />

        <div className={classes.body}>
          <Text className={classes.supTitle}>Build even faster with Mantine UI</Text>
          <Title className={classes.title}>
            <span className={classes.highlight}>120+ responsive components</span>
            <br /> built with Mantine
          </Title>

          <Text className={classes.description}>
            Build your next website even faster with premade responsive components designed and
            built by Mantine maintainers and community. All components are free forever for
            everyone.
          </Text>

          <div className={classes.controls}>
            <Button
              className={classes.control}
              variant="gradient"
              radius="md"
              size="lg"
              component="a"
              href="https://ui.mantine.dev/"
              rightSection={<IconArrowUpRight />}
              justify="space-between"
              miw={300}
            >
              Explore components
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
