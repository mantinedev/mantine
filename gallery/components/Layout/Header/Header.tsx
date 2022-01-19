import React from 'react';
import { Container, Group } from '@mantine/core';
import { Logo } from './Logo/Logo';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import { Discord } from './Discord/Discord';
import { SourceCode } from './SourceCode/SourceCode';
import { DirToggle } from './DirToggle/DirToggle';
import useStyles from './Header.styles';

interface HeaderProps {
  toggleDir(): void;
  dir: 'rtl' | 'ltr';
}

export function Header({ toggleDir, dir }: HeaderProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.header}>
      <Container size="xl" padding="md" className={classes.inner}>
        <Logo />
        <Group mr={-8}>
          <Discord />
          <SourceCode />
          <DirToggle dir={dir} onClick={toggleDir} />
          <ColorSchemeToggle />
        </Group>
      </Container>
    </div>
  );
}
