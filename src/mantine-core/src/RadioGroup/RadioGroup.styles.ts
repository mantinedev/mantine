import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getSizeValue } from '@mantine/theme';

interface RadioGroupStylesProps {
  theme: MantineTheme;
  spacing: MantineNumberSize;
  variant: 'vertical' | 'horizontal';
}

export default createUseStyles(
  {
    wrapper: ({ theme, spacing, variant }: RadioGroupStylesProps) => ({
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: variant === 'vertical' ? 'column' : 'row',
      margin: (getSizeValue({ sizes: theme.spacing, size: spacing }) / 2) * -1,
      marginTop:
        (getSizeValue({ sizes: theme.spacing, size: spacing }) / 4) *
        (variant === 'vertical' ? 1 : -1),

      '& [data-mantine-radio]': {
        margin: getSizeValue({ sizes: theme.spacing, size: spacing }) / 2,
        marginTop:
          variant === 'vertical' && getSizeValue({ sizes: theme.spacing, size: spacing }) / 4,
        marginBottom:
          variant === 'vertical' && getSizeValue({ sizes: theme.spacing, size: spacing }) / 4,
      },
    }),
  },
  { link: true }
);
