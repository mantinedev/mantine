import type { CSSObject } from '../../../../tss';

export function hover(hoverStyle: CSSObject) {
  return {
    '@media (pointer: fine)': {
      '&:hover': hoverStyle,
    },
    '@media (pointer: coarse)': {
      '&:active': hoverStyle,
    },
  };
}
