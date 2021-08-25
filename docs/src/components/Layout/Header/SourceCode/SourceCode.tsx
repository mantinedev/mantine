import React from 'react';
import cx from 'clsx';
import { Text, Center } from '@mantine/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import useStyles from './SourceCode.styles';

export function SourceCode({ className, ...others }: React.ComponentProps<'a'>) {
  const classes = useStyles();

  return (
    <a
      className={cx(classes.wrapper, className)}
      href="https://github.com/mantinedev/mantine"
      {...others}
    >
      <Text size="sm">Source code</Text>
      <Center className={classes.icon}>
        <MarkGithubIcon />
      </Center>
    </a>
  );
}
