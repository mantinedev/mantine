import React from 'react';
import { DefaultProps, useContextStylesApi } from '@mantine/styles';
import { closeOnEscape } from '@mantine/utils';
import { useFocusReturn } from '@mantine/hooks';
import { FloatingArrow } from '../../Floating';
import { Box } from '../../Box';
import { Transition } from '../../Transition';
import { FocusTrap } from '../../FocusTrap';
import { OptionalPortal } from '../../Portal';
import { usePopoverContext } from '../Popover.context';
import useStyles from './PopoverDropdown.styles';

export interface PopoverDropdownProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Dropdown content */
  children?: React.ReactNode;
}

export function PopoverDropdown({ style, className, children, ...others }: PopoverDropdownProps) {
  const { classNames, styles, unstyled, staticSelector } = useContextStylesApi();
  const ctx = usePopoverContext();
  const { classes, cx } = useStyles(
    { radius: ctx.radius, shadow: ctx.shadow },
    { name: staticSelector, classNames, styles, unstyled }
  );

  const returnFocus = useFocusReturn({
    opened: ctx.opened,
    shouldReturnFocus: false,
  });

  const accessibleProps = ctx.withRoles
    ? {
        'aria-labelledby': ctx.getTargetId(),
        id: ctx.getDropdownId(),
        role: 'dialog',
      }
    : {};

  return (
    <OptionalPortal withinPortal={ctx.withinPortal}>
      <Transition
        mounted={ctx.opened}
        transition={ctx.transition}
        duration={ctx.transitionDuration}
        exitDuration={
          typeof ctx.exitTransitionDuration === 'number'
            ? ctx.exitTransitionDuration
            : ctx.transitionDuration
        }
      >
        {(transitionStyles) => (
          <FocusTrap active={ctx.trapFocus}>
            <Box
              {...accessibleProps}
              tabIndex={-1}
              ref={ctx.floating}
              style={{
                ...style,
                ...transitionStyles,
                zIndex: ctx.zIndex,
                top: ctx.y ?? '',
                left: ctx.x ?? '',
                width: ctx.width === 'target' ? undefined : ctx.width,
              }}
              className={cx(classes.dropdown, className)}
              onKeyDownCapture={closeOnEscape(ctx.onClose, {
                active: ctx.closeOnEscape,
                onTrigger: returnFocus,
              })}
              data-position={ctx.placement}
              {...others}
            >
              {children}

              <FloatingArrow
                ref={ctx.arrowRef}
                arrowX={ctx.arrowX}
                arrowY={ctx.arrowY}
                visible={ctx.withArrow}
                withBorder
                position={ctx.placement}
                arrowSize={ctx.arrowSize}
                arrowOffset={ctx.arrowOffset}
                className={classes.arrow}
              />
            </Box>
          </FocusTrap>
        )}
      </Transition>
    </OptionalPortal>
  );
}

PopoverDropdown.displayName = '@mantine/core/PopoverDropdown';
