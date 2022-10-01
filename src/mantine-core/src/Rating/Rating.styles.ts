import { createStyles, MantineSize } from '@mantine/core';
import { CSSObject } from '@mantine/styles/src/tss/types/css-object';

export interface RatingStylesParams {
  size: MantineSize;
  readonly: boolean;
}

export default createStyles((theme, { readonly }: RatingStylesParams, getRef) => {
  const visuallyHidden: CSSObject = {
    clip: 'rect(0, 0, 0, 0)',
    overflow: 'hidden',
    height: '0px',
    width: '0px',
    whiteSpace: 'nowrap',
    padding: '0',
    margin: '0',
    WebkitClipPath: 'inset(50%)',
    clipPath: 'inset(50%)',
  };

  return {
    root: {
      display: 'flex',
      width: 'max-content',
    },

    symbolGroup: {
      ref: getRef('container'),
      position: 'relative',
      transition: 'transform 150ms ease-in-out',
    },

    input: {
      ...visuallyHidden,
      position: 'absolute',

      // input is hidden by default, these styles add focus to label when user navigates with keyboard
      '&:focus': {
        [`& + .${getRef('label')}`]: {
          outline:
            theme.focusRing === 'always' || theme.focusRing === 'auto'
              ? `1px solid ${
                  theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 7 : 5]
                }`
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
      display: 'block', // this is necessary, if `inline` or `inline-block` fraction symbols with absolute position will behave weird
      boxSizing: 'border-box',
      marginInline: '0.12em',

      top: '0px',
      left: '0px',

      cursor: readonly ? '' : 'pointer',
      position: 'absolute',
      zIndex: 0,

      '&:last-of-type': {
        position: 'relative',
        zIndex: 0,
      },

      overflow: 'hidden',
      '& .symbol-label': {
        ...visuallyHidden,
      },
    },

    symbolBody: {
      overflow: 'hidden',

      display: 'grid',
      placeContent: 'center',
      placeItems: 'center',
    },
  };
});
