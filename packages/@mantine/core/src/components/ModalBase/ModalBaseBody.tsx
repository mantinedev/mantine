import cx from 'clsx';
import { Box, BoxProps, ElementProps } from '../../core';
import { useModalBaseContext } from './ModalBase.context';
import classes from './ModalBase.module.css';
import { useModalBodyId } from './use-modal-body-id';

export interface ModalBaseBodyProps extends BoxProps, ElementProps<'div'> {}

export function ModalBaseBody({ className, ...others }: ModalBaseBodyProps) {
  const bodyId = useModalBodyId();
  const ctx = useModalBaseContext();
  return (
    <Box id={bodyId} className={cx({ [classes.body]: !ctx.unstyled }, className)} {...others} />
  );
}

ModalBaseBody.displayName = '@mantine/core/ModalBaseBody';
