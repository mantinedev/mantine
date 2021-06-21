import {
  createMemoStyles,
  MantineTheme,
  getFontStyles,
  getSizeValue,
  MantineSize,
} from '../../theme';

interface InputWrapperStyles {
  theme: MantineTheme;
  size: MantineSize;
}

export default createMemoStyles({
  root: ({ theme }: InputWrapperStyles) => ({
    ...getFontStyles(theme),
    lineHeight: theme.lineHeight,
  }),

  label: ({ theme, size }: InputWrapperStyles) => ({
    display: 'block',
    marginBottom: 5,
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    fontWeight: 500,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[9],
    wordBreak: 'break-word',
    cursor: 'default',
    WebkitTapHighlightColor: 'transparent',
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
