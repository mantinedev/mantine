import { createStyles } from '@mantine/styles';

export default createStyles((theme, _params, getRef) => ({
  input: {
    height: 0,
    width: 0,
    position: 'absolute',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    opacity: 0,

    '&:focus': {
      [`& + .${getRef('label')}`]: {
        outline:
          theme.focusRing === 'always' || theme.focusRing === 'auto'
            ? `1px solid ${theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]}`
            : undefined,
      },

      '&:focus:not(:focus-visible)': {
        [`& + .${getRef('label')}`]: {
          outline: theme.focusRing === 'auto' || theme.focusRing === 'never' ? 'none' : undefined,
        },
      },
    },
  },

  label: {
    ref: getRef('label'),
    display: 'block',
    boxSizing: 'border-box',
    marginInline: 1,
    top: 0,
    left: 0,
    cursor: 'pointer',
    position: 'absolute',
    zIndex: 0,

    '&[data-read-only]': {
      cursor: 'default',
    },

    '&:last-of-type': {
      position: 'relative',
      zIndex: 0,
    },
  },

  symbolBody: {
    display: 'grid',
    placeContent: 'center',
    placeItems: 'center',
  },
}));
