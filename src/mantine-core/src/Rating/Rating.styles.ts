import { CSSObject, createStyles, MantineSize } from '@mantine/styles';

export interface RatingStylesParams {
  size: MantineSize;
  readonly: boolean;
}

export default createStyles((theme, { readonly }: RatingStylesParams, getRef) => {
  const visuallyHidden: CSSObject = {
    clip: 'rect(0, 0, 0, 0)',
    overflow: 'hidden',
    height: 0,
    width: 0,
    whiteSpace: 'nowrap',
    padding: 0,
    margin: 0,
    clipPath: 'inset(50%)',
  };

  return {
    root: {
      display: 'flex',
      width: 'max-content',
    },

    symbolGroup: {
      position: 'relative',
      transition: 'transform 100ms ease',
      '&[data-active="true"]': {
        zIndex: 1,
        transform: 'scale(1.2)',
      },
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

      marginInline: 1,

      top: 0,
      left: 0,

      cursor: readonly ? 'default' : 'pointer',
      position: 'absolute',
      zIndex: 0,

      '&:last-of-type': {
        position: 'relative',
        zIndex: 0,
      },
    },

    symbolLabel: {
      ...visuallyHidden,
    },

    symbolBody: {
      display: 'grid',
      placeContent: 'center',
      placeItems: 'center',
    },
  };
});
