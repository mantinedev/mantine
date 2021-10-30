import React from 'react';
import { Container, Group } from '@mantine/core';
import { Logo } from './Logo/Logo';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import { Discord } from './Discord/Discord';
import { SourceCode } from './SourceCode/SourceCode';
import useStyles from './Header.styles';

export function Header() {
  const { classes } = useStyles();
  return (
    <div className={classes.header}>
      <Container size="xl" padding="md" className={classes.inner}>
        <Logo />
        <Group>
          <Discord />
          <SourceCode />
          <ColorSchemeToggle />
        </Group>
      </Container>
    </div>
  );
}
