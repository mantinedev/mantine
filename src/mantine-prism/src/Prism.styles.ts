import { createStyles } from '@mantine/core';

interface PrismStyles {
  colorScheme: 'light' | 'dark';
  native: boolean;
}

export default createStyles((theme, { colorScheme, native }: PrismStyles) => ({
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
    borderRadius: theme.radius.sm,
    padding: `${theme.spacing.sm}px 0`,
    marginTop: 0,
    marginBottom: 0,
  },

  copy: {
    position: 'absolute' as any,
    top: theme.spacing.xs,
    right: theme.spacing.xs,
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
    paddingRight: theme.spacing.xl,
    userSelect: 'none',
  },

  lineContent: {
    width: '100%',
  },
}));
