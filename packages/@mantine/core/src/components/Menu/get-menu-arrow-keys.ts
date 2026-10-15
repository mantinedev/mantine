import type { Direction } from '../../core';

interface MenuArrowKeys {
  forward: 'ArrowRight' | 'ArrowLeft';
  back: 'ArrowRight' | 'ArrowLeft';
}

export function getMenuArrowKeys(dir: Direction): MenuArrowKeys {
  return dir === 'rtl'
    ? { forward: 'ArrowLeft', back: 'ArrowRight' }
    : { forward: 'ArrowRight', back: 'ArrowLeft' };
}
