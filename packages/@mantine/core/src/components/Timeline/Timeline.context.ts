import { createSafeContext, GetStylesApi } from '../../core';
import type { TimelineFactory } from './Timeline';

interface TimelineContextValue {
  getStyles: GetStylesApi<TimelineFactory>;
}

export const [TimelineProvider, useTimelineContext] = createSafeContext<TimelineContextValue>(
  'Timeline component was not found in tree'
);
