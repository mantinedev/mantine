import { createStyles, rem } from '@mantine/core';

export default createStyles((theme) => {
  const colors = theme.fn.variant({ variant: 'light' });
  return {
    linkEditor: {
      display: 'flex',
    },

    linkEditorInput: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      borderRight: 0,
    },

    linkEditorExternalControl: {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors.dark[7], 0.5) : theme.white,
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
      height: rem(24),
      width: rem(24),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.fn.radius(),

      '&[data-active]': {
        backgroundColor: colors.background,
        borderColor: colors.border,
        color: colors.color,
        ...theme.fn.hover({ background: colors.hover }),
      },
    },

    linkEditorSave: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  };
});
