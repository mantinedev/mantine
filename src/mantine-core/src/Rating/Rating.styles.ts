import { createStyles, MantineSize } from '@mantine/core';
import { CSSObject } from '@mantine/styles/src/tss/types/css-object';

export interface RatingStylesParams {
  size: MantineSize;
  readonly: boolean;
}

const sizes: Record<MantineSize, number> = {
  xs: 14,
  sm: 18,
  md: 24,
  lg: 28,
  xl: 32,
};

const spacings: Record<MantineSize, number> = {
  xs: 2,
  sm: 3,
  md: 4,
  lg: 5,
  xl: 6,
};

export default createStyles((theme, { size, readonly }: RatingStylesParams, getRef) => {
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

  const sizeValue = theme.fn.size({ size, sizes });
  const spacing = theme.fn.size({ size, sizes: spacings });

  return {
    root: {
      display: 'flex',
      width: 'max-content',
    },

    symbolGroup: {
      ref: getRef('container'),
      boxSizing: 'content-box',
      height: sizeValue,

      position: 'relative',

      transition: 'transform 150ms ease-in-out',
    },

    input: {
      ...visuallyHidden,
      position: 'absolute',

      // input is hidden by default, these styles add focus to label when user navigates with keyboard
      '&:focus': {
        [`& + .${getRef('label')}`]: {
          outlineOffset: size === 'sm' ? 0 : -1,
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
      display: 'inline-block',

      width: sizeValue + spacing,
      height: sizeValue,
      paddingInline: spacing / 2,

      top: '0px',
      left: '0px',

      cursor: readonly ? '' : 'pointer',
      position: 'absolute',
      zIndex: 2,

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
      width: sizeValue,
      height: sizeValue,

      overflow: 'hidden',

      display: 'grid',
      placeContent: 'center',
      placeItems: 'center',
    },
  };
});
