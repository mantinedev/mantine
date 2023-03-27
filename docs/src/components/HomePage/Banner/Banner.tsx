import React from 'react';
import { Title, Overlay, Text, Button, Container } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import useStyles from './Banner.styles';

export function Banner() {
  const { classes, theme } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={1100} px="md">
        <div className={classes.image} />
        <Overlay
          gradient={`linear-gradient(45deg, ${
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
          } 25%, rgba(0, 0, 0, 0) 95%)`}
          opacity={0.5}
          zIndex={1}
        />

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
              size="md"
              component="a"
              href="https://ui.mantine.dev/"
            >
              Explore components
            </Button>
            <Button
              leftIcon={<GithubIcon size={18} />}
              component="a"
              radius="md"
              href="https://github.com/mantinedev/ui.mantine.dev"
              variant="default"
              size="md"
            >
              View on GitHub
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
