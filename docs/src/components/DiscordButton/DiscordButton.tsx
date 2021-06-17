import React from 'react';
import cx from 'clsx';
import { Button } from '@mantine/core';
import { DiscordLogo } from './DiscordLogo';
import useStyles from './DiscordButton.styles';

export function DiscordButton({ className, ...others }: React.ComponentProps<'button'>) {
  const classes = useStyles();

  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      className={cx(classes.button, className)}
      href="https://discord.gg/eUZpPbpxb4"
      leftIcon={<DiscordLogo style={{ width: 14, marginRight: 5 }} />}
      {...others}
    >
      Chat on Discord
    </Button>
  );
}
