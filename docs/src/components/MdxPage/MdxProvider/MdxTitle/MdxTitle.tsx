import React from 'react';
import { Title, useMantineTheme } from '@mantine/core';
import useStyles from './MdxTitle.styles';

export default function MdxTitle({
  id,
  children,
  order,
  ...others
}: React.ComponentPropsWithoutRef<typeof Title>) {
  const classes = useStyles();
  const theme = useMantineTheme();

  if (order === 1) {
    return (
      <Title
        className={classes.title}
        style={{
          fontWeight: 800,
          fontSize: 38,
          fontFamily: `Dosis, ${theme.headings.fontFamily}`,
        }}
      >
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
