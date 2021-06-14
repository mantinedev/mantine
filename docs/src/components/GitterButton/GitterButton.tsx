import React from 'react';
import cx from 'clsx';
import { Button } from '@mantine/core';
import { GitterLogo } from './GitterLogo';
import useStyles from './GitterButton.styles';

export function GitterButton({ className, ...others }: React.ComponentProps<'button'>) {
  const classes = useStyles();

  return (
    <Button
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      className={cx(classes.button, className)}
      href="https://gitter.im/mantine/community"
      leftIcon={<GitterLogo style={{ width: 14, marginRight: 5 }} />}
      {...others}
    >
      Chat on gitter
    </Button>
  );
}
