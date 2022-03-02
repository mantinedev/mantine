import { createStyles, MantineNumberSize, MantineSize } from '@mantine/styles';

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
    height: theme.fn.size({ size, sizes }),
    paddingLeft: theme.fn.size({ size, sizes: theme.spacing }),
    paddingRight: disabled ? theme.fn.size({ size, sizes: theme.spacing }) : 0,
    fontWeight: 500,
    fontSize: theme.fn.size({ size, sizes: fontSizes }),
    borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
    cursor: disabled ? 'not-allowed' : 'default',
    userSelect: 'none',
    maxWidth: 'calc(100% - 20px)',
  },

  defaultValueRemove: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    marginLeft: theme.fn.size({ size, sizes: theme.spacing }) / 6,
  },

  label: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}));
