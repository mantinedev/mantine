import { createStyles, MantineNumberSize, getSizeValue } from '@mantine/styles';

interface AvatarsGroupStyles {
  spacing: MantineNumberSize;
  size: MantineNumberSize;
}

export default createStyles(
  (theme, { spacing, size }: AvatarsGroupStyles) => ({
    root: {
      display: 'flex',
    },
    child: {
      marginLeft: -getSizeValue({ size: spacing, sizes: theme.spacing }) / 2,
      border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
      '&:first-child': {
        marginLeft: 0,
      },
    },
    truncated: {
      fontFamily: theme.fontFamily,
      lineHeight: theme.lineHeight,
      fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
      color: `${theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7]}`,
    },
  })
);
