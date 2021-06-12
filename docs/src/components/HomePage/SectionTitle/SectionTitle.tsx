import React from 'react';
import cx from 'clsx';
import useStyles from './SectionTitle.styles';

interface SectionTitleProps extends React.ComponentProps<'h1'> {
  type?: 'white' | 'default';
}

export function SectionTitle({
  children,
  className,
  type = 'default',
  ...others
}: SectionTitleProps) {
  const classes = useStyles();

  return (
    <h2 className={cx(classes.title, classes[type], className)} {...others}>
      {children}
    </h2>
  );
}
