import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getSizeValue } from '@mantine/theme';

interface PaperStylesProps {
  theme: MantineTheme;
  radius: MantineNumberSize;
  shadow: string;
  padding: MantineNumberSize;
}

export default createUseStyles(
  {
    paper: ({ theme, radius, shadow, padding }: PaperStylesProps) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      boxSizing: 'border-box',
      borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
      boxShadow: theme.shadows[shadow] || shadow || 'none',
      padding: getSizeValue({ size: padding, sizes: theme.spacing }),
    }),
  },
  { link: true }
);
