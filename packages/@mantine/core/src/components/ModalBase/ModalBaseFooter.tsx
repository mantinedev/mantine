import { forwardRef } from 'react';
import cx from 'clsx';
import { Box, BoxProps, ElementProps } from '../../core';
import { useModalBaseContext } from './ModalBase.context';
import classes from './ModalBase.module.css';

export interface ModalBaseFooterProps extends BoxProps, ElementProps<'footer'> {}

export const ModalBaseFooter = forwardRef<HTMLElement, ModalBaseFooterProps>(
  ({ className, ...others }, ref) => {
    const ctx = useModalBaseContext();
    return (
      <Box
        component="footer"
        ref={ref}
        className={cx({ [classes.footer]: !ctx.unstyled }, className)}
        {...others}
      />
    );
  }
);

ModalBaseFooter.displayName = '@mantine/core/ModalBaseFooter';
