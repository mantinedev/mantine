import { createUseStyles } from 'react-jss';
import { getSizeValue, MantineNumberSize, MantineTheme } from '@mantine/theme';

interface MenuStylesProps {
  theme: MantineTheme;
  size: MantineNumberSize;
}

export const sizes = {
  xs: 120,
  sm: 160,
  md: 200,
  lg: 240,
  xl: 300,
};

export default createUseStyles({
  menu: ({ theme, size }: MenuStylesProps) => ({
    position: 'absolute',
    width: getSizeValue({ size, sizes }),
    overflow: 'hidden',
    border: `1px solid ${theme.colors.gray[2]}`,
    paddingTop: theme.spacing.xs / 2,
    paddingBottom: theme.spacing.xs / 2,
  }),

  hr: ({ theme }: MenuStylesProps) => ({
    borderTopColor: theme.colors.gray[2],
    marginTop: theme.spacing.xs / 2,
    marginBottom: theme.spacing.xs / 2,
  }),
});
