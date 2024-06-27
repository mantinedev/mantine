import { useEffect, useState } from 'react';
import { useDirection } from '@mantine/core';
import { Shell } from '@/components/Shell';
import { ComboboxNavbar } from './ComboboxNavbar/ComboboxNavbar';
import classes from './ComboboxShell.module.css';

interface ComboboxShellProps {
  children: React.ReactNode;
}

export function ComboboxShell({ children }: ComboboxShellProps) {
  const [opened, setNavbarOpened] = useState(false);
  const { setDirection } = useDirection();

  useEffect(() => {
    setDirection('ltr');
  }, []);

  return (
    <div className={classes.root}>
      <Shell
        withNavbar={false}
        navbarOpened={opened}
        onNavbarOpenedChange={setNavbarOpened}
        headerControlsProps={{ withDirectionToggle: false }}
      >
        <ComboboxNavbar opened={opened} onClose={() => setNavbarOpened(false)} />
        <main className={classes.main}>{children}</main>
      </Shell>
    </div>
  );
}
