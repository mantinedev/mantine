import { forwardRef } from 'react';
import { ElementProps } from '../../core';
import { Overlay, OverlayProps } from '../Overlay';
import { Transition, TransitionOverride } from '../Transition';
import { useModalBaseContext } from './ModalBase.context';
import { useModalTransition } from './use-modal-transition';

export interface ModalBaseOverlayProps
  extends Omit<OverlayProps, 'styles' | 'classNames' | 'variant' | 'vars'>,
    ElementProps<'div', 'color'> {
  /** Props passed down to the `Transition` component */
  transitionProps?: TransitionOverride;

  /** Determines whether the overlay should be visible. By default, has the same value as `opened` state. */
  visible?: boolean;
}

export const ModalBaseOverlay = forwardRef<HTMLDivElement, ModalBaseOverlayProps>(
  ({ onClick, transitionProps, style, visible, ...others }, ref) => {
    const ctx = useModalBaseContext();
    const transition = useModalTransition(transitionProps);

    return (
      <Transition
        mounted={visible !== undefined ? visible : ctx.opened}
        {...transition}
        transition="fade"
      >
        {(transitionStyles) => (
          <Overlay
            ref={ref}
            fixed
            style={[style, transitionStyles]}
            zIndex={ctx.zIndex}
            unstyled={ctx.unstyled}
            onClick={(event) => {
              onClick?.(event);
              ctx.closeOnClickOutside && ctx.onClose();
            }}
            {...others}
          />
        )}
      </Transition>
    );
  }
);

ModalBaseOverlay.displayName = '@mantine/core/ModalBaseOverlay';
