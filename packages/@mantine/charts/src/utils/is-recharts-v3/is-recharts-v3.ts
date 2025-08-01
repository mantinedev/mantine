import * as Recharts from 'recharts';

export function isRechartsV3() {
  return typeof (Recharts as any).useActiveTooltipLabel === 'function';
}
