import {
  getFontStyles,
  getFocusStyles,
  createStyles,
  MantineSize,
  getSizeValue,
  hexToRgba,
} from '@mantine/core';

interface DayStyles {
  size: MantineSize;
  fullWidth: boolean;
}

export const sizes = {
  xs: 34,
  sm: 38,
  md: 46,
  lg: 58,
  xl: 66,
};

export default createStyles((theme, { size, fullWidth }: DayStyles, getRef) => {
  const weekend = { ref: getRef('weekend') } as const;
  const outside = { ref: getRef('outside') } as const;
  const selected = { ref: getRef('selected') } as const;
  const inRange = { ref: getRef('inRange') } as const;
  const firstInRange = { ref: getRef('firstInRange') } as const;
  const lastInRange = { ref: getRef('lastInRange') } as const;

  return {
    weekend,
    outside,
    selected,
    inRange,
    firstInRange,
    lastInRange,

    day: {
      ...getFontStyles(theme),
      ...getFocusStyles(theme),
      position: 'relative',
      WebkitTapHighlightColor: 'transparent',
      backgroundColor: 'transparent',
      width: fullWidth ? '100%' : getSizeValue({ size, sizes }),
      height: getSizeValue({ size, sizes }),
      lineHeight: `${getSizeValue({ size, sizes })}px`,
      fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
      padding: 0,
      borderRadius: theme.radius.sm,
      border: '1px dotted transparent',
      cursor: 'pointer',
      userSelect: 'none',
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

      '&:disabled': {
        pointerEvents: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
      },

      '&:hover': {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      },

      [`&.${weekend.ref}:not(:disabled)`]: {
        color: theme.colorScheme === 'dark' ? theme.colors.red[5] : theme.colors.red[7],
      },

      [`&.${outside.ref}`]: {
        color: `${
          theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
        } !important`,
      },

      [`&.${inRange.ref}:not(:disabled)`]: {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? hexToRgba(theme.colors[theme.primaryColor][9], 0.3)
            : theme.colors[theme.primaryColor][0],
        borderRadius: 0,
      },

      [`&.${selected.ref}:not(:disabled)`]: {
        backgroundColor: theme.colors[theme.primaryColor][6],
        color: theme.white,
      },

      [`&.${firstInRange.ref}:not(:disabled)`]: {
        borderTopLeftRadius: theme.radius.sm,
        borderBottomLeftRadius: theme.radius.sm,
      },

      [`&.${lastInRange.ref}:not(:disabled)`]: {
        borderTopRightRadius: theme.radius.sm,
        borderBottomRightRadius: theme.radius.sm,
      },
    },
  };
});
