import React, { useContext } from 'react';
import { MoonIcon, SunIcon } from '@modulz/radix-icons';
import { UnstyledButton, Text } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { ColorSchemeContext } from '../../ColorScheme.context';
import useStyles from './ColorSchemeToggle.styles';

export function ColorSchemeToggle() {
  const classes = useStyles();
  const { colorScheme, onChange } = useContext(ColorSchemeContext);
  const Icon = colorScheme === 'dark' ? MoonIcon : SunIcon;

  return (
    <UnstyledButton
      aria-label="Toggle theme"
      className={classes.control}
      onClick={() => onChange(colorScheme === 'light' ? 'dark' : 'light')}
    >
      <Icon className={classes.icon} />
      <Text size="sm" className={classes.value}>
        {upperFirst(colorScheme)} theme
      </Text>
    </UnstyledButton>
  );
}
