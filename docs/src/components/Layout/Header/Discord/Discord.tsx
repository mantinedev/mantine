import React from 'react';
import cx from 'clsx';
import { Text, Center } from '@mantine/core';
import { DiscordIcon } from './DiscordIcon';
import useStyles from './Discord.styles';

export function Discord({ className, ...others }: React.ComponentProps<'a'>) {
  const classes = useStyles();

  return (
    <a
      className={cx(classes.wrapper, className)}
      href="https://github.com/mantinedev/mantine"
      {...others}
    >
      <Text size="sm">Discord</Text>
      <Center className={classes.icon}>
        <DiscordIcon style={{ width: 18, height: 18 }} />
      </Center>
    </a>
  );
}
