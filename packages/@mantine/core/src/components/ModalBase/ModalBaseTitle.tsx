import React, { forwardRef } from 'react';
import cx from 'clsx';
import { Box, BoxProps, ElementProps } from '../../core';
import { useModalTitle } from './use-modal-title-id';
import classes from './ModalBase.module.css';
import { useModalBaseContext } from './ModalBase.context';

export interface ModalBaseTitleProps extends BoxProps, ElementProps<'h2'> {}

export const ModalBaseTitle = forwardRef<HTMLHeadingElement, ModalBaseTitleProps>(
  ({ className, ...others }, ref) => {
    const id = useModalTitle();
    const ctx = useModalBaseContext();
    return (
      <Box
        component="h2"
        ref={ref}
        className={cx({ [classes.title]: !ctx.unstyled }, className)}
        {...others}
        id={id}
      />
    );
  }
);

ModalBaseTitle.displayName = '@mantine/core/ModalBaseTitle';
