import React from 'react';
import cx from 'clsx';
import useStyles from './SectionTitle.styles';

export function SectionTitle({ children, className, ...others }: React.ComponentProps<'h1'>) {
  const classes = useStyles();
  return (
    <h2 className={cx(classes.title, className)} {...others}>
      {children}
    </h2>
  );
}
