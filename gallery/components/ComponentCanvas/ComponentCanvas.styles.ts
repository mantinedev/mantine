import { createStyles } from '@mantine/core';

const BREAKPOINT = '@media (max-width: 755px)';

export default createStyles((theme, _params, getRef) => {
  const preview = getRef('preview');

  return {
    canvas: {
      borderRadius: theme.radius.md,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]
      }`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,

      '&:not(:first-of-type)': {
        marginTop: theme.spacing.xl * 2,
      },
    },

    body: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
      padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
      borderBottomRightRadius: theme.radius.md - 1,
      borderBottomLeftRadius: theme.radius.md - 1,

      [BREAKPOINT]: {
        padding: 0,
      },
    },

    bodyRaw: {
      padding: 0,

      [`& .${preview}`]: {
        padding: 4,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      },
    },

    bodyWithCode: {
      padding: 0,
      backgroundColor: theme.white,
    },

    previewDimmed: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    code: {
      borderBottomRightRadius: theme.radius.md - 1,
      borderBottomLeftRadius: theme.radius.md - 1,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
    },

    preview: {
      ref: preview,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      padding: theme.spacing.md,
      borderRadius: theme.radius.md,
      position: 'relative',

      [BREAKPOINT]: {
        padding: theme.spacing.xs,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
      },
    },
  };
});
