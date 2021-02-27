import { createUseStyles } from 'react-jss';
import { getFontStyles, MantineTheme } from '@mantine/theme';

export default createUseStyles({
  title: ({ theme }: { theme: MantineTheme }) => ({
    ...getFontStyles(theme),
    fontWeight: 'bold',
    margin: 0,
  }),
});
