import { createStyles, MantineNumberSize, MantineSize } from '@mantine/styles';

export interface NumberInputStylesParams {
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

export default createStyles((theme, { radius, size }: NumberInputStylesParams) => ({
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 2px)',
    margin: 1,
    marginRight: 1,
    overflow: 'hidden',
    borderTopRightRadius: theme.fn.radius(radius),
    borderBottomRightRadius: theme.fn.radius(radius),
  },

  control: {
    margin: 0,
    position: 'relative',
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:not(:disabled):hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
    },
  },

  controlUp: {},

  controlDown: {
    borderBottom: 0,
  },
}));
