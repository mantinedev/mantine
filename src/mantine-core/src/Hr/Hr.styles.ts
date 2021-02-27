import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

export default createUseStyles({
  hr: ({ theme }: { theme: MantineTheme }) => ({
    border: 0,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray[5],
  }),
});
