import { createUseStyles } from 'react-jss';
import {
  MantineTheme,
  getFontStyles,
  MantineNumberSize,
  getSizeValue,
  getThemeColor,
} from '@mantine/theme';

interface SegmentedControlStyles {
  theme: MantineTheme;
  fullWidth: boolean;
  color: string;
  radius: MantineNumberSize;
}

export default createUseStyles({
  controlActive: {},

  input: {
    display: 'none',
  },

  wrapper: ({ theme, fullWidth, radius }: SegmentedControlStyles) => ({
    position: 'relative',
    display: fullWidth ? 'flex' : 'inline-flex',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    overflow: 'hidden',
    padding: 4,
  }),

  control: {
    boxSizing: 'border-box',
    flex: 1,
    zIndex: 2,
  },

  label: ({ theme, color, radius }: SegmentedControlStyles) => ({
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    ...getFontStyles(theme),
    fontSize: theme.fontSizes.sm,
    cursor: 'pointer',
    display: 'block',
    textAlign: 'center',
    padding: [5, theme.spacing.md],
    whiteSpace: 'nowrap',
    color:
      color in theme.colors
        ? theme.white
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
  }),

  active: ({ theme, color, radius }: SegmentedControlStyles) => ({
    boxSizing: 'border-box',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    position: 'absolute',
    top: 4,
    bottom: 4,
    zIndex: 1,
    // border: `1px solid ${theme.colors.gray[2]}`,
    boxShadow: theme.shadows.xs,
    transition: `transform 200ms ${theme.transitionTimingFunction}, width 200ms ${theme.transitionTimingFunction}`,
    backgroundColor:
      color in theme.colors ? getThemeColor({ theme, color, shade: 6 }) : theme.white,
  }),
});
