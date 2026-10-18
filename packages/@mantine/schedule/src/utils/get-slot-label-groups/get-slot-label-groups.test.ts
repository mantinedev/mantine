import { getDayTimeIntervals } from '../get-day-time-intervals/get-day-time-intervals';
import { getSlotLabelGroups } from './get-slot-label-groups';

describe('@mantine/schedule/get-slot-label-groups', () => {
  it('groups slots by hour by default', () => {
    const groups = getSlotLabelGroups(
      getDayTimeIntervals({ startTime: '08:00:00', endTime: '10:00:00', intervalMinutes: 15 })
    );

    expect(groups).toEqual([
      {
        startTime: '08:00:00',
        endTime: '09:00:00',
        slotsCount: 4,
        isLabelStart: true,
        isHourStart: true,
      },
      {
        startTime: '09:00:00',
        endTime: '10:00:00',
        slotsCount: 4,
        isLabelStart: true,
        isHourStart: true,
      },
    ]);
  });

  it('creates a group per label boundary', () => {
    const groups = getSlotLabelGroups(
      getDayTimeIntervals({
        startTime: '08:00:00',
        endTime: '09:00:00',
        intervalMinutes: 15,
        labelIntervalMinutes: 30,
      })
    );

    expect(groups.map((group) => [group.startTime, group.slotsCount, group.isHourStart])).toEqual([
      ['08:00:00', 2, true],
      ['08:30:00', 2, false],
    ]);
  });

  it('returns a leading group without a label when startTime is before the first label', () => {
    const groups = getSlotLabelGroups(
      getDayTimeIntervals({ startTime: '08:30:00', endTime: '10:00:00', intervalMinutes: 15 })
    );

    expect(groups.map((group) => [group.startTime, group.slotsCount, group.isLabelStart])).toEqual([
      ['08:30:00', 2, false],
      ['09:00:00', 4, true],
    ]);
  });

  it('truncates the last group at endTime', () => {
    const groups = getSlotLabelGroups(
      getDayTimeIntervals({ startTime: '08:00:00', endTime: '09:30:00', intervalMinutes: 15 })
    );

    expect(groups.map((group) => [group.startTime, group.endTime, group.slotsCount])).toEqual([
      ['08:00:00', '09:00:00', 4],
      ['09:00:00', '09:30:00', 2],
    ]);
  });

  it('returns an empty array for no intervals', () => {
    expect(getSlotLabelGroups([])).toEqual([]);
  });
});
