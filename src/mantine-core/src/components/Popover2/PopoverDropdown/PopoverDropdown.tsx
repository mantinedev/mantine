import React from 'react';
import { DefaultProps, useContextStylesApi } from '@mantine/styles';
import { getArrowPositionStyles } from '@mantine/utils';
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
  const { classNames, styles, unstyled } = useContextStylesApi();
  const ctx = usePopoverContext();
  const { classes, cx, theme } = useStyles(
    { radius: ctx.radius, shadow: ctx.shadow },
    { name: 'Popover', classNames, styles, unstyled }
  );

  return (
    <OptionalPortal withinPortal={ctx.withinPortal}>
      <Transition
        mounted={ctx.opened}
        transition={ctx.transition}
        duration={ctx.transitionDuration}
      >
        {(transitionStyles) => (
          <FocusTrap active={ctx.trapFocus}>
            <Box
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
