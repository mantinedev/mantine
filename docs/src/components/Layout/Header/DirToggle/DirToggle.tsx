import React from 'react';
import { Text, Center, UnstyledButton } from '@mantine/core';
import { Language } from 'tabler-icons-react';
import { useDirectionContext } from '../../DirectionContext';
import useStyles from './DirToggle.styles';

export function DirToggle({ className, ...others }: React.ComponentPropsWithoutRef<'button'>) {
  const { classes, cx } = useStyles();
  const { dir, toggleDirection } = useDirectionContext();

  return (
    <UnstyledButton
      className={cx(classes.wrapper, className)}
      onClick={toggleDirection}
      {...others}
    >
      <Text size="sm">{dir.toUpperCase()}</Text>
      <Center className={classes.icon}>
        <Language size={20} />
      </Center>
    </UnstyledButton>
  );
}
