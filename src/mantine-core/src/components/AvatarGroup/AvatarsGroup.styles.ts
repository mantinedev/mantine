import { createMemoStyles, MantineTheme, MantineNumberSize, MantineSize } from '../../theme';

interface AvatarsGroupStyles {
  theme: MantineTheme;
  radius?: MantineNumberSize;
  size?: MantineSize;
  color?: string;
}

export default createMemoStyles({
  root: () => ({
    display: 'flex',
  }),
  child: ({ theme }: AvatarsGroupStyles) => ({
    marginLeft: -8,
    border: `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[3]}`,
    '&:first-child': {
      marginLeft: 0,
    },
  }),
  number: ({ theme }: AvatarsGroupStyles) => ({
    color: `${theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7]}`,
  }),
});
