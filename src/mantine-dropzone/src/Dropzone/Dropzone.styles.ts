import {
  createStyles,
  MantineNumberSize,
  getSizeValue,
  getFontStyles,
  getFocusStyles,
  getSharedColorScheme,
} from '@mantine/core';

interface DropzoneStyles {
  padding: MantineNumberSize;
  radius: MantineNumberSize;
}

export default createStyles((theme, { padding, radius }: DropzoneStyles) => {
  const rejected = getSharedColorScheme({ color: 'red', theme, variant: 'light' });
  const accepted = getSharedColorScheme({ color: theme.primaryColor, theme, variant: 'light' });

  return {
    root: {
      ...getFontStyles(theme),
      ...getFocusStyles(theme),
      boxSizing: 'border-box',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      border: `2px dashed ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
      }`,
      padding: getSizeValue({ size: padding, sizes: theme.spacing }),
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'background-color 150ms ease',
      position: 'relative',

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      },
    },

    loading: {
      cursor: 'default',

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      },
    },

    active: {
      backgroundColor:
        theme.colorScheme === 'dark' ? accepted.background : theme.colors[theme.primaryColor][0],
      borderColor:
        theme.colorScheme === 'dark' ? accepted.border : theme.colors[theme.primaryColor][4],

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark' ? accepted.background : theme.colors[theme.primaryColor][0],
      },
    },

    reject: {
      backgroundColor: theme.colorScheme === 'dark' ? rejected.background : theme.colors.red[0],
      borderColor: theme.colorScheme === 'dark' ? rejected.border : theme.colors.red[4],

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? rejected.background : theme.colors.red[0],
      },
    },
  };
});
