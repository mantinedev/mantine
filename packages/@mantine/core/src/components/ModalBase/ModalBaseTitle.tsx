import cx from 'clsx';
import { Box, BoxProps, ElementProps } from '../../core';
import { useModalBaseContext } from './ModalBase.context';
import classes from './ModalBase.module.css';
import { useModalTitle } from './use-modal-title-id';

export interface ModalBaseTitleProps extends BoxProps, ElementProps<'h2'> {}

export function ModalBaseTitle({ className, ...others }: ModalBaseTitleProps) {
  const id = useModalTitle();
  const ctx = useModalBaseContext();
  return (
    <Box
      component="h2"
      className={cx({ [classes.title]: !ctx.unstyled }, className)}
      id={id}
      {...others}
    />
  );
}

ModalBaseTitle.displayName = '@mantine/core/ModalBaseTitle';
