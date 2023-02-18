import { createStyles, MantineColor } from '@mantine/styles';

export interface AnchorStylesParams {
  color: MantineColor;
}

export default createStyles((theme, { color }: AnchorStylesParams) => ({
  root: {
    backgroundColor: 'transparent',
    cursor: 'pointer',
    padding: 0,
    border: 0,
    color: theme.fn.themeColor(
      color || theme.primaryColor,
      theme.colorScheme === 'dark' ? 4 : 7,
      false,
      true
    ),
    ...theme.fn.hover({ textDecoration: 'underline' }),
  },
}));
