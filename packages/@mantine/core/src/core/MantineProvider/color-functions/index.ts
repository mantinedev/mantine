export { getPrimaryShade } from './get-primary-shade/get-primary-shade';
export { parseThemeColor } from './parse-theme-color/parse-theme-color';
export { getThemeColor } from './get-theme-color/get-theme-color';
export { defaultVariantColorsResolver } from './default-variant-colors-resolver/default-variant-colors-resolver';
export { getGradient } from './get-gradient/get-gradient';
export { toRgba } from './to-rgba/to-rgba';
export { rgba, alpha } from './rgba/rgba';
export { darken } from './darken/darken';
export { lighten } from './lighten/lighten';
export { luminance, isLightColor } from './luminance/luminance';
export { getContrastColor, getPrimaryContrastColor } from './get-contrast-color/get-contrast-color';
export { getAutoContrastValue } from './get-auto-contrast-value/get-auto-contrast-value';
export { colorsTuple } from './colors-tuple/colors-tuple';

export type { RGBA } from './to-rgba/to-rgba';
export type {
  VariantColorsResolverInput,
  VariantColorResolverResult,
  VariantColorsResolver,
} from './default-variant-colors-resolver/default-variant-colors-resolver';
