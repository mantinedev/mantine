import { MantineTheme, createMemoStyles } from '@mantine/core';

interface PrismStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  root: ({ theme }: PrismStyles) => ({
    position: 'relative',
    marginBottom: theme.spacing.xl,
  }),

  code: ({ theme }: PrismStyles) => ({
    boxSizing: 'border-box',
    position: 'relative',
    fontFamily: 'Menlo, Monaco, Lucida Console, monospace',
    lineHeight: 1.7,
    fontSize: 13,
    overflowX: 'auto',
    borderRadius: theme.radius.sm,
    padding: [theme.spacing.md, theme.spacing.lg],
  }),

  copy: ({ theme }: PrismStyles) => ({
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs,
    zIndex: 2,
  }),
});
