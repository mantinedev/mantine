// Files names that should not have use client directive at the top of the output file
export const ROLLUP_EXCLUDE_USE_CLIENT = [
  'index',
  'core/utils/deep-merge/deep-merge',
  'core/utils/units-converters/rem',
  'core/utils/units-converters/px',
  'core/factory/create-polymorphic-component',
  'core/MantineProvider/mantine-html-props',
  'core/MantineProvider/create-theme/create-theme',
  'core/MantineProvider/color-functions/darken/darken',
  'core/MantineProvider/color-functions/lighten/lighten',
  'core/MantineProvider/color-functions/luminance/luminance',
  'core/MantineProvider/color-functions/rgba/rgba',
  'core/MantineProvider/color-functions/to-rgba/to-rgba',
  'core/MantineProvider/default-colors',
  'core/MantineProvider/default-theme',
  'core/MantineProvider/merge-mantine-theme/merge-mantine-theme',
  'core/MantineProvider/MantineCssVariables/virtual-color/virtual-color',
  'core/MantineProvider/color-functions/colors-tuple/colors-tuple',
  'theme-to-vars',
].reduce<string[]>((acc, name) => {
  acc.push(`${name}.js`, `${name}.mjs`, `${name}.cjs`);
  return acc;
}, []);
