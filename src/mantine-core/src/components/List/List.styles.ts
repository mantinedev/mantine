import {
  createMemoStyles,
  getFontStyles,
  getSizeValue,
  MantineNumberSize,
  MantineTheme,
} from '../../theme';

interface ListStyles {
  theme: MantineTheme;
  withPadding: boolean;
  size: MantineNumberSize;
}

export default createMemoStyles({
  root: ({ theme, withPadding, size }: ListStyles) => ({
    ...getFontStyles(theme),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    lineHeight: theme.lineHeight,
    margin: 0,
    paddingLeft: withPadding ? theme.spacing.xl : 0,
    listStylePosition: 'inside',
  }),
});
