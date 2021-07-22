import {
  createMemoStyles,
  MantineTheme,
  MantineNumberSize,
  getSizeValue,
  MantineSize,
} from '../../theme';

interface NumberInputStyles {
  theme: MantineTheme;
  radius: MantineNumberSize;
  size: MantineSize;
}

export const CONTROL_SIZES = {
  xs: 20,
  sm: 24,
  md: 30,
  lg: 34,
  xl: 36,
};

export default createMemoStyles({
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 2px)',
    margin: 1,
    marginRight: 1,
  },

  control: ({ theme, size }: NumberInputStyles) => ({
    position: 'relative',
    flex: '0 0 50%',
    boxSizing: 'border-box',
    width: getSizeValue({ size, sizes: CONTROL_SIZES }),
    padding: 0,
    WebkitTapHighlightColor: 'transparent',
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
    }`,
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4]
    }`,
    borderTop: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    marginRight: 1,

    '&:not(:disabled):hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    '&::after': {
      position: 'absolute',
      top: 'calc(50% - 2.5px)',
      left: 'calc(50% - 4.5px)',
      content: '""',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  }),

  controlUp: ({ theme, radius }: NumberInputStyles) => ({
    borderTopRightRadius: getSizeValue({ size: radius, sizes: theme.radius }) - 1,

    '&::after': {
      borderWidth: [0, 5, 5, 5],
      borderColor: [
        'transparent',
        'transparent',
        theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        'transparent',
      ],
    },

    '&:disabled::after': {
      borderBottomColor: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
  }),

  controlDown: ({ theme, radius }: NumberInputStyles) => ({
    borderBottomRightRadius: getSizeValue({ size: radius, sizes: theme.radius }) - 1,
    borderBottom: 0,

    '&::after': {
      borderWidth: [5, 5, 0, 5],
      borderColor: [
        theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        'transparent',
        'transparent',
        'transparent',
      ],
    },

    '&:disabled::after': {
      borderTopColor: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
  }),
});
