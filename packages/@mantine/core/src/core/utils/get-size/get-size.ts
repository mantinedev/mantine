import { isNumberLike } from '../is-number-like/is-number-like';
import { rem } from '../units-converters';
import { getBaseValue } from '../get-base-value/get-base-value';
import type { StyleProp } from '../../Box';

export function getSize(size: unknown, prefix = 'size', convertToRem = true): string | undefined {
  if (size === undefined) {
    return undefined;
  }

  // Handle responsive size objects by extracting the base value
  const baseSize = getBaseValue(size);

  return isNumberLike(baseSize)
    ? convertToRem
      ? rem(baseSize)
      : (baseSize as string)
    : `var(--${prefix}-${baseSize})`;
}

export function getSpacing(size: unknown) {
  return getSize(size, 'mantine-spacing');
}

export function getRadius(size: unknown) {
  if (size === undefined) {
    return 'var(--mantine-radius-default)';
  }

  return getSize(size, 'mantine-radius');
}

export function getFontSize(size: unknown) {
  return getSize(size, 'mantine-font-size');
}

export function getLineHeight(size: unknown) {
  return getSize(size, 'mantine-line-height', false);
}

export function getShadow(size: unknown) {
  if (!size) {
    return undefined;
  }

  return getSize(size, 'mantine-shadow', false);
}

/**
 * Check if a value is a responsive size object (has breakpoints other than 'base')
 */
export function isResponsiveSize(size: unknown): size is StyleProp<unknown> {
  if (typeof size !== 'object' || size === null) {
    return false;
  }
  
  const keys = Object.keys(size);
  if (keys.length === 1 && keys[0] === 'base') {
    return false;
  }
  
  return keys.length > 1 || (keys.length === 1 && keys[0] !== 'base');
}
