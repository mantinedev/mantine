import { createSafeContext, GetStylesApi } from '../../core';
import type { TimelineFactory } from './Timeline';

export interface TimelineContextValue {
  getStyles: GetStylesApi<TimelineFactory>;
  active: number;
  itemsCount: number;
  reverseActive: boolean | undefined;
  align: 'right' | 'left' | undefined;
}

export const [TimelineProvider, useTimelineContext] = createSafeContext<TimelineContextValue>(
  'Timeline component was not found in tree'
);
