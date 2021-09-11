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
  listStyleType: string;
}

export default createMemoStyles({
  root: ({ theme, withPadding, size, listStyleType }: ListStyles) => ({
    ...getFontStyles(theme),
    listStyleType,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    lineHeight: theme.lineHeight,
    margin: 0,
    paddingLeft: withPadding ? theme.spacing.xl : 0,
    listStylePosition: 'inside',
  }),
});
