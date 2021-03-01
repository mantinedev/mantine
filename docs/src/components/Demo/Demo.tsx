import React from 'react';
import cx from 'clsx';
import { Paper } from '@mantine/core';
import useStyles from './Demo.styles';

interface DemoProps {
  className?: string;
  children: React.ReactNode;
}

export default function Demo({ className, children }: DemoProps) {
  const classes = useStyles();
  return (
    <Paper padding="md" shadow="xs" className={cx(classes.demo, className)}>
      {children}
    </Paper>
  );
}
