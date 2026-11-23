import { useCallback, useState } from 'react';
import cx from 'clsx';
import { BoxProps, ElementProps, MantineRadius, MantineShadow } from '../../core';
import { FocusTrap } from '../FocusTrap';
import { Paper } from '../Paper';
import { Transition, TransitionOverride } from '../Transition';
import { ModalFloatingPortalProvider } from './modal-floating-portal.context';
import { useModalBaseContext } from './ModalBase.context';
import classes from './ModalBase.module.css';

const floatingPortalStyle: React.CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 'auto',
  bottom: 'auto',
  width: 0,
  height: 0,
  minWidth: 0,
  minHeight: 0,
  margin: 0,
  padding: 0,
  border: 'none',
  background: 'none',
  overflow: 'visible',
  pointerEvents: 'none',
  boxShadow: 'none',
};

function openFloatingPortal(node: HTMLDivElement) {
  if (typeof node.showPopover !== 'function') {
    return;
  }

  try {
    if (!node.matches(':popover-open')) {
      node.showPopover();
    }
  } catch {
    /* Popover API throws when the node is already open or not connected. */
  }
}

export interface ModalBaseContentProps extends BoxProps, ElementProps<'div'> {
  /** Props passed down to the `Transition` component */
  transitionProps?: TransitionOverride;

  /** Key of `theme.shadows` or any valid CSS value to set `box-shadow` */
  shadow?: MantineShadow;

  /** Key of `theme.radius` or any valid CSS value to set border-radius, numbers are converted to rem @default theme.defaultRadius */
  radius?: MantineRadius;
}

interface _ModalBaseContentProps extends ModalBaseContentProps {
  innerProps: React.ComponentProps<'div'>;
}

export function ModalBaseContent({
  transitionProps,
  className,
  innerProps,
  onKeyDown,
  style,
  ref,
  ...others
}: _ModalBaseContentProps) {
  const ctx = useModalBaseContext();
  const [portalTarget, setPortalTarget] = useState<HTMLDivElement | null>(null);
  const assignPortalNode = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      openFloatingPortal(node);
    }
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
        >
          <FocusTrap active={ctx.opened && ctx.trapFocus} innerRef={ref}>
            <Paper
              {...others}
              component="section"
              role="dialog"
              tabIndex={-1}
              aria-modal
              aria-describedby={ctx.bodyMounted ? ctx.getBodyId() : undefined}
              aria-labelledby={ctx.titleMounted ? ctx.getTitleId() : undefined}
              style={[style, transitionStyles]}
              className={cx({ [classes.content]: !ctx.unstyled }, className)}
              unstyled={ctx.unstyled}
            >
              <div className={classes.floatingContent}>
                <ModalFloatingPortalProvider target={portalTarget}>
                  {others.children}
                </ModalFloatingPortalProvider>
              </div>
              <div
                ref={assignPortalNode}
                popover="manual"
                className={classes.floatingPortal}
                style={floatingPortalStyle}
                data-mantine-modal-floating-portal
              />
            </Paper>
          </FocusTrap>
        </div>
      )}
    </Transition>
  );
}

ModalBaseContent.displayName = '@mantine/core/ModalBaseContent';
