import React, { useState } from 'react';
import { Shell } from '@/components/Shell';
import { ComboboxNavbar } from './ComboboxNavbar/ComboboxNavbar';
import classes from './ComboboxShell.module.css';

interface ComboboxShellProps {
  children: React.ReactNode;
}

export function ComboboxShell({ children }: ComboboxShellProps) {
  const [opened, setNavbarOpened] = useState(false);

  return (
    <div className={classes.root}>
      <Shell withNavbar={false} navbarOpened={opened} onNavbarOpenedChange={setNavbarOpened}>
        <ComboboxNavbar opened={opened} onClose={() => setNavbarOpened(false)} />
        <main className={classes.main}>{children}</main>
      </Shell>
    </div>
  );
}
