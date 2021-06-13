import { createMemoStyles, MantineTheme, getFontStyles } from '../../theme';

interface InputWrapperStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  root: ({ theme }: InputWrapperStyles) => ({
    ...getFontStyles(theme),
    lineHeight: theme.lineHeight,
  }),

  label: ({ theme }: InputWrapperStyles) => ({
    display: 'block',
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    wordBreak: 'break-word',
    cursor: 'default',
  }),

  error: ({ theme }: InputWrapperStyles) => ({
    marginTop: theme.spacing.xs / 2,
    wordBreak: 'break-word',
  }),

  description: ({ theme }: InputWrapperStyles) => ({
    marginTop: theme.spacing.xs / 2,
    marginBottom: theme.spacing.xs / 2,
    wordBreak: 'break-word',
  }),

  required: ({ theme }: InputWrapperStyles) => ({
    color: theme.colorScheme === 'dark' ? theme.colors.red[5] : theme.colors.red[7],
  }),
});
