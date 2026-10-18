import { DayTimeInterval } from '../get-day-time-intervals/get-day-time-intervals';

export interface SlotLabelGroup {
  /** Start time of the first slot in the group in HH:mm:ss format */
  startTime: string;

  /** End time of the last slot in the group in HH:mm:ss format */
  endTime: string;

  /** Number of slots covered by the group */
  slotsCount: number;

  /** Indicates if the group starts at a label boundary, `false` for the leading group without a label */
  isLabelStart: boolean;

  /** Indicates if the group starts at the beginning of an hour */
  isHourStart: boolean;
}

/** Groups consecutive time intervals by label boundaries, the first group may start before the first label */
export function getSlotLabelGroups(intervals: DayTimeInterval[]): SlotLabelGroup[] {
  const groups: SlotLabelGroup[] = [];

  intervals.forEach((interval) => {
    const current = groups[groups.length - 1];

    if (current && !interval.isLabelStart) {
      current.endTime = interval.endTime;
      current.slotsCount += 1;
      return;
    }

    groups.push({
      startTime: interval.startTime,
      endTime: interval.endTime,
      slotsCount: 1,
      isLabelStart: interval.isLabelStart,
      isHourStart: interval.isHourStart,
    });
  });

  return groups;
}
