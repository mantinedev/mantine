import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/types';

export default createUseStyles((theme: MantineTheme) => ({
  hr: {
    border: 0,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray[5],
  },
}));
