import React, { forwardRef } from 'react';
import { useComponentDefaultProps } from '@mantine/styles';
import { CloseButton, CloseButtonProps } from '../../CloseButton';
import { useModalBaseContext } from '../ModalBase.context';

export interface ModalBaseCloseButtonProps
  extends CloseButtonProps,
    Omit<React.ComponentPropsWithoutRef<'button'>, keyof CloseButtonProps> {}

const defaultProps: Partial<ModalBaseCloseButtonProps> = {
  size: 'sm',
};

export const ModalBaseCloseButton = forwardRef<HTMLButtonElement, ModalBaseCloseButtonProps>(
  (props, ref) => {
    const ctx = useModalBaseContext();

    const { ...others } = useComponentDefaultProps(
      `${ctx.__staticSelector}CloseButton`,
      defaultProps,
      props
    );

    return <CloseButton ref={ref} onClick={ctx.onClose} {...others} />;
  }
);
