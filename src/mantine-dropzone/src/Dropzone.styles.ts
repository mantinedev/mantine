import { createStyles, MantineNumberSize, rem, getSize } from '@mantine/core';

export interface DropzoneStylesParams {
  padding: MantineNumberSize;
  radius: MantineNumberSize;
}

export default createStyles((theme, { padding, radius }: DropzoneStylesParams) => {
  const rejected = theme.fn.variant({ color: 'red', variant: 'light' });
  const accepted = theme.fn.variant({ color: theme.primaryColor, variant: 'light' });

  return {
    root: {
      ...theme.fn.fontStyles(),
      ...theme.fn.focusStyles(),
      boxSizing: 'border-box',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      border: `${rem(2)} dashed ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
      padding: getSize({ size: padding, sizes: theme.spacing }),
      borderRadius: theme.fn.radius(radius),
      cursor: 'pointer',
      userSelect: 'none',
      transition: 'background-color 150ms ease',
      position: 'relative',

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      },

      '&[data-loading]': {
        cursor: 'default',

        '&:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        },
      },

      '&[data-accept]': {
        backgroundColor:
          theme.colorScheme === 'dark' ? accepted.background : theme.colors[theme.primaryColor][0],
        borderColor:
          theme.colorScheme === 'dark' ? accepted.border : theme.colors[theme.primaryColor][4],

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? accepted.background
              : theme.colors[theme.primaryColor][0],
        },
      },

      '&[data-reject]': {
        backgroundColor: theme.colorScheme === 'dark' ? rejected.background : theme.colors.red[0],
        borderColor: theme.colorScheme === 'dark' ? rejected.border : theme.colors.red[4],

        '&:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? rejected.background : theme.colors.red[0],
        },
      },
    },

    inner: {
      pointerEvents: 'none',
      userSelect: 'none',
    },
  };
});
