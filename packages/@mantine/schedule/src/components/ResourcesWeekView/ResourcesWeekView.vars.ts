import { createVarsResolver, getRadius, rem } from '@mantine/core';
import type { ResourcesWeekViewFactory } from './ResourcesWeekView';

export const resourcesWeekViewVarsResolver = createVarsResolver<ResourcesWeekViewFactory>(
  (_theme, { radius, slotWidth, dayWidth, rowHeight, groupLabelWidth, layout }) => ({
    resourcesWeekView: {
      '--resources-week-view-radius': radius ? getRadius(radius) : undefined,
      '--resources-week-view-slot-width': rem(slotWidth),
      '--resources-week-view-day-width': rem(dayWidth ?? (layout === 'days' ? 120 : undefined)),
      '--resources-week-view-row-height': rem(rowHeight),
      '--resources-week-view-group-label-width': rem(groupLabelWidth),
      '--resources-week-view-business-hours-bg': undefined,
      '--resources-week-view-non-business-hours-bg': undefined,
    },
  })
);
