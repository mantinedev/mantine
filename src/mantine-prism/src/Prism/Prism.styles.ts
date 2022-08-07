import { createStyles, MantineNumberSize } from '@mantine/core';

export interface PrismStylesParams {
  colorScheme: 'light' | 'dark';
  native: boolean;
  maxLineSize: number;
  radius: MantineNumberSize;
}

export default createStyles(
  (theme, { colorScheme, native, maxLineSize, radius }: PrismStylesParams) => ({
    scrollArea: {},

    root: {
      position: 'relative',
    },

    code: {
      boxSizing: 'border-box',
      position: 'relative',
      fontFamily: theme.fontFamilyMonospace,
      lineHeight: 1.7,
      fontSize: 13,
      overflowX: native ? 'auto' : undefined,
      borderRadius: theme.fn.radius(radius),
      padding: `${theme.spacing.sm}px 0`,
      marginTop: 0,
      marginBottom: 0,
    },

    copy: {
      position: 'absolute',
      top: theme.spacing.xs,
      right: theme.dir === 'ltr' ? theme.spacing.xs : 'unset',
      left: theme.dir === 'rtl' ? theme.spacing.xs : 'unset',
      zIndex: 2,
    },

    line: {
      display: 'flex',
      width: '100%',
      padding: `0 ${theme.spacing.md}px`,
    },

    lineNumber: {
      color: colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
      textAlign: 'right',
      width: 8 * maxLineSize,
      marginRight: theme.dir === 'ltr' ? theme.spacing.xs : undefined,
      marginLeft: theme.dir === 'rtl' ? theme.spacing.xs : undefined,
      userSelect: 'none',
    },

    lineContent: {
      width: '100%',
    },
  })
);
