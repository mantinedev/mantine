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
  },

  active: {
    backgroundColor: theme.colors[theme.primaryColor][0],
    borderColor: theme.colors[theme.primaryColor][4],
  },
}));
