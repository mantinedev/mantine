export function isRechartsV3() {
  // Lazy require so Jest can mock it
  const Recharts = require('recharts');
  return typeof Recharts.useActiveTooltipLabel === 'function';
}
