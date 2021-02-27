import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles } from '@mantine/theme';

export default createUseStyles({
  spoiler: {
    overflowY: 'hidden',
    position: 'relative',
  },

  shown: {
    overflowY: 'visible',

    '& $more': {
      position: 'relative',
      backgroundImage: 'none !important',
    },
  },

  more: ({ theme }: { theme: MantineTheme }) => ({
    ...getFontStyles(theme),
    display: 'block',
    width: '100%',
    textAlign: 'left',
    height: 24,
    fontSize: 14,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    userSelect: 'none',
    padding: 0,
    margin: 0,
    lineHeight: 1,
    border: 0,
    outline: 0,
    position: 'absolute',
    bottom: 0,
    color: theme.colors[theme.primaryColor][6],

    '&:hover, &:focus': {
      textDecoration: 'underline',
    },
  }),
});
