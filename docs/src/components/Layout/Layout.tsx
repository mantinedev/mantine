import React from 'react';
import { useMantineTheme } from '@mantine/core';
import Navbar from '../Navbar/Navbar';
import useStyles from './Layout.styles';

export default function Layout({ children }: { children: React.ReactNode }) {
  const classes = useStyles({ theme: useMantineTheme() });
  return (
    <main className={classes.layout}>
      <Navbar className={classes.navbar} />
      <div className={classes.main}>{children}</div>
    </main>
  );
}
