import { StyleProp } from '../style-props.types';

export function hasResponsiveStyles(styleProp: StyleProp<unknown>) {
  if (typeof styleProp !== 'object' || styleProp === null) {
    return false;
  }

  const breakpoints = Object.keys(styleProp);

  if (breakpoints.length === 1 && breakpoints[0] === 'base') {
    return false;
  }

  return true;
}
