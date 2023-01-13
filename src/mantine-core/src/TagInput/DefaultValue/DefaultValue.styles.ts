import { createStyles, MantineNumberSize, MantineSize, getSize, rem } from '@mantine/styles';

interface DefaultLabelStyles {
  size: MantineSize;
  radius: MantineNumberSize;
  disabled: boolean;
}

const sizes = {
  xs: 16,
  sm: 22,
  md: 26,
  lg: 30,
  xl: 36,
};

const fontSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
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
    paddingLeft: getSize({ size, sizes: theme.spacing }),
    paddingRight: disabled ? getSize({ size, sizes: theme.spacing }) : 0,
    fontWeight: 500,
    fontSize: getSize({ size, sizes: fontSizes }),
    borderRadius: getSize({ size: radius, sizes: theme.radius }),
    cursor: disabled ? 'not-allowed' : 'default',
    userSelect: 'none',
    maxWidth: `calc(100% - ${rem(20)})`,
  },

  defaultValueRemove: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
  },

  label: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));
