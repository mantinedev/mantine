export function applyHoverStyleForTouch(hoverStyle: any) {
  return {
    '@media (hover: hover)': {
      '&:hover': hoverStyle,
    },
    '@media (hover: none)': {
      '&:active': hoverStyle,
    },
  };
}
