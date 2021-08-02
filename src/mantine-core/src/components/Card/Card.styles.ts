import { createMemoStyles, MantineTheme } from '../../theme';

interface CardStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  card: ({ theme }: CardStyles) => ({
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
  }),
});
