import { createStyles, MantineNumberSize, rem, getSize } from '@mantine/styles';

interface DefaultLabelStyles {
  radius: MantineNumberSize;
  disabled: boolean;
  readOnly: boolean;
}

export const sizes = {
  xs: rem(16),
  sm: rem(22),
  md: rem(26),
  lg: rem(30),
  xl: rem(36),
};

const fontSizes = {
  xs: rem(10),
  sm: rem(12),
  md: rem(14),
  lg: rem(16),
  xl: rem(18),
};

export default createStyles(
  (theme, { disabled, radius, readOnly }: DefaultLabelStyles, { size, variant }) => ({
    defaultValue: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: disabled
        ? theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[3]
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : variant === 'filled'
        ? theme.white
        : theme.colors.gray[1],
      color: disabled
        ? theme.colorScheme === 'dark'
          ? theme.colors.dark[1]
          : theme.colors.gray[7]
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
      height: getSize({ size, sizes }),
      paddingLeft: `calc(${getSize({ size, sizes: theme.spacing })} / 1.5)`,
      paddingRight: disabled || readOnly ? getSize({ size, sizes: theme.spacing }) : 0,
      fontWeight: 500,
      fontSize: getSize({ size, sizes: fontSizes }),
      borderRadius: getSize({ size: radius, sizes: theme.radius }),
      cursor: disabled ? 'not-allowed' : 'default',
      userSelect: 'none',
      maxWidth: `calc(100% - ${rem(10)})`,
    },

    defaultValueRemove: {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      marginLeft: `calc(${getSize({ size, sizes: theme.spacing })} / 6)`,
    },

    defaultValueLabel: {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  })
);
