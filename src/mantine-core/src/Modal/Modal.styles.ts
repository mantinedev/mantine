import { createUseStyles } from 'react-jss';
import { MantineTheme, getSizeValue } from '@mantine/theme';

export const sizes = {
  xs: 320,
  sm: 380,
  md: 440,
  lg: 620,
  xl: 780,
  full: '100%',
};

interface ModalStylesProps {
  theme: MantineTheme;
  overflow: 'outside' | 'inside';
  size: string | number;
}

export default createUseStyles(
  {
    wrapper: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },

    inner: ({ theme }: ModalStylesProps) => ({
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: 'auto',
      padding: [theme.spacing.xl * 2, theme.spacing.md],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
    }),

    title: ({ theme }: ModalStylesProps) => ({
      marginRight: theme.spacing.md,
      textOverflow: 'ellipsis',
      display: 'block',
      wordBreak: 'break-word',
    }),

    modal: ({ theme, size }: ModalStylesProps) => ({
      width: getSizeValue({ sizes, size }),
      padding: theme.spacing.lg,
      outline: 0,
    }),

    header: ({ theme }: ModalStylesProps) => ({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: theme.spacing.md,
    }),

    body: ({ overflow }: ModalStylesProps) => ({
      maxHeight: overflow === 'inside' && 'calc(100vh - 185px)',
      overflowY: overflow === 'inside' && 'auto',
      wordBreak: 'break-word',
    }),
  },
  { link: true }
);
