import { keys, camelToKebabCase } from '../../utils';

export function cssObjectToString(css: React.CSSProperties) {
  return keys(css)
    .reduce(
      (acc, rule) =>
        css[rule] !== undefined ? `${acc}${camelToKebabCase(rule)}:${css[rule]};` : acc,
      ''
    )
    .trim();
}
