import type { LegendProps } from 'recharts';

export function getLegendPosition(
  legendProps: Omit<LegendProps, 'ref'> | undefined,
  defaultPosition: 'top' | 'bottom'
): 'top' | 'bottom' | 'middle' {
  if (legendProps?.position === 'top' || legendProps?.position === 'bottom') {
    return legendProps.position;
  }

  if (legendProps?.position != null) {
    return 'middle';
  }

  return legendProps?.verticalAlign || defaultPosition;
}
