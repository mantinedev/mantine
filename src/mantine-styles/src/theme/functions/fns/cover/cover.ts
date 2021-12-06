import type { CSSObject } from '../../../../tss';

export function cover(offset: number | string = 0): CSSObject {
  return {
    position: 'absolute',
    top: offset,
    right: offset,
    left: offset,
    bottom: offset,
  };
}
