import { createStyles, MantineNumberSize, MantineSize } from '@mantine/styles';

interface NumberInputStyles {
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

export default createStyles((theme, { radius, size }: NumberInputStyles) => ({
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 2px)',
    margin: 1,
    marginRight: 1,
  },

  control: {
    margin: 0,
    position: 'relative',
    flex: '0 0 50%',
    boxSizing: 'border-box',
    width: theme.fn.size({ size, sizes: CONTROL_SIZES }),
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
  },

  controlUp: {
    borderTopRightRadius: theme.fn.size({ size: radius, sizes: theme.radius }) - 1,

    '&::after': {
      borderWidth: '0 5px 5px 5px',
      borderColor: `transparent transparent ${
        theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black
      } transparent`,
    },

    '&:disabled::after': {
      borderBottomColor: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
  },

  controlDown: {
    borderBottomRightRadius: theme.fn.size({ size: radius, sizes: theme.radius }) - 1,
    borderBottom: 0,

    '&::after': {
      borderWidth: '5px 5px 0 5px',
      borderColor: `${
        theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black
      } transparent transparent transparent`,
    },

    '&:disabled::after': {
      borderTopColor: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
    },
  },
}));
