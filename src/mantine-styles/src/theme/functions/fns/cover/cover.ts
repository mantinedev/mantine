import type { CSSObject } from '../../../../tss';

export function cover(): CSSObject {
  return {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  };
}
