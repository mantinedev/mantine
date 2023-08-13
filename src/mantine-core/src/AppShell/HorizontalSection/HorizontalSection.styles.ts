import {
  createStyles,
  MantineNumberSize,
  getSize,
  rem,
  getBreakpointValue,
  em,
} from '@mantine/styles';
import { getSortedBreakpoints } from './get-sorted-breakpoints/get-sorted-breakpoints';

export type HorizontalSectionWidth = Partial<Record<string, string | number>>;

export interface HorizontalSectionPosition {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface HorizontalSectionStyles {
  width: Partial<Record<string, string | number>>;
  height: string | number;
  position: HorizontalSectionPosition;
  hiddenBreakpoint: MantineNumberSize;
  fixed: boolean;
  zIndex: React.CSSProperties['zIndex'];
  section: 'navbar' | 'aside';
  layout: 'default' | 'alt';
  withBorder: boolean;
}

export default createStyles(
  (
    theme,
    {
      height,
      width,
      fixed,
      position,
      hiddenBreakpoint,
      zIndex,
      section,
      withBorder,
      layout,
    }: HorizontalSectionStyles
  ) => {
    const breakpoints =
      typeof width === 'object' && width !== null
        ? getSortedBreakpoints(width, theme).reduce((acc, [breakpoint, breakpointSize]) => {
            acc[`@media (min-width: ${em(breakpoint)})`] = {
              width: rem(breakpointSize),
              minWidth: rem(breakpointSize),
            };

            return acc;
          }, {})
        : null;

    const borderStyles = withBorder
      ? {
          [section === 'navbar' ? 'borderRight' : 'borderLeft']: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
          }`,
        }
      : {};

    return {
      root: {
        ...theme.fn.fontStyles(),
        ...position,
        top: layout === 'alt' ? 0 : position?.top || 'var(--mantine-header-height)',
        bottom: 0,
        zIndex,
        height: height
          ? rem(height)
          : layout === 'alt'
          ? 'auto'
          : 'calc(100vh - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem))',
        width: width?.base ? rem(width?.base) : '100%',
        position: fixed ? 'fixed' : 'static',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        ...borderStyles,
        ...breakpoints,

        '&[data-hidden]': {
          [`@media (max-width: ${em(
            getBreakpointValue(
              getSize({
                size: hiddenBreakpoint,
                sizes: theme.breakpoints,
              })
            ) - 1
          )})`]: {
            display: 'none',
          },
        },
      },
    };
  }
);
