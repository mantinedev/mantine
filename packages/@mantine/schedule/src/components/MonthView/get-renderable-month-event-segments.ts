import { DateStringValue, MonthEventPositionData, MonthPositionedEventData } from '../../types';

const DAYS_IN_WEEK = 7;
const DAY_WIDTH = 100 / DAYS_IN_WEEK;

interface GetRenderableMonthEventSegmentsInput {
  events: MonthPositionedEventData[];
  groupedByDay: Record<string, MonthPositionedEventData[]>;
  maxEventsPerDay: number;
  week: DateStringValue[];
}

interface EventDayRange {
  startDayIndex: number;
  endDayIndex: number;
}

interface SegmentRange extends EventDayRange {
  row: number;
}

export interface RenderableMonthEventSegment {
  event: MonthPositionedEventData;
  position: MonthEventPositionData;
  clipStart: boolean;
  clipEnd: boolean;
  key: string;
}

function getEventDayRange(event: MonthPositionedEventData): EventDayRange {
  const startDayIndex = Math.max(0, Math.round(event.position.startOffset / DAY_WIDTH));
  const daysSpanned = Math.max(1, Math.round(event.position.width / DAY_WIDTH));

  return {
    startDayIndex,
    endDayIndex: Math.min(DAYS_IN_WEEK - 1, startDayIndex + daysSpanned - 1),
  };
}

function getFirstAvailableRow(usedRows: Set<number>, maxEventsPerDay: number): number | null {
  for (let row = 0; row < maxEventsPerDay; row += 1) {
    if (!usedRows.has(row)) {
      return row;
    }
  }

  return null;
}

function getSegmentHanging(
  originalHanging: MonthEventPositionData['hanging'],
  touchesStart: boolean,
  touchesEnd: boolean
): MonthEventPositionData['hanging'] {
  const hangsFromStart =
    touchesStart && (originalHanging === 'start' || originalHanging === 'both');
  const hangsFromEnd = touchesEnd && (originalHanging === 'end' || originalHanging === 'both');

  if (hangsFromStart && hangsFromEnd) {
    return 'both';
  }

  if (hangsFromStart) {
    return 'start';
  }

  if (hangsFromEnd) {
    return 'end';
  }

  return 'none';
}

function getSegmentPosition(
  event: MonthPositionedEventData,
  segment: SegmentRange,
  eventRange: EventDayRange
): MonthEventPositionData {
  const touchesStart = segment.startDayIndex === eventRange.startDayIndex;
  const touchesEnd = segment.endDayIndex === eventRange.endDayIndex;

  return {
    ...event.position,
    startOffset: (segment.startDayIndex / DAYS_IN_WEEK) * 100,
    width: ((segment.endDayIndex - segment.startDayIndex + 1) / DAYS_IN_WEEK) * 100,
    row: segment.row,
    hanging: getSegmentHanging(event.position.hanging, touchesStart, touchesEnd),
  };
}

function getEventKey(event: MonthPositionedEventData): string | number {
  return event.id;
}

export function getRenderableMonthEventSegments({
  events,
  groupedByDay,
  maxEventsPerDay,
  week,
}: GetRenderableMonthEventSegmentsInput): RenderableMonthEventSegment[] {
  const eventIndexes = new Map<MonthPositionedEventData, number>();
  const eventRanges = new Map<MonthPositionedEventData, EventDayRange>();
  const renderRows = new Map<MonthPositionedEventData, Map<number, number>>();

  events.forEach((event, index) => {
    eventIndexes.set(event, index);
    eventRanges.set(event, getEventDayRange(event));
  });

  const setRenderRow = (event: MonthPositionedEventData, dayIndex: number, row: number) => {
    if (!renderRows.has(event)) {
      renderRows.set(event, new Map());
    }

    renderRows.get(event)!.set(dayIndex, row);
  };

  for (let dayIndex = 0; dayIndex < week.length; dayIndex += 1) {
    const dayEvents = groupedByDay[week[dayIndex]] || [];
    const dayEventIds = new Set(dayEvents.map((event) => getEventKey(event)));
    const dayWeekEvents = events.filter((event) => {
      const range = eventRanges.get(event)!;
      return (
        dayEventIds.has(getEventKey(event)) &&
        dayIndex >= range.startDayIndex &&
        dayIndex <= range.endDayIndex
      );
    });

    if (dayEvents.length > maxEventsPerDay) {
      dayWeekEvents.forEach((event) => {
        if (event.position.row < maxEventsPerDay) {
          setRenderRow(event, dayIndex, event.position.row);
        }
      });

      continue;
    }

    const usedRows = new Set<number>();
    const sortedDayEvents = [...dayWeekEvents].sort((a, b) => {
      const rowDiff = a.position.row - b.position.row;

      if (rowDiff !== 0) {
        return rowDiff;
      }

      return eventIndexes.get(a)! - eventIndexes.get(b)!;
    });

    sortedDayEvents.forEach((event) => {
      let row = event.position.row;

      if (row >= maxEventsPerDay || usedRows.has(row)) {
        const availableRow = getFirstAvailableRow(usedRows, maxEventsPerDay);

        if (availableRow === null) {
          return;
        }

        row = availableRow;
      }

      usedRows.add(row);
      setRenderRow(event, dayIndex, row);
    });
  }

  return events.flatMap((event) => {
    const eventRange = eventRanges.get(event)!;
    const eventRenderRows = renderRows.get(event);
    const segments: RenderableMonthEventSegment[] = [];
    let currentSegment: SegmentRange | null = null;

    const addSegment = (segment: SegmentRange) => {
      const position = getSegmentPosition(event, segment, eventRange);

      segments.push({
        event,
        position,
        clipStart: segment.startDayIndex > eventRange.startDayIndex,
        clipEnd: segment.endDayIndex < eventRange.endDayIndex,
        key: `${event.id}-${event.position.weekIndex}-${segment.startDayIndex}-${segment.endDayIndex}-${segment.row}`,
      });
    };

    for (
      let dayIndex = eventRange.startDayIndex;
      dayIndex <= eventRange.endDayIndex;
      dayIndex += 1
    ) {
      const row = eventRenderRows?.get(dayIndex);

      if (row === undefined) {
        if (currentSegment) {
          addSegment(currentSegment);
          currentSegment = null;
        }

        continue;
      }

      if (currentSegment && currentSegment.row === row) {
        currentSegment.endDayIndex = dayIndex;
      } else {
        if (currentSegment) {
          addSegment(currentSegment);
        }

        currentSegment = {
          startDayIndex: dayIndex,
          endDayIndex: dayIndex,
          row,
        };
      }
    }

    if (currentSegment) {
      addSegment(currentSegment);
    }

    return segments;
  });
}
