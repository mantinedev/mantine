import type { StyleProp } from '../../Box';

export function getBaseValue<Value = any>(value: StyleProp<Value>) {
  if (typeof value === 'object' && value !== null) {
    if ('base' in value) {
      return value.base;
    }

    return undefined;
  }

  return value;
}
