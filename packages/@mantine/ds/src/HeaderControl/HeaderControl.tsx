import React from 'react';
import cx from 'clsx';
import { UnstyledButton, Tooltip, BoxProps, createPolymorphicComponent } from '@mantine/core';
import classes from './HeaderControl.module.css';

export interface HeaderControlProps extends BoxProps {
  tooltip: string;
  children: React.ReactNode;
}

function _HeaderControl({ tooltip, className, ...others }: HeaderControlProps) {
  return (
    <Tooltip label={tooltip}>
      <UnstyledButton className={cx(classes.control, className)} aria-label={tooltip} {...others} />
    </Tooltip>
  );
}

export const HeaderControl = createPolymorphicComponent<'button', HeaderControlProps>(
  _HeaderControl
);
