import { Container } from '@mantine/core';
import { DocsHeader } from './DocsHeader/DocsHeader';
import { DocsNavbar } from './DocsNavbar/DocsNavbar';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <div className={classes.root}>
      <DocsHeader />
      <Container size={1440}>
        <div className={classes.inner}>
          <DocsNavbar />
          <main className={classes.content}>{children}</main>
        </div>
      </Container>
    </div>
  );
}
