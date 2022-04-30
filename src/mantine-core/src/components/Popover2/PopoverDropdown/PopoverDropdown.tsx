import React from 'react';
import { DefaultProps } from '@mantine/styles';
import { getArrowPositionStyles } from '@mantine/utils';
import { usePopoverContext } from '../Popover.context';
import { Box } from '../../Box';
import { Transition } from '../../Transition';
import useStyles from './PopoverDropdown.styles';

export interface PopoverDropdownProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Dropdown z-index */
  zIndex?: number;
}

export function PopoverDropdown({ style, zIndex, className, ...others }: PopoverDropdownProps) {
  const ctx = usePopoverContext();
  const { classes, cx, theme } = useStyles();

  return (
    <Transition mounted={ctx.opened} transition={ctx.transition} duration={ctx.transitionDuration}>
      {(transitionStyles) => (
        <Box
          ref={ctx.floating}
          style={{ ...style, ...transitionStyles, top: ctx.y ?? '', left: ctx.x ?? '' }}
          className={cx(classes.root, className)}
          {...others}
        >
          Dropdown
          {ctx.withArrow && (
            <div
              className={classes.arrow}
              style={getArrowPositionStyles({
                position: ctx.placement,
                arrowSize: ctx.arrowSize,
                arrowOffset: ctx.arrowOffset,
                dir: theme.dir,
              })}
            />
          )}
        </Box>
      )}
    </Transition>
  );
}

PopoverDropdown.displayName = '@mantine/core/PopoverDropdown';
