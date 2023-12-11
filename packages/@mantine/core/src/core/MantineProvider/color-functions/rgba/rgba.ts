import { toRgba } from '../to-rgba/to-rgba';

export function rgba(color: string, alpha: number) {
  if (typeof color !== 'string' || alpha > 1 || alpha < 0) {
    return 'rgba(0, 0, 0, 1)';
  }

  if (color.startsWith('oklch')) {
    if (color.includes('/')) {
      return color.replace(/\/\s*[\d.]+\s*\)/, `/ ${alpha})`);
    }

    return color.replace(')', ` / ${alpha})`);
  }

  const { r, g, b } = toRgba(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
