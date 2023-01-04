import { useComponentDefaultProps } from '@mantine/styles';
import React, { forwardRef } from 'react';
import { Transition, TransitionProps } from '../../Transition';
import { Overlay, OverlayProps } from '../../Overlay';
import { useModalBaseContext } from '../ModalBase.context';

export interface ModalBaseOverlayProps
  extends OverlayProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof OverlayProps> {
  /** Props added to Transition component */
  transitionProps?: Partial<Omit<TransitionProps, 'mounted'>>;
}

const defaultProps: Partial<ModalBaseOverlayProps> = {};

export const ModalBaseOverlay = forwardRef<HTMLDivElement, ModalBaseOverlayProps>((props, ref) => {
  const ctx = useModalBaseContext();

  const { onClick, transitionProps, style, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Overlay`,
    defaultProps,
    props
  );

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
    ctx.closeOnClickOutside && ctx.onClose();
  };

  return (
    <Transition
      mounted={ctx.opened}
      {...ctx.transitionProps}
      {...transitionProps}
      transition="fade"
    >
      {(styles) => (
        <Overlay
          ref={ref}
          onClick={handleClick}
          fixed
          style={{ ...style, ...styles }}
          {...others}
        />
      )}
    </Transition>
  );
});
