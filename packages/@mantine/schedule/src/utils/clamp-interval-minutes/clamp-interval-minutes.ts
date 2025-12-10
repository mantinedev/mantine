export function clampIntervalMinutes(intervalMinutes: number): number {
  let clamped = Math.round(Math.max(1, Math.min(60, intervalMinutes)));
  clamped = 60 % clamped === 0 ? clamped : 60;
  return clamped;
}
