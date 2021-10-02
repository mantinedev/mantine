import React from 'react';
import { Title } from '@mantine/core';
import useStyles from './MdxTitle.styles';

export default function MdxTitle({
  id,
  children,
  order,
  ...others
}: React.ComponentPropsWithoutRef<typeof Title>) {
  const { classes } = useStyles();

  if (order === 1) {
    return (
      <Title className={classes.title} style={{ fontWeight: 900, fontSize: 44 }}>
        {children}
      </Title>
    );
  }

  return (
    <>
      <div id={id} />
      <Title order={order} className={classes.title} style={{ fontWeight: 600 }} {...others}>
        <a className={classes.link} href={`#${id}`}>
          {children}
        </a>
      </Title>
    </>
  );
}
