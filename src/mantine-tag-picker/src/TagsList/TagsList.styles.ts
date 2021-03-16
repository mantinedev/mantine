import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles } from '@mantine/theme';

export default createUseStyles({
  tagsList: {
    paddingTop: 10,
    paddingBottom: 10,
  },

  description: {
    marginTop: 10,
    marginBottom: 7,
    padding: [0, 10],
  },

  searchInput: {
    marginLeft: 10,
    marginRight: 10,
  },

  createControl: ({ theme }: { theme: MantineTheme }) => ({
    ...getFontStyles(theme),
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    textAlign: 'left',
    height: 32,
    color: theme.colors.gray[7],
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  }),

  createControlBadge: {
    display: 'block !important',
  },

  createControlLabel: {
    marginRight: 10,
  },

  createControlHovered: ({ theme }: { theme: MantineTheme }) => ({
    backgroundColor: theme.colors.gray[0],
  }),
});
