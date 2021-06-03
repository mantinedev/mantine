import { createMemoStyles, MantineTheme, getFontStyles } from '../../theme';

interface InputWrapperStylesProps {
  theme: MantineTheme;
}

export default createMemoStyles({
  root: ({ theme }: InputWrapperStylesProps) => ({
    ...getFontStyles(theme),
    lineHeight: theme.lineHeight,
  }),

  label: ({ theme }: InputWrapperStylesProps) => ({
    display: 'block',
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    wordBreak: 'break-word',
  }),

  error: ({ theme }: InputWrapperStylesProps) => ({
    marginTop: theme.spacing.xs / 2,
    wordBreak: 'break-word',
  }),

  description: ({ theme }: InputWrapperStylesProps) => ({
    marginTop: theme.spacing.xs / 2,
    marginBottom: theme.spacing.xs / 2,
    wordBreak: 'break-word',
  }),

  required: ({ theme }: InputWrapperStylesProps) => ({
    color: theme.colorScheme === 'dark' ? theme.colors.red[5] : theme.colors.red[7],
  }),
});
