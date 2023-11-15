// files names that should not have use client directive at the top of the output file
export const ROLLUP_EXCLUDE_USE_CLIENT = [
  'index',
  'core/utils/units-converters/rem',
  'core/utils/units-converters/px',
  'core/MantineProvider/create-theme/create-theme',
  'core/MantineProvider/color-functions/darken/darken',
  'core/MantineProvider/color-functions/lighten/lighten',
  'core/MantineProvider/color-functions/rgba/rgba',
  'core/MantineProvider/color-functions/to-rgba/to-rgba',
  'core/MantineProvider/default-colors',
  'core/MantineProvider/default-theme',
].reduce<string[]>((acc, name) => {
  acc.push(`${name}.js`, `${name}.mjs`, `${name}.cjs`);
  return acc;
}, []);
