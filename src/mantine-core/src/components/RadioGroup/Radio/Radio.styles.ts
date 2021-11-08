import { createStyles, MantineSize, MantineColor } from '@mantine/styles';

interface RadioStyles {
  size: MantineSize;
  color: MantineColor;
}

export const sizes = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 36,
};

export default createStyles((theme, { size, color }: RadioStyles, getRef) => {
  const labelDisabled = { ref: getRef('labelDisabled') } as const;

  return {
    labelDisabled,

    radioWrapper: {
      display: 'flex',
      alignItems: 'center',
      WebkitTapHighlightColor: 'transparent',
    },

    radio: {
      ...theme.fn.focusStyles(),
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
      }`,
      position: 'relative',
      appearance: 'none',
      width: theme.fn.size({ sizes, size }),
      height: theme.fn.size({ sizes, size }),
      borderRadius: theme.fn.size({ sizes, size }),
      margin: 0,
      marginRight: theme.spacing.sm,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&:checked': {
        background: theme.fn.themeColor(color, 6),
        borderColor: theme.fn.themeColor(color, 6),

        '&::before': {
          content: '""',
          display: 'block',
          backgroundColor: theme.white,
          width: theme.fn.size({ sizes, size }) / 2,
          height: theme.fn.size({ sizes, size }) / 2,
          borderRadius: theme.fn.size({ sizes, size }) / 2,
        },
      },

      '&:disabled': {
        borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[4],
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],

        '&::before': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[4],
        },
      },
    },

    label: {
      ...theme.fn.fontStyles(),
      display: 'flex',
      alignItems: 'center',
      fontSize: theme.fontSizes[size] || theme.fontSizes.md,
      lineHeight: `${theme.fn.size({ sizes, size })}px`,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      [`&.${labelDisabled.ref}`]: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
      },
    },
  };
});
