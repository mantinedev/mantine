import cx from 'clsx';
import { BoxProps, ElementProps } from '../../core';
import { __CloseButtonProps, CloseButton } from '../CloseButton';
import { useModalBaseContext } from './ModalBase.context';
import classes from './ModalBase.module.css';

export interface ModalBaseCloseButtonProps
  extends __CloseButtonProps, BoxProps, ElementProps<'button'> {}

export function ModalBaseCloseButton({ className, onClick, ...others }: ModalBaseCloseButtonProps) {
  const ctx = useModalBaseContext();
  return (
    <CloseButton
      {...others}
      onClick={(event) => {
        ctx.onClose();
        onClick?.(event);
      }}
      className={cx({ [classes.close]: !ctx.unstyled }, className)}
      unstyled={ctx.unstyled}
    />
  );
}

ModalBaseCloseButton.displayName = '@mantine/core/ModalBaseCloseButton';
