import { createMemoStyles, MantineTheme, getSizeValue } from '../../theme';

export const sizes = {
  xs: 320,
  sm: 380,
  md: 440,
  lg: 620,
  xl: 780,
  full: '100%',
};

interface ModalStyles {
  theme: MantineTheme;
  overflow: 'outside' | 'inside';
  size: string | number;
}

export default createMemoStyles({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  inner: ({ theme }: ModalStyles) => ({
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

  title: ({ theme }: ModalStyles) => ({
    marginRight: theme.spacing.md,
    textOverflow: 'ellipsis',
    display: 'block',
    wordBreak: 'break-word',
  }),

  modal: ({ theme, size }: ModalStyles) => ({
    width: getSizeValue({ sizes, size }),
    outline: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  }),

  header: ({ theme }: ModalStyles) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
    marginRight: -9,
  }),

  body: ({ overflow }: ModalStyles) => ({
    maxHeight: overflow === 'inside' && 'calc(100vh - 185px)',
    overflowY: overflow === 'inside' && 'auto',
    wordBreak: 'break-word',
  }),
});
