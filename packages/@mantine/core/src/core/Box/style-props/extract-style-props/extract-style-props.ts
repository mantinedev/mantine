import type { MantineStyleProps } from '../style-props.types';

const STYLE_PROPS_KEYS = [
  'm',
  'mx',
  'my',
  'mt',
  'mb',
  'ml',
  'mr',
  'me',
  'ms',
  'mis',
  'mie',
  'p',
  'px',
  'py',
  'pt',
  'pb',
  'pl',
  'pr',
  'pis',
  'pie',
  'pe',
  'ps',
  'bd',
  'bg',
  'c',
  'opacity',
  'ff',
  'fz',
  'fw',
  'lts',
  'ta',
  'lh',
  'fs',
  'tt',
  'td',
  'w',
  'miw',
  'maw',
  'h',
  'mih',
  'mah',
  'bgsz',
  'bgp',
  'bgr',
  'bga',
  'pos',
  'top',
  'left',
  'bottom',
  'right',
  'inset',
  'display',
  'flex',
  'bdrs',
  'hiddenFrom',
  'visibleFrom',
  'lightHidden',
  'darkHidden',
  'sx',
] as const;

const STYLE_PROPS_SET = new Set<string>(STYLE_PROPS_KEYS);

export function extractStyleProps<T extends Record<string, any>>(
  others: MantineStyleProps & T
): { styleProps: MantineStyleProps & { sx?: any }; rest: T } {
  const styleProps: Record<string, any> = {};
  const rest: Record<string, any> = {};
  let hasStyleProps = false;

  for (const key of Object.keys(others)) {
    if (STYLE_PROPS_SET.has(key)) {
      hasStyleProps = true;
    } else {
      rest[key] = others[key];
    }
  }

  if (hasStyleProps) {
    for (const key of STYLE_PROPS_KEYS) {
      if (others[key] !== undefined) {
        styleProps[key] = others[key];
      }
    }
  }

  return { styleProps, rest: rest as T };
}
