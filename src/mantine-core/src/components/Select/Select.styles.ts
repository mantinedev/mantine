import { createMemoStyles, getSizeValue, MantineSize, MantineTheme } from '../../theme';
import { INPUT_SIZES } from '../Input/Input';

interface SelectStyles {
  theme: MantineTheme;
  size: MantineSize;
}

export default createMemoStyles({
  wrapper: {
    position: 'relative',
  },

  notSearchable: {
    cursor: 'pointer',
  },

  dropdown: ({ theme, size }: SelectStyles) => ({
    position: 'absolute',
    zIndex: 1,
    top: getSizeValue({ size, sizes: INPUT_SIZES }) + theme.spacing.sm / 2,
    left: 0,
    right: 0,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    paddingTop: getSizeValue({ size, sizes: theme.spacing }) / 2,
    paddingBottom: getSizeValue({ size, sizes: theme.spacing }) / 2,
    overflowY: 'auto',
  }),

  item: ({ theme, size }: SelectStyles) => ({
    textAlign: 'left',
    width: '100%',
    padding: [
      getSizeValue({ size, sizes: theme.spacing }) / 1.5,
      getSizeValue({ size, sizes: theme.spacing }),
    ],
    fontSize: getSizeValue({ size, sizes: theme.fontSizes }),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  }),

  selected: ({ theme }: SelectStyles) => ({
    backgroundColor: theme.colors[theme.primaryColor][0],
    color: theme.colors[theme.primaryColor][9],
  }),

  hovered: ({ theme }: SelectStyles) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
  }),

  nothingFound: ({ theme, size }: SelectStyles) => ({
    color: theme.colors.gray[6],
    paddingTop: getSizeValue({ size, sizes: theme.spacing }) / 2,
    paddingBottom: getSizeValue({ size, sizes: theme.spacing }) / 2,
    textAlign: 'center',
  }),
});
