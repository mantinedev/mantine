import { createStyles, MantineNumberSize, rem } from '@mantine/core';

export interface PrismStylesParams {
  colorScheme: 'light' | 'dark';
  native: boolean;
  maxLineSize: number | string;
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
      fontSize: rem(13),
      overflowX: native ? 'auto' : undefined,
      borderRadius: theme.fn.radius(radius),
      padding: `${theme.spacing.sm} 0`,

      '&.mantine-Prism-code': {
        marginTop: 0,
        marginBottom: 0,
      },
    },

    copy: {
      position: 'absolute',
      top: theme.spacing.xs,
      right: theme.dir === 'ltr' ? theme.spacing.xs : 'unset',
      left: theme.dir === 'rtl' ? theme.spacing.xs : 'unset',
      zIndex: 2,

      '&, &:hover': {
        backgroundColor: colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
      },
    },

    line: {
      display: 'flex',
      width: '100%',
      padding: `0 ${theme.spacing.md}`,
    },

    lineNumber: {
      color: colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
      textAlign: 'right',
      width: `calc(8 * ${rem(maxLineSize)})`,
      marginRight: theme.dir === 'ltr' ? theme.spacing.xs : undefined,
      marginLeft: theme.dir === 'rtl' ? theme.spacing.xs : undefined,
      userSelect: 'none',
    },

    lineContent: {
      width: '100%',
    },
  })
);
