/* eslint-disable no-bitwise */
import { toRgba } from '../../../utils/to-rgba/to-rgba';

export function rgba(color: string, alpha: number) {
  if (typeof color !== 'string' || alpha > 1 || alpha < 0) {
    return 'rgba(0, 0, 0, 1)';
  }

  const { r, g, b } = toRgba(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
