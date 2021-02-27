import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, MantineSize, getSizeValue } from '@mantine/theme';

export default createUseStyles({
  paper: ({
    theme,
    radius,
    shadow,
    padding,
  }: {
    theme: MantineTheme;
    radius: MantineNumberSize;
    shadow: MantineSize;
    padding: MantineNumberSize;
  }) => ({
    backgroundColor: theme.white,
    boxSizing: 'border-box',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    boxShadow: theme.shadows[shadow] || 'none',
    padding: getSizeValue({ size: padding, sizes: theme.spacing }),
  }),
});
