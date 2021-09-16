import { createMemoStyles, MantineTheme, MantineNumberSize, getSizeValue } from '../../../theme';

interface AvatarsGroupStyles {
  theme: MantineTheme;
  spacing: MantineNumberSize;
}

export default createMemoStyles({
  root: () => ({
    display: 'flex',
  }),
  child: ({ theme, spacing }: AvatarsGroupStyles) => ({
    marginLeft: -getSizeValue({ size: spacing, sizes: theme.spacing }) / 2,
    border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[3]}`,
    '&:first-child': {
      marginLeft: 0,
    },
  }),
  truncated: ({ theme }: AvatarsGroupStyles) => ({
    color: `${theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7]}`,
  }),
});
