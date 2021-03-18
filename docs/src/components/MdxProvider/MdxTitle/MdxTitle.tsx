import React from 'react';
import { Title } from '@mantine/core';
import useStyles from './MdxTitle.styles';

export default function MdxTitle({
  id,
  children,
  order,
  ...others
}: React.ComponentPropsWithoutRef<typeof Title>) {
  const classes = useStyles();
  return (
    <>
      <div id={id} />
      <Title order={order} {...others}>
        <a className={classes.link} href={`#${id}`}>
          {children}
        </a>
      </Title>
    </>
  );
}
