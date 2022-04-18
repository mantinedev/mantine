import { createStyles, MantineNumberSize } from '@mantine/core';

export interface FullScreenDropzoneStylesParams {
  offset: MantineNumberSize;
  padding: MantineNumberSize;
  radius: MantineNumberSize;
}

export default createStyles(
  (theme, { offset, padding, radius }: FullScreenDropzoneStylesParams) => {
    const spacing = theme.fn.size({ size: offset, sizes: theme.spacing });
    const rejected = theme.fn.variant({ color: 'red', variant: 'light' });
    const accepted = theme.fn.variant({ color: theme.primaryColor, variant: 'light' });

    return {
      root: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        padding: spacing,
      },

      dropzone: {
        ...theme.fn.fontStyles(),
        boxSizing: 'border-box',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        border: `2px dashed ${
          theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
        }`,
        padding: theme.fn.size({ size: padding, sizes: theme.spacing }),
        borderRadius: theme.fn.radius(radius),
        cursor: 'pointer',
        userSelect: 'none',
        transition: 'background-color 150ms ease',
        position: 'relative',
        height: `calc(100vh - ${spacing * 2}px)`,
      },

      active: {
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

      reject: {
        backgroundColor: theme.colorScheme === 'dark' ? rejected.background : theme.colors.red[0],
        borderColor: theme.colorScheme === 'dark' ? rejected.border : theme.colors.red[4],

        '&:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? rejected.background : theme.colors.red[0],
        },
      },
    };
  }
);
