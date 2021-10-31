import React, { useState } from 'react';
import { TextInput, createStyles } from '@mantine/core';

const useStyles = createStyles((theme, { floating }: { floating: boolean }) => ({
  root: {
    position: 'relative',
  },

  label: {
    position: 'absolute',
    zIndex: 2,
    top: 7,
    left: theme.spacing.sm,
    pointerEvents: 'none',
    fontWeight: 400,
    color: floating
      ? theme.colorScheme === 'dark'
        ? theme.white
        : theme.black
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[3]
      : theme.colors.gray[5],
    transition: 'transform 150ms ease, color 150ms ease',
    transform: floating ? `translate(-${theme.spacing.sm}px, -30px)` : 'none',
  },
}));

export function FloatingLabelInput() {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');
  const { classes } = useStyles({ floating: value.trim().length !== 0 || focused });

  return (
    <TextInput
      label="Floating label"
      classNames={classes}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="md"
    />
  );
}
