import { useComponentDefaultProps } from '@mantine/styles';
import React, { forwardRef } from 'react';
import { Overlay, OverlayProps } from '../../Overlay';
import { useModalBaseContext } from '../ModalBase.context';

export interface ModalBaseOverlayProps
  extends OverlayProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof OverlayProps> {}

const defaultProps: Partial<ModalBaseOverlayProps> = {};

export const ModalBaseOverlay = forwardRef<HTMLDivElement, ModalBaseOverlayProps>((props, ref) => {
  const ctx = useModalBaseContext();

  const { onClick, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Overlay`,
    defaultProps,
    props
  );

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
    ctx.closeOnClickOutside && ctx.onClose();
  };

  return <Overlay ref={ref} onClick={handleClick} fixed {...others} />;
});
