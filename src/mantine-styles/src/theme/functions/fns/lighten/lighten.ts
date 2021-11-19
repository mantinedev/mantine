import { toRgba } from '../../../utils/to-rgba/to-rgba';

export function lighten(color: string, alpha: number) {
  const { r, g, b, a } = toRgba(color);

  const light = (input: number) => Math.round(input + (255 - input) * alpha);

  return `rgba(${light(r)}, ${light(g)}, ${light(b)}, ${a})`;
}
