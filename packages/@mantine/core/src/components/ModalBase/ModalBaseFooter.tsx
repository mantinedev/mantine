import cx from 'clsx';
import { Box, BoxProps, ElementProps } from '../../core';
import { useModalBaseContext } from './ModalBase.context';
import classes from './ModalBase.module.css';

export interface ModalBaseFooterProps extends BoxProps, ElementProps<'footer'> {}

export function ModalBaseFooter({ className, ...others }: ModalBaseFooterProps) {
  const ctx = useModalBaseContext();
  return (
    <Box
      component="footer"
      className={cx({ [classes.footer]: !ctx.unstyled }, className)}
      {...others}
    />
  );
}

ModalBaseFooter.displayName = '@mantine/core/ModalBaseFooter';
