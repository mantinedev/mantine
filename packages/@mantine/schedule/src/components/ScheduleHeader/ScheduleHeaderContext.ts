import { createContext, useContext } from 'react';
import type { ScheduleLabelsOverride } from '../../labels';

export const ScheduleHeaderLabelsContext = createContext<ScheduleLabelsOverride | undefined>(
  undefined
);
ScheduleHeaderLabelsContext.displayName = '@mantine/schedule/ScheduleHeaderLabelsContext';

export function useScheduleHeaderLabels(
  override?: ScheduleLabelsOverride
): ScheduleLabelsOverride | undefined {
  const contextLabels = useContext(ScheduleHeaderLabelsContext);
  if (!override) {
    return contextLabels;
  }
  if (!contextLabels) {
    return override;
  }
  return { ...contextLabels, ...override };
}
