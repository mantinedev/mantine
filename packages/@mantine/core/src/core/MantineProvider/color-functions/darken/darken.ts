import { toRgba } from '../to-rgba/to-rgba';

export function darken(color: string, alpha: number) {
  if (color.startsWith('var(')) {
    return `color-mix(in srgb, ${color}, black ${alpha * 100}%)`;
  }

  const { r, g, b, a } = toRgba(color);
  const f = 1 - alpha;

  const dark = (input: number) => Math.round(input * f);

  return `rgba(${dark(r)}, ${dark(g)}, ${dark(b)}, ${a})`;
}
