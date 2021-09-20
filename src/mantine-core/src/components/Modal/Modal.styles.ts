import { createStyles, getSizeValue } from '@mantine/tss';

export const sizes = {
  xs: 320,
  sm: 380,
  md: 440,
  lg: 620,
  xl: 780,
  full: '100%',
};

interface ModalStyles {
  overflow: 'outside' | 'inside';
  size: string | number;
}

export default createStyles((theme, { overflow, size }: ModalStyles) => ({
  root: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  inner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'auto',
    padding: `${theme.spacing.xl * 2}px ${theme.spacing.md}px`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  title: {
    marginRight: theme.spacing.md,
    textOverflow: 'ellipsis',
    display: 'block',
    wordBreak: 'break-word',
  },

  modal: {
    width: getSizeValue({ sizes, size }),
    outline: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.md,
    marginRight: -9,
  },

  body: {
    maxHeight: overflow === 'inside' ? 'calc(100vh - 185px)' : null,
    overflowY: overflow === 'inside' ? 'auto' : null,
    wordBreak: 'break-word',
  },
}));
