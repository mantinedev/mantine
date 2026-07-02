/**
 * Clamps interval minutes to a value that keeps the time grid consistent:
 *
 * - Values of 60 or less must divide evenly into an hour (e.g. `15`, `20`, `30`, `60`).
 * - Values above an hour must be a whole number of hours (e.g. `120`, `240`) so that
 *   slots still start on hour boundaries.
 *
 * Values that don't satisfy these rules fall back to `60`. The result is capped to a
 * single day (`1440`).
 */
export function clampIntervalMinutes(intervalMinutes: number): number {
  const rounded = Math.round(Math.max(1, Math.min(1440, intervalMinutes)));

  if (rounded <= 60) {
    return 60 % rounded === 0 ? rounded : 60;
  }

  return rounded % 60 === 0 ? rounded : 60;
}
