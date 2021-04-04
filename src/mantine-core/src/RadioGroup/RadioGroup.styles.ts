import { createUseStyles } from 'react-jss';
import { MantineTheme, MantineNumberSize, getSizeValue } from '@mantine/theme';

interface RadioGroupStylesProps {
  theme: MantineTheme;
  spacing: MantineNumberSize;
  variant: 'vertical' | 'horizontal';
}

export default createUseStyles({
  wrapper: ({ theme, spacing, variant }: RadioGroupStylesProps) => ({
    display: 'flex',
    flexDirection: variant === 'vertical' ? 'column' : 'horizontal',
    marginTop:
      variant === 'vertical' ? 0 : (getSizeValue({ sizes: theme.spacing, size: spacing }) / 4) * -1,
    margin: (getSizeValue({ sizes: theme.spacing, size: spacing }) / 2) * -1,

    '& [data-mantine-radio]': {
      margin: getSizeValue({ sizes: theme.spacing, size: spacing }) / 2,
      marginTop: variant === 'vertical' && theme.spacing.xs / 4,
      marginBottom: variant === 'vertical' && theme.spacing.xs / 4,
    },
  }),
});
