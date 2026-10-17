'use client';

import { Container, Title } from '@mantine/core';
import { TableOfContents } from './TableOfContents';
import classes from './MdxLayout.module.css';

interface MdxLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function MdxLayout({ title, children }: MdxLayoutProps) {
  return (
    <article>
      <header className={classes.header}>
        <Container size="md">
          <Title className={classes.title}>{title}</Title>
        </Container>
      </header>
      <Container size="md" className={classes.innerContainer}>
        <div className={classes.inner}>
          <div className={classes.content} id="mdx">
            {children}
          </div>
        </div>
        <TableOfContents />
      </Container>
    </article>
  );
}
