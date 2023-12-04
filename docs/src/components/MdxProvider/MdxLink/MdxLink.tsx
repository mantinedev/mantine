import React from 'react';
import Link from 'next/link';
import { Anchor } from '@mantine/core';
import classes from './MdxLink.module.css';

export function MdxLink({ href, ...others }: React.ComponentPropsWithoutRef<'a'>) {
  const replaced = href?.replace('https://mantine.dev', '')!;

  if (!replaced?.startsWith('http') && replaced.trim().length > 0) {
    return <Anchor className={classes.link} component={Link} href={replaced} {...others} />;
  }

  return <Anchor className={classes.link} href={href} {...others} />;
}
