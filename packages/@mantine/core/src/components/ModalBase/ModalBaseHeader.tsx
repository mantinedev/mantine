import React, { forwardRef } from 'react';
import cx from 'clsx';
import { Box, BoxProps, ElementProps } from '../../core';
import classes from './ModalBase.module.css';
import { useModalBaseContext } from './ModalBase.context';

export interface ModalBaseHeaderProps extends BoxProps, ElementProps<'div'> {}

export const ModalBaseHeader = forwardRef<HTMLDivElement, ModalBaseHeaderProps>(
  ({ className, ...others }, ref) => {
    const ctx = useModalBaseContext();
    return (
      <Box ref={ref} className={cx({ [classes.header]: !ctx.unstyled }, className)} {...others} />
    );
  }
);

ModalBaseHeader.displayName = '@mantine/core/ModalBaseHeader';
