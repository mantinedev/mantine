import { createStyles, MantineNumberSize, rem } from '@mantine/core';

export interface DefaultActionStylesParams {
  radius: MantineNumberSize;
}

export default createStyles((theme, { radius }: DefaultActionStylesParams) => ({
  action: {
    position: 'relative',
    display: 'block',
    width: '100%',
    padding: `${rem(10)} ${rem(12)}`,
    borderRadius: theme.fn.radius(radius),
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
    }),

    '&[data-hovered]': {
      backgroundColor: theme.fn.primaryColor(),
      color: theme.white,
      ...theme.fn.hover({
        backgroundColor: theme.fn.primaryColor(),
      }),
    },
  },

  actionDescription: {
    color: theme.fn.dimmed(),

    '&[data-hovered]': {
      color: theme.white,
      opacity: 0.7,
    },
  },

  actionIcon: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],

    '&[data-hovered]': {
      color: theme.white,
      opacity: 0.7,
    },
  },

  actionBody: {},

  actionHighlight: {
    '& [data-highlight]': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.black,
    },
  },
}));
