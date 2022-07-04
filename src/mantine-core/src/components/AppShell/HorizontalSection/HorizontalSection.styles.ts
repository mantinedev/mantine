import { createStyles, MantineNumberSize } from '@mantine/styles';
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
  zIndex: number;
  section: 'navbar' | 'aside';
}

export default createStyles(
  (
    theme,
    { height, width, fixed, position, hiddenBreakpoint, zIndex, section }: HorizontalSectionStyles
  ) => {
    const breakpoints =
      typeof width === 'object' && width !== null
        ? getSortedBreakpoints(width, theme).reduce((acc, [breakpoint, breakpointSize]) => {
            acc[`@media (min-width: ${breakpoint + 1}px)`] = {
              width: breakpointSize,
              minWidth: breakpointSize,
            };

            return acc;
          }, {})
        : null;

    return {
      root: {
        ...theme.fn.fontStyles(),
        ...position,
        top: position?.top || 'var(--mantine-header-height)',
        zIndex,
        height:
          height ||
          'calc(100vh - var(--mantine-header-height, 0px) - var(--mantine-footer-height, 0px))',
        width: width?.base || '100%',
        position: fixed ? 'fixed' : 'static',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        [section === 'navbar' ? 'borderRight' : 'borderLeft']: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
        ...breakpoints,
      },

      hidden: {
        [`@media (max-width: ${theme.fn.size({
          size: hiddenBreakpoint,
          sizes: theme.breakpoints,
        })}px)`]: {
          display: 'none',
        },
      },
    };
  }
);
