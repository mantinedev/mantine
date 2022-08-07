import { createStyles, MantineSize } from '@mantine/styles';

export interface InputErrorStylesParams {
  size: MantineSize;
}

export default createStyles((theme, { size }: InputErrorStylesParams) => ({
  error: {
    wordBreak: 'break-word',
    color: theme.fn.variant({ variant: 'filled', color: 'red' }).background,
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }) - 2,
    lineHeight: 1.2,
    display: 'block',
  },
}));
