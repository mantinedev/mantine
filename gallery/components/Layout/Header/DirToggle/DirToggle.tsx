import React from 'react';
import { Text, Center, UnstyledButton } from '@mantine/core';
import { Language } from 'tabler-icons-react';
import useStyles from './DirToggle.styles';

export function DirToggle({ className, dir, ...others }: React.ComponentPropsWithoutRef<'button'>) {
  const { classes, cx } = useStyles();

  return (
    <UnstyledButton className={cx(classes.wrapper, className)} {...others}>
      <Text size="sm">{dir.toUpperCase()}</Text>
      <Center className={classes.icon}>
        <Language size={20} />
      </Center>
    </UnstyledButton>
  );
}
