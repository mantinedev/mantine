import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

interface TabsStylesProps {
  theme: MantineTheme;
}

export default createUseStyles(
  {
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
  },
  { link: true }
);
