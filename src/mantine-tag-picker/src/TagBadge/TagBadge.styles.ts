import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles } from '@mantine/theme';

export default createUseStyles({
  tagBadge: ({ theme }: { theme: MantineTheme }) => ({
    ...getFontStyles(theme),
    display: 'inline-flex',
    alignItems: 'center',
    height: 22,
    lineHeight: '22px',
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 22,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }),
});
