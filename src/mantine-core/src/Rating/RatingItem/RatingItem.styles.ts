import { createStyles, getStylesRef, rem } from '@mantine/styles';

export default createStyles((theme) => ({
  input: {
    height: 0,
    width: 0,
    position: 'absolute',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    opacity: 0,

    '&:focus': {
      [`& + .${getStylesRef('label')}`]: {
        outline:
          theme.focusRing === 'always' || theme.focusRing === 'auto'
            ? `${rem(1)} solid ${
                theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]
              }`
            : undefined,
      },

      '&:focus:not(:focus-visible)': {
        [`& + .${getStylesRef('label')}`]: {
          outline: theme.focusRing === 'auto' || theme.focusRing === 'never' ? 'none' : undefined,
        },
      },
    },
  },

  label: {
    ref: getStylesRef('label'),
    display: 'block',
    boxSizing: 'border-box',
    margin: rem(1),
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
