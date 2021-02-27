import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles } from '@mantine/theme';

export default createUseStyles({
  inputWrapper: ({ theme }: { theme: MantineTheme }) => getFontStyles(theme),

  label: ({ theme }: { theme: MantineTheme }) => ({
    display: 'block',
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 500,
    color: theme.colors.gray[7],
  }),

  error: ({ theme }: { theme: MantineTheme }) => ({
    marginTop: theme.spacing.xs / 2,
  }),

  description: ({ theme }: { theme: MantineTheme }) => ({
    marginTop: theme.spacing.xs / 2,
    marginBottom: theme.spacing.xs / 2,
  }),

  required: ({ theme }: { theme: MantineTheme }) => ({
    color: theme.colors.red[7],
  }),
});
