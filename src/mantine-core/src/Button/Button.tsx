import React from 'react';
import cx from 'clsx';
import classes from './Button.styles.less';

interface ButtonProps {
  className?: string;
}

export default function Button({ className }: ButtonProps) {
  return (
    <button type="button" className={cx(classes.button, className)}>
      Button
    </button>
  );
}
