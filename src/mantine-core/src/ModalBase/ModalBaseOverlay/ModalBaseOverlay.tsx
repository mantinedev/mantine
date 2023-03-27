import { Selectors, useComponentDefaultProps } from '@mantine/styles';
import React, { forwardRef } from 'react';
import { Transition, TransitionOverride } from '../../Transition';
import { Overlay, OverlayProps } from '../../Overlay';
import { useModalBaseContext } from '../ModalBase.context';
import useStyles from './ModalBaseOverlay.styles';

export type ModalBaseOverlayStylesNames = Selectors<typeof useStyles>;

export interface ModalBaseOverlayProps
  extends OverlayProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof OverlayProps> {
  /** Props added to Transition component */
  transitionProps?: TransitionOverride;
}

const defaultProps: Partial<ModalBaseOverlayProps> = {};

export const ModalBaseOverlay = forwardRef<HTMLDivElement, ModalBaseOverlayProps>((props, ref) => {
  const ctx = useModalBaseContext();

  const { onClick, transitionProps, style, className, ...others } = useComponentDefaultProps(
    `${ctx.__staticSelector}Overlay`,
    defaultProps,
    props
  );

  const { classes, cx } = useStyles(null, ctx.stylesApi);

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
      {(transitionStyles) => (
        <Overlay
          ref={ref}
          onClick={handleClick}
          fixed
          style={{ ...style, ...transitionStyles }}
          className={cx(classes.overlay, className)}
          zIndex={ctx.zIndex}
          {...others}
        />
      )}
    </Transition>
  );
});
