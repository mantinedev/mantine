import React from 'react';
import { Title, Overlay, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantine/ds';
import useStyles from './MantineUiBanner.styles';

interface MantineUiBannerProps extends React.ComponentPropsWithoutRef<'div'> {}

export function MantineUiBanner({ className, ...others }: MantineUiBannerProps) {
  const { classes, cx, theme } = useStyles();
  return (
    <div className={cx(classes.root, className)} {...others}>
      <Overlay
        gradient={`linear-gradient(45deg, ${
          theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
        } 25%, rgba(0, 0, 0, 0) 95%)`}
        opacity={0.5}
        zIndex={0}
        radius="md"
      />
      <div className={classes.content}>
        <Title order={2} className={classes.title}>
          Explore <span className={classes.highlight}>Mantine UI</span>
        </Title>

        <Text size="sm" sx={{ lineHeight: 1.7 }}>
          Mantine UI is a set of more than 120 responsive components built with Mantine. All
          components support dark/light color scheme and Mantine theme customizations. Mantine UI is
          free for everyone.
        </Text>
        <Group mt="xl">
          <Button component="a" href="https://ui.mantine.dev/">
            View components
          </Button>
          <Button
            className={classes.secondaryControl}
            component="a"
            href="https://github.com/mantinedev/ui.mantine.dev"
            variant="default"
            leftIcon={<GithubIcon size={14} />}
          >
            Source code
          </Button>
        </Group>
      </div>
    </div>
  );
}
