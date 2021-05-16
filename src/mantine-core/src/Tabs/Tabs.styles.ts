import { createMemoStyles, MantineTheme } from '@mantine/theme';

interface TabsStylesProps {
  theme: MantineTheme;
}

export default createMemoStyles({
  tabs: ({ theme }: TabsStylesProps) => ({
    borderBottom: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
    }`,
  }),

  tabsInner: {
    marginBottom: -2,
  },

  body: ({ theme }: TabsStylesProps) => ({
    paddingTop: theme.spacing.sm,
  }),
});
