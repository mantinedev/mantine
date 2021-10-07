import {
  createStyles,
  MantineNumberSize,
  getSizeValue,
  getFontStyles,
  getFocusStyles,
} from '@mantine/core';

interface DropzoneStyles {
  padding: MantineNumberSize;
  radius: MantineNumberSize;
}

export default createStyles((theme, { padding, radius }: DropzoneStyles) => ({
  root: {
    ...getFontStyles(theme),
    ...getFocusStyles(theme),
    backgroundColor: theme.white,
    border: `1px dashed ${theme.colors.gray[4]}`,
    padding: getSizeValue({ size: padding, sizes: theme.spacing }),
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'background-color 150ms ease',
    position: 'relative',

    '&:hover': {
      backgroundColor: theme.colors.gray[0],
    },
  },

  active: {
    backgroundColor: theme.colors[theme.primaryColor][0],
    borderColor: theme.colors[theme.primaryColor][4],
  },

  reject: {
    backgroundColor: theme.colors.red[0],
    borderColor: theme.colors.red[4],
  },
}));
