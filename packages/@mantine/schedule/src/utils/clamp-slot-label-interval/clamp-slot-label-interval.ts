import { clampIntervalMinutes } from '../clamp-interval-minutes/clamp-interval-minutes';

/**
 * Clamps slot label interval so that every label lines up with a slot boundary:
 *
 * - Non-positive and non-finite values fall back to `60`.
 * - The value is clamped with the same rules as `intervalMinutes` (see `clampIntervalMinutes`).
 * - The result is rounded up to the next multiple of the clamped `intervalMinutes` that
 *   satisfies the same rules and is never smaller than it. It is capped to a single day (`1440`).
 */
export function clampSlotLabelInterval(slotLabelInterval: number, intervalMinutes: number): number {
  const interval = clampIntervalMinutes(intervalMinutes);
  const label = clampIntervalMinutes(
    Number.isFinite(slotLabelInterval) && slotLabelInterval > 0 ? slotLabelInterval : 60
  );

  let result = Math.ceil(label / interval) * interval;

  while (result < 1440 && clampIntervalMinutes(result) !== result) {
    result += interval;
  }

  return Math.min(1440, result);
}
