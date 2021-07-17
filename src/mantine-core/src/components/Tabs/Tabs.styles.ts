import { createMemoStyles, MantineTheme, MantineNumberSize, getSizeValue } from '../../theme';

interface TabsStyles {
  theme: MantineTheme;
  tabPadding: MantineNumberSize;
  orientation: 'horizontal' | 'vertical';
}

export default createMemoStyles({
  root: ({ orientation }: TabsStyles) => ({
    display: orientation === 'vertical' ? 'flex' : 'block',
  }),

  tabsListWrapper: {},
  tabsList: {},

  pills: ({ orientation }: TabsStyles) => ({
    marginRight: orientation === 'vertical' ? 20 : 0,
  }),

  body: ({ theme, tabPadding, orientation }: TabsStyles) => ({
    [orientation === 'horizontal' ? 'paddingTop' : 'paddingLeft']: getSizeValue({
      size: tabPadding,
      sizes: theme.spacing,
    }),
  }),

  default: ({ theme, orientation }: TabsStyles) => ({
    [orientation === 'horizontal' ? 'borderBottom' : 'borderRight']: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    '& $tabsList': {
      [orientation === 'horizontal' ? 'marginBottom' : 'marginRight']: -2,
    },
  }),

  outline: ({ theme, orientation }: TabsStyles) => ({
    [orientation === 'horizontal' ? 'borderBottom' : 'borderRight']: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    '& $tabsList': {
      [orientation === 'horizontal' ? 'marginBottom' : 'marginRight']: -1,
    },
  }),
});
