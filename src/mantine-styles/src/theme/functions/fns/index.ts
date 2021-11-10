import { fontStyles } from './font-styles/font-styles';
import { focusStyles } from './focus-styles/focus-styles';
import { themeColor } from './theme-color/theme-color';
import { linearGradient } from './linear-gradient/linear-gradient';
import { radialGradient } from './radial-gradient/radial-gradient';
import { smallerThan, largerThan } from './breakpoints/breakpoints';
import { rgba } from './rgba/rgba';
import { size } from './size/size';

export const fns = {
  fontStyles,
  themeColor,
  focusStyles,
  linearGradient,
  radialGradient,
  smallerThan,
  largerThan,
  rgba,
  size,
} as const;
