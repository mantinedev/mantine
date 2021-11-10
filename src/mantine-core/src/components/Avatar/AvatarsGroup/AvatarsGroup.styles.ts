import { createStyles, MantineNumberSize } from '@mantine/styles';

interface AvatarsGroupStyles {
  spacing: MantineNumberSize;
}

export default createStyles((theme, { spacing }: AvatarsGroupStyles) => ({
  root: {
    display: 'flex',
    paddingLeft: theme.fn.size({ size: spacing, sizes: theme.spacing }) / 2,
  },

  child: {
    marginLeft: -theme.fn.size({ size: spacing, sizes: theme.spacing }) / 2,
    background: `${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
    border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },

  truncated: {
    ...theme.fn.fontStyles(),
    lineHeight: 1,
    fontSize: `${theme.fontSizes.sm}px !important`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    width: '100%',
    height: '100%',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
  },
}));
