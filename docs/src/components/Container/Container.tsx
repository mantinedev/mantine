import React from 'react';
import cx from 'clsx';
import useStyles from './Container.styles';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  const classes = useStyles();
  return <div className={cx(classes.container, className)}>{children}</div>;
}
