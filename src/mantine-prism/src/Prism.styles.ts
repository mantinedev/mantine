import { MantineTheme, createMemoStyles } from '@mantine/core';

interface PrismStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  root: { position: 'relative' },

  code: ({ theme }: PrismStyles) => ({
    boxSizing: 'border-box',
    position: 'relative',
    fontFamily: theme.fontFamilyMonospace,
    lineHeight: 1.7,
    fontSize: 13,
    overflowX: 'auto',
    borderRadius: theme.radius.sm,
    padding: [theme.spacing.md, theme.spacing.lg],
    marginTop: 0,
    marginBottom: 0,
  }),

  copy: ({ theme }: PrismStyles) => ({
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs,
    zIndex: 2,
  }),

  line: {
    display: 'table-row',
  },

  lineNumber: ({ theme }: PrismStyles) => ({
    display: 'table-cell',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
    textAlign: 'right',
    paddingRight: theme.spacing.xl,
    userSelect: 'none',
  }),

  lineContent: {
    display: 'table-cell',
  },
});
