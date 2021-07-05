import { createMemoStyles, MantineTheme } from '../../theme';

interface TabsStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  root: {},
  tabsListWrapper: {},
  tabsList: {},
  pills: {},
  body: {},

  default: ({ theme }: TabsStyles) => ({
    borderBottom: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    '& $tabsList': {
      marginBottom: -2,
    },
  }),

  outline: ({ theme }: TabsStyles) => ({
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    '& $tabsList': {
      marginBottom: -1,
    },
  }),
});
