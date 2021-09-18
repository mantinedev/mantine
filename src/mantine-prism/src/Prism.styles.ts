import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  root: { position: 'relative' },

  code: {
    boxSizing: 'border-box',
    position: 'relative',
    fontFamily: theme.fontFamilyMonospace,
    lineHeight: 1.7,
    fontSize: 13,
    overflowX: 'auto',
    borderRadius: theme.radius.sm,
    padding: [theme.spacing.sm, 0],
    marginTop: 0,
    marginBottom: 0,
  },

  copy: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs,
    zIndex: 2,
  },

  line: {
    display: 'flex',
    width: '100%',
    padding: [0, theme.spacing.md],
  },

  lineNumber: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
    textAlign: 'right',
    paddingRight: theme.spacing.xl,
    userSelect: 'none',
  },

  lineContent: {
    width: '100%',
  },
}));
