import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getSizeValue } from '@mantine/theme';

interface NumberInputStylesProps {
  theme: MantineTheme;
  radius: MantineNumberSize;
}

export const CONTROL_WIDTH = 24;

export default createUseStyles(
  {
    rightSection: {
      display: 'flex',
      flexDirection: 'column',
      height: 'calc(100% - 2px)',
      margin: 1,
      marginRight: 1,
    },

    control: ({ theme }: NumberInputStylesProps) => ({
      position: 'relative',
      flex: '0 0 50%',
      boxSizing: 'border-box',
      width: CONTROL_WIDTH,
      border: `1px solid ${
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

    controlUp: ({ theme, radius }: NumberInputStylesProps) => ({
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
        borderBottomColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
      },
    }),

    controlDown: ({ theme, radius }: NumberInputStylesProps) => ({
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
  },
  { link: true }
);
