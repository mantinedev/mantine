import { createMemoStyles, MantineTheme } from '../../theme';

interface TabsStylesProps {
  theme: MantineTheme;
}

export default createMemoStyles({
  tabsInner: {},

  default: ({ theme }: TabsStylesProps) => ({
    borderBottom: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
    }`,

    '& $tabsInner': {
      marginBottom: -2,
    },
  }),

  outline: ({ theme }: TabsStylesProps) => ({
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
    }`,

    '& $tabsInner': {
      marginBottom: -1,
    },
  }),

  body: ({ theme }: TabsStylesProps) => ({
    paddingTop: theme.spacing.sm,
  }),
});
