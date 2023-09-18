import React, { forwardRef } from 'react';
import cx from 'clsx';
import { BoxProps, ElementProps } from '../../core';
import { CloseButton } from '../CloseButton';
import { useModalBaseContext } from './ModalBase.context';
import classes from './ModalBase.module.css';

export interface ModalBaseCloseButtonProps extends BoxProps, ElementProps<'button'> {}

export const ModalBaseCloseButton = forwardRef<HTMLButtonElement, ModalBaseCloseButtonProps>(
  ({ className, ...others }, ref) => {
    const ctx = useModalBaseContext();
    return (
      <CloseButton
        ref={ref}
        {...others}
        onClick={ctx.onClose}
        className={cx({ [classes.close]: !ctx.unstyled }, className)}
        unstyled={ctx.unstyled}
      />
    );
  }
);

ModalBaseCloseButton.displayName = '@mantine/core/ModalBaseCloseButton';
