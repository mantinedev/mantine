import { fontStyles } from './font-styles/font-styles';
import { focusStyles } from './focus-styles/focus-styles';
import { themeColor } from './theme-color/theme-color';
import { linearGradient, radialGradient } from './gradient/gradient';
import { smallerThan, largerThan } from './breakpoints/breakpoints';
import { rgba } from './rgba/rgba';
import { size } from './size/size';
import { cover } from './cover/cover';
import { darken } from './darken/darken';
import { lighten } from './lighten/lighten';
import { radius } from './radius/radius';

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
  cover,
  darken,
  lighten,
  radius,
} as const;
