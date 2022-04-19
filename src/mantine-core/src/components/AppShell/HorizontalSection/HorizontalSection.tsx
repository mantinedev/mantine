import React, { forwardRef } from 'react';
import {
  ClassNames,
  DefaultProps,
  MantineNumberSize,
  getDefaultZIndex,
  ForwardRefWithStaticComponents,
  Global,
} from '@mantine/styles';
import { Box } from '../../Box';
import { useAppShellContext } from '../AppShell.context';
import { getSortedBreakpoints } from './get-sorted-breakpoints/get-sorted-breakpoints';
import { Section } from './Section/Section';
import useStyles, {
  HorizontalSectionPosition,
  HorizontalSectionWidth,
} from './HorizontalSection.styles';

export type HorizontalSectionStylesNames = ClassNames<typeof useStyles>;

export interface HorizontalSectionSharedProps extends DefaultProps<HorizontalSectionStylesNames> {
  /** Component width with breakpoints */
  width?: HorizontalSectionWidth;

  /** Component height */
  height?: string | number;

  /** HorizontalSection content */
  children: React.ReactNode;

  /** Set position to fixed */
  fixed?: boolean;

  /** Position for fixed variant */
  position?: HorizontalSectionPosition;

  /** Breakpoint at which component will be hidden if hidden prop is true */
  hiddenBreakpoint?: MantineNumberSize;

  /** Set to true to hide component at hiddenBreakpoint */
  hidden?: boolean;

  /** z-index */
  zIndex?: number;
}

export interface HorizontalSectionProps
  extends HorizontalSectionSharedProps,
    Omit<React.ComponentPropsWithRef<'nav'>, 'children'> {
  section: 'navbar' | 'aside';
  __staticSelector: string;
}

type HorizontalSectionComponent = ForwardRefWithStaticComponents<
  HorizontalSectionProps,
  { Section: typeof Section }
>;

export const HorizontalSection: HorizontalSectionComponent = forwardRef<
  HTMLElement,
  HorizontalSectionProps
>(
  (
    {
      width,
      height,
      fixed = false,
      position,
      zIndex = getDefaultZIndex('app'),
      hiddenBreakpoint = 'md',
      hidden = false,
      className,
      classNames,
      styles,
      children,
      section,
      __staticSelector,
      ...others
    }: HorizontalSectionProps,
    ref
  ) => {
    const ctx = useAppShellContext();

    const { classes, cx, theme } = useStyles(
      {
        width,
        height,
        fixed: ctx.fixed || fixed,
        position,
        hiddenBreakpoint,
        zIndex: ctx.zIndex || zIndex,
        section,
      },
      { classNames, styles, name: __staticSelector }
    );

    const breakpoints = getSortedBreakpoints(width, theme).reduce(
      (acc, [breakpoint, breakpointSize]) => {
        acc[`@media (min-width: ${breakpoint + 1}px)`] = {
          [`--mantine-${section}-width`]: `${breakpointSize}px`,
        };

        return acc;
      },
      {}
    );

    return (
      <Box
        component={section === 'navbar' ? 'nav' : 'aside'}
        ref={ref}
        className={cx(classes.root, { [classes.hidden]: hidden }, className)}
        {...others}
      >
        {children}

        <Global
          styles={() => ({
            ':root': {
              [`--mantine-${section}-width`]: width?.base ? `${width.base}px` : '0px',
              ...breakpoints,
            },
          })}
        />
      </Box>
    );
  }
) as any;

HorizontalSection.Section = Section;
HorizontalSection.displayName = '@mantine/core/HorizontalSection';
