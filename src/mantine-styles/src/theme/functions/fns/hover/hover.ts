import type { CSSObject } from '../../../../tss';

export function hover(hoverStyle: CSSObject) {
  return {
    '@media (hover: hover)': {
      '&:hover': hoverStyle,
    },
    '@media (hover: none)': {
      '&:active': hoverStyle,
    },
  };
}
