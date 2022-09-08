import { createStyles } from '@mantine/styles';

export interface DialogStylesParams {
  size: string | number;
}

const sizes = {
  xs: 160,
  sm: 200,
  md: 340,
  lg: 400,
  xl: 500,
};

export default createStyles((theme, { size }: DialogStylesParams) => ({
  root: {
    ...theme.fn.fontStyles(),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    position: 'relative',
    width: theme.fn.size({ size, sizes }),
    maxWidth: '100%',
    minHeight: 50,
  },

  closeButton: {
    position: 'absolute',
    top: `calc(${theme.spacing.md}px / 2)`,
    right: `calc(${theme.spacing.md}px / 2)`,
  },
}));
