import cx from 'clsx';
import { Box, BoxProps, ElementProps } from '../../core';
import { useModalBaseContext } from './ModalBase.context';
import classes from './ModalBase.module.css';

export interface ModalBaseHeaderProps extends BoxProps, ElementProps<'header'> {}

export function ModalBaseHeader({ className, ...others }: ModalBaseHeaderProps) {
  const ctx = useModalBaseContext();
  return (
    <Box
      component="header"
      className={cx({ [classes.header]: !ctx.unstyled }, className)}
      {...others}
    />
  );
}

ModalBaseHeader.displayName = '@mantine/core/ModalBaseHeader';
