import React, { useContext } from 'react';
import { MoonIcon, SunIcon } from '@modulz/radix-icons';
import { UnstyledButton, Text, Center } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import { ColorSchemeContext } from '../../ColorScheme.context';
import useStyles from './ColorSchemeToggle.styles';

export function ColorSchemeToggle() {
  const classes = useStyles();
  const { colorScheme, onChange } = useContext(ColorSchemeContext);
  const Icon = colorScheme === 'dark' ? SunIcon : MoonIcon;

  return (
    <UnstyledButton
      aria-label="Toggle theme"
      className={classes.control}
      onClick={() => onChange(colorScheme === 'light' ? 'dark' : 'light')}
      title="Ctrl + J"
    >
      <Text size="sm" className={classes.value}>
        {upperFirst(colorScheme === 'light' ? 'dark' : 'light')} theme
      </Text>

      <Center className={classes.iconWrapper}>
        <Icon style={{ width: 18, height: 18 }} />
      </Center>
    </UnstyledButton>
  );
}
