import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

interface TabsStylesProps {
  theme: MantineTheme;
}

export default createUseStyles({
  tabs: ({ theme }: TabsStylesProps) => ({
    borderBottom: `2px solid ${theme.colors.gray[3]}`,
  }),

  tabsInner: {
    marginBottom: -2,
  },

  body: ({ theme }: TabsStylesProps) => ({
    paddingTop: theme.spacing.sm,
  }),
});
