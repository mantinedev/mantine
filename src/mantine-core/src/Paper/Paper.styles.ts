import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineNumberSize, MantineSize } from '@mantine/theme';

export default createUseStyles(
  (theme: MantineTheme) => ({
    paper: {
      backgroundColor: OpenColor.white,
      boxSizing: 'border-box',
      borderRadius: ({ radius }: { radius: MantineNumberSize }) =>
        typeof radius === 'number' ? radius : theme.radius[radius],
      boxShadow: ({ shadow }: { shadow?: MantineSize }) => theme.shadows[shadow] || 'none',
      padding: ({ padding }: { padding: MantineNumberSize }) =>
        typeof padding === 'number' ? padding : theme.spacing[padding],
    },
  }),
  { theming }
);
