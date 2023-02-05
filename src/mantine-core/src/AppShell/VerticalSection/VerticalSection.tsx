import React, { forwardRef } from 'react';
import { DefaultProps, getDefaultZIndex, Global, rem, em } from '@mantine/styles';
import { Box } from '../../Box';
import { useAppShellContext } from '../AppShell.context';
import useStyles, {
  VerticalSectionHeight,
  VerticalSectionPosition,
} from './VerticalSection.styles';
import { getSortedBreakpoints } from '../HorizontalSection/get-sorted-breakpoints/get-sorted-breakpoints';

export interface VerticalSectionSharedProps extends DefaultProps {
  variant?: string;

  /** Section content */
  children: React.ReactNode;

  /** Component height with breakpoints */
  height: VerticalSectionHeight;

  /** Determines whether the element should have border */
  withBorder?: boolean;

  /** Changes position to fixed, controlled by AppShell component if rendered inside */
  fixed?: boolean;

  /** Control top, left, right or bottom position values, controlled by AppShell component if rendered inside */
  position?: VerticalSectionPosition;

  /** z-index */
  zIndex?: React.CSSProperties['zIndex'];
}

interface VerticalSectionProps
  extends VerticalSectionSharedProps,
    Omit<React.ComponentPropsWithoutRef<'div'>, 'children'> {
  section: 'header' | 'footer';
  __staticSelector: string;
}

export const VerticalSection = forwardRef<HTMLElement, VerticalSectionProps>(
  (
    {
      children,
      className,
      classNames,
      styles,
      height,
      fixed = false,
      withBorder = true,
      position,
      zIndex,
      section,
      unstyled,
      __staticSelector,
      variant,
      ...others
    }: VerticalSectionProps,
    ref
  ) => {
    const ctx = useAppShellContext();
    const _zIndex = zIndex || ctx.zIndex || getDefaultZIndex('app');

    const { classes, cx, theme } = useStyles(
      {
        height,
        fixed: ctx.fixed || fixed,
        position,
        zIndex: typeof _zIndex === 'number' && ctx.layout === 'default' ? _zIndex + 1 : _zIndex,
        layout: ctx.layout,
        borderPosition: withBorder ? (section === 'header' ? 'bottom' : 'top') : 'none',
      },
      { name: __staticSelector, classNames, styles, unstyled, variant }
    );
    const breakpoints =
      typeof height === 'object' && height !== null
        ? getSortedBreakpoints(height, theme).reduce((acc, [breakpoint, breakpointSize]) => {
            acc[`@media (min-width: ${em(breakpoint)})`] = {
              [`--mantine-${section}-height`]: rem(breakpointSize),
            };

            return acc;
          }, {})
        : null;

    return (
      <Box
        component={section === 'header' ? 'header' : 'footer'}
        className={cx(classes.root, className)}
        ref={ref}
        {...others}
      >
        {children}
        <Global
          styles={() => ({
            ':root': {
              [`--mantine-${section}-height`]:
                typeof height === 'object' ? rem(height?.base) || '100%' : rem(height),
              ...breakpoints,
            },
          })}
        />
      </Box>
    );
  }
);

VerticalSection.displayName = '@mantine/core/VerticalSection';
