import { rem } from '../../../../utils';

export function sizeResolver(value: unknown) {
  if (typeof value === 'number') {
    return rem(value);
  }

  return value;
}
