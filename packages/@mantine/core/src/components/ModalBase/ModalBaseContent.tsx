import { forwardRef, useCallback, useState } from 'react';
import cx from 'clsx';
import {
  BoxProps,
  ElementProps,
  FloatingPortalProvider,
  MantineRadius,
  MantineShadow,
} from '../../core';
import { FocusTrap } from '../FocusTrap';
import { Paper } from '../Paper';
import { Transition, TransitionOverride } from '../Transition';
import { useModalBaseContext } from './ModalBase.context';
import classes from './ModalBase.module.css';

export interface ModalBaseContentProps extends BoxProps, ElementProps<'div'> {
  /** Props passed down to the `Transition` component */
  transitionProps?: TransitionOverride;

  /** Key of `theme.shadows` or any valid CSS value to set `box-shadow` */
  shadow?: MantineShadow;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem @default `theme.defaultRadius` */
  radius?: MantineRadius;
}

interface _ModalBaseContentProps extends ModalBaseContentProps {
  innerProps: React.ComponentPropsWithoutRef<'div'>;
}

export const ModalBaseContent = forwardRef<HTMLDivElement, _ModalBaseContentProps>(
  ({ transitionProps, className, innerProps, onKeyDown, style, ...others }, ref) => {
    const ctx = useModalBaseContext();
    const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);

    const portalTargetRef = useCallback((node: HTMLDivElement | null) => {
      setPortalTarget(node);
    }, []);

    return (
      <Transition
        mounted={ctx.opened}
        transition="pop"
        {...ctx.transitionProps}
        onExited={() => {
          ctx.onExitTransitionEnd?.();
          ctx.transitionProps?.onExited?.();
        }}
        onEntered={() => {
          ctx.onEnterTransitionEnd?.();
          ctx.transitionProps?.onEntered?.();
        }}
        {...transitionProps}
      >
        {(transitionStyles) => (
          <div
            {...innerProps}
            className={cx({ [classes.inner]: !ctx.unstyled }, innerProps.className)}
            role="dialog"
            aria-modal
            aria-describedby={ctx.bodyMounted ? ctx.getBodyId() : undefined}
            aria-labelledby={ctx.titleMounted ? ctx.getTitleId() : undefined}
          >
            <FocusTrap active={ctx.opened && ctx.trapFocus} innerRef={ref}>
              <Paper
                {...others}
                tabIndex={-1}
                style={[style, transitionStyles]}
                className={cx({ [classes.content]: !ctx.unstyled }, className)}
                unstyled={ctx.unstyled}
              >
                <FloatingPortalProvider portalTarget={portalTarget}>
                  {others.children}
                </FloatingPortalProvider>
              </Paper>
            </FocusTrap>
            <div
              ref={portalTargetRef}
              data-floating-portal
              className={cx({ [classes.portal]: !ctx.unstyled })}
            />
          </div>
        )}
      </Transition>
    );
  }
);

ModalBaseContent.displayName = '@mantine/core/ModalBaseContent';
