import { createMemoStyles, getSizeValue, MantineSize, MantineTheme } from '../../../theme';

interface DefaultLabelStyles {
  theme: MantineTheme;
  size: MantineSize;
}

const sizes = {
  xs: 16,
  sm: 22,
  md: 26,
  lg: 30,
  xl: 36,
};

const fontSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 16,
  xl: 18,
};

export default createMemoStyles({
  defaultValue: ({ theme, size }: DefaultLabelStyles) => ({
    display: 'flex',
    alignItems: 'center',
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors[theme.primaryColor][1],
    color:
      theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors[theme.primaryColor][9],
    lineHeight: 1,
    padding: [0, getSizeValue({ size, sizes: theme.spacing })],
    height: getSizeValue({ size, sizes }),
    paddingRight: 0,
    fontWeight: 500,
    fontSize: getSizeValue({ size, sizes: fontSizes }),
    borderRadius: theme.radius.sm,
    cursor: 'default',
    userSelect: 'none',
  }),

  defaultValueRemove: ({ theme, size }: DefaultLabelStyles) => ({
    color:
      theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors[theme.primaryColor][9],
    marginLeft: getSizeValue({ size, sizes: theme.spacing }) / 8,
  }),
});
