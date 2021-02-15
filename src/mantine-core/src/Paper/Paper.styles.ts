import { createUseStyles } from 'react-jss';
import {
  theming,
  MantineTheme,
  MantineNumberSize,
  MantineSize,
  getSizeValue,
} from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    paper: {
      backgroundColor: theme.white,
      boxSizing: 'border-box',
      borderRadius: ({ radius }: { radius: MantineNumberSize }) =>
        getSizeValue({ size: radius, sizes: theme.radius }),
      boxShadow: ({ shadow }: { shadow?: MantineSize }) => theme.shadows[shadow] || 'none',
      padding: ({ padding }: { padding: MantineNumberSize }) =>
        getSizeValue({ size: padding, sizes: theme.spacing }),
    },
  }),
  { theming }
);
