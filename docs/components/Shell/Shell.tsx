import React from 'react';
import { useUncontrolled } from '@mantine/hooks';
import { Header } from './Header/Header';
import { Navbar } from './Navbar/Navbar';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
  withNavbar?: boolean;
  navbarOpened?: boolean;
  mobileNavbarOnly?: boolean;
  onNavbarOpenedChange?(opened: boolean): void;
}

export function Shell({
  children,
  withNavbar = true,
  mobileNavbarOnly = false,
  navbarOpened,
  onNavbarOpenedChange,
}: ShellProps) {
  const [opened, setNavbarOpened] = useUncontrolled({
    value: navbarOpened,
    defaultValue: false,
    finalValue: false,
    onChange: onNavbarOpenedChange,
  });

  const toggleNavbar = () => setNavbarOpened(!opened);
  const closeNavbar = () => setNavbarOpened(false);

  return (
    <>
      <Header navbarOpened={opened} onNavbarToggle={toggleNavbar} />
      {withNavbar && (
        <Navbar
          navbarOpened={opened}
          onNavbarClose={closeNavbar}
          mobileNavbarOnly={mobileNavbarOnly}
        />
      )}
      <main
        className={classes.main}
        id="mdx"
        style={{
          paddingLeft: withNavbar && !mobileNavbarOnly ? undefined : 0,
          paddingRight: withNavbar && !mobileNavbarOnly ? undefined : 0,
        }}
      >
        {children}
      </main>
    </>
  );
}
