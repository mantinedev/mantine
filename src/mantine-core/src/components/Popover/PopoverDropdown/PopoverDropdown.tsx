import React from 'react';
import { DefaultProps, useContextStylesApi } from '@mantine/styles';
import { getArrowPositionStyles, closeOnEscape } from '@mantine/utils';
import { useFocusReturn } from '@mantine/hooks';
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
  const { classes, cx, theme } = useStyles(
    { radius: ctx.radius, shadow: ctx.shadow },
    { name: staticSelector, classNames, styles, unstyled }
  );

  const returnFocus = useFocusReturn({
    opened: ctx.opened,
    transitionDuration: 0,
    shouldReturnFocus: false,
  });

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
              tabIndex={-1}
              role="dialog"
              id={ctx.getDropdownId()}
              aria-labelledby={ctx.getTargetId()}
              ref={ctx.floating}
              style={{
                ...style,
                ...transitionStyles,
                zIndex: ctx.zIndex,
                top: ctx.y ?? '',
                left: ctx.x ?? '',
                width: ctx.width === 'target' ? undefined : ctx.width,
              }}
              className={cx(classes.root, className)}
              onKeyDownCapture={closeOnEscape(ctx.onClose, {
                active: ctx.closeOnEscape,
                onTrigger: returnFocus,
              })}
              {...others}
            >
              {children}

              {ctx.withArrow && (
                <div
                  className={classes.arrow}
                  style={getArrowPositionStyles({
                    withBorder: true,
                    position: ctx.placement,
                    arrowSize: ctx.arrowSize,
                    arrowOffset: ctx.arrowOffset,
                    dir: theme.dir,
                  })}
                />
              )}
            </Box>
          </FocusTrap>
        )}
      </Transition>
    </OptionalPortal>
  );
}

PopoverDropdown.displayName = '@mantine/core/PopoverDropdown';
