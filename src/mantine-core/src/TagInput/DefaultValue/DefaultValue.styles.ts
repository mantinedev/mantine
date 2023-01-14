import { createStyles, MantineNumberSize, MantineSize, getSize, rem } from '@mantine/styles';

interface DefaultLabelStyles {
  size: MantineSize;
  radius: MantineNumberSize;
  disabled: boolean;
}

const sizes = {
  xs: rem(16),
  sm: rem(20),
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

export default createStyles((theme, { size, disabled, radius }: DefaultLabelStyles) => ({
  defaultValue: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: disabled
      ? theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[3]
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[7]
      : theme.colors.gray[1],
    color: disabled
      ? theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7]
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[0]
      : theme.colors.gray[7],
    lineHeight: 1,
    height: getSize({ size, sizes }),
    paddingLeft: `calc(${getSize({ size, sizes: theme.spacing })} / 1.5)`,
    paddingRight: disabled ? `calc(${getSize({ size, sizes: theme.spacing })} / 1.5)` : 0,
    fontWeight: 500,
    fontSize: getSize({ size, sizes: fontSizes }),
    borderRadius: theme.fn.radius(radius),
    cursor: disabled ? 'not-allowed' : 'default',
    userSelect: 'none',
    maxWidth: `calc(100% - ${rem(20)})`,
  },

  defaultValueRemove: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
  },

  label: {
    display: 'block',
    height: '100%',
    lineHeight: getSize({ size, sizes }),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginRight: rem(2),
  },
}));
