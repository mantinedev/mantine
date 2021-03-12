import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

export default createUseStyles({
  code: ({ theme }: { theme: MantineTheme }) => ({
    padding: [theme.spacing.xs / 4, theme.spacing.xs / 2],
    borderRadius: theme.radius.sm,
    color: theme.black,
    backgroundColor: theme.colors.gray[1],
    fontFamily: theme.fontFamilyMonospace,
    fontSize: theme.fontSizes.xs,
  }),
});
