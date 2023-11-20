import React from 'react';
import cx from 'clsx';
import classes from './SectionTitle.module.css';

interface SectionTitleProps extends React.ComponentProps<'h1'> {
  type?: 'white' | 'default';
}

export function SectionTitle({
  children,
  className,
  type = 'default',
  ...others
}: SectionTitleProps) {
  return (
    <h2 data-type={type} className={cx(classes.title, className)} {...others}>
      {children}
    </h2>
  );
}
