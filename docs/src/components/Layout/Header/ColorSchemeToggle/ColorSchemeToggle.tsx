import React from 'react';
import { MoonIcon, SunIcon } from '@modulz/radix-icons';
import { UnstyledButton, Text, Center, useMantineColorScheme } from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import useStyles from './ColorSchemeToggle.styles';

export function ColorSchemeToggle({
  className,
  ...others
}: React.ComponentPropsWithoutRef<'button'>) {
  const { classes, cx } = useStyles();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const Icon = colorScheme === 'dark' ? SunIcon : MoonIcon;

  return (
    <UnstyledButton
      aria-label="Toggle theme"
      className={cx(classes.control, className)}
      onClick={() => toggleColorScheme()}
      title="Ctrl + J"
      {...others}
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
