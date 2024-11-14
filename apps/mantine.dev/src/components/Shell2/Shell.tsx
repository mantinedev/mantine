import { Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { DocsHeader } from './DocsHeader/DocsHeader';
import { DocsMobileNavbar } from './DocsNavbar/DocsMobileNavbar';
import { DocsNavbar } from './DocsNavbar/DocsNavbar';
import { ShellProvider } from './Shell.context';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  const [mobileNavbarOpened, mobileNavbarHandlers] = useDisclosure();

  return (
    <ShellProvider
      value={{
        navbarOpened: mobileNavbarOpened,
        toggleNavbar: mobileNavbarHandlers.toggle,
        closeNavbar: mobileNavbarHandlers.close,
      }}
    >
      <div className={classes.root}>
        <DocsHeader />
        <Container size={1440}>
          <div className={classes.inner}>
            {mobileNavbarOpened && <DocsMobileNavbar />}
            <DocsNavbar />
            <main className={classes.content}>{children}</main>
          </div>
        </Container>
      </div>
    </ShellProvider>
  );
}
