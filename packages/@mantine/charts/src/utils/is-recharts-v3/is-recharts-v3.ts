export function isRechartsV3() {
  // Lazy require so Jest can mock it
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Recharts = require('recharts');
  return typeof Recharts.useActiveTooltipLabel === 'function';
}
