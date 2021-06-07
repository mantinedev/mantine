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
});
