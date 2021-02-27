import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles } from '@mantine/core';

export default createUseStyles({
  tagBadge: ({ theme }: { theme: MantineTheme }) => ({
    ...getFontStyles(theme),
    display: 'inline-flex',
    alignItems: 'center',
    height: 22,
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 22,
  }),
});
