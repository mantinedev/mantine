import { toRgba } from '../to-rgba/to-rgba';

export function lighten(color: string, alpha: number) {
  if (color.startsWith('var(')) {
    return `color-mix(in srgb, ${color}, white ${alpha * 100}%)`;
  }

  const { r, g, b, a } = toRgba(color);

  const light = (input: number) => Math.round(input + (255 - input) * alpha);

  return `rgba(${light(r)}, ${light(g)}, ${light(b)}, ${a})`;
}
