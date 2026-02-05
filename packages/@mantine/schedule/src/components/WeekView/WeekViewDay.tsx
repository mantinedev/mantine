import dayjs from 'dayjs';
import { Box, GetStylesApi, UnstyledButton } from '@mantine/core';
import { useDatesContext } from '@mantine/dates';
import { getLabel, ScheduleLabelsOverride } from '../../labels';
import { DateStringValue, DayOfWeek, ScheduleMode } from '../../types';
import { DayTimeInterval, getBusinessHoursMod } from '../../utils';
import type { WeekViewControlsRef } from './handle-week-view-key-down';
import type { WeekViewFactory } from './WeekView';

export interface WeekViewDayProps {
  /** Date to display */
  day: Date | DateStringValue;

  /** Index of this day in the week */
  dayIndex: number;

  /** Slots intervals */
  slots: DayTimeInterval[];

  /** `useStyles` return value of `WeekView` */
  getStyles: GetStylesApi<WeekViewFactory>;

  /** Indices of weekend days, 0-6, where 0 is Sunday and 6 is Saturday. The default value is defined by `DatesProvider`. */
  weekendDays?: DayOfWeek[];

  /** Events list */
  children?: React.ReactNode;

  /** Labels override */
  labels?: ScheduleLabelsOverride;

  /** If set to true, highlights business hours with white background */
  highlightBusinessHours?: boolean;

  /** Business hours range in `HH:mm:ss` format */
  businessHours?: [string, string];

  /** If true, slots are drop targets for drag and drop */
  withEventsDragAndDrop?: boolean;

  /** Called when dragging over a slot */
  onSlotDragOver?: (e: React.DragEvent<HTMLButtonElement>, day: string, slotIndex: number) => void;

  /** Called when dragging leaves a slot */
  onSlotDragLeave?: () => void;

  /** Called when dropping on a slot */
  onSlotDrop?: (e: React.DragEvent<HTMLButtonElement>, day: string, slotTime: string) => void;

  /** Called when slot is clicked */
  onSlotClick?: (day: string, slotTime: string, event: React.MouseEvent<HTMLButtonElement>) => void;

  /** Index of the slot that is currently a drop target */
  dropTargetSlotIndex?: number;

  /** Interaction mode: 'default' allows all interactions, 'static' disables event interactions */
  mode?: ScheduleMode;

  /** Ref for keyboard navigation */
  slotsRef?: WeekViewControlsRef;

  /** Index of the first focusable slot */
  firstSlotIndex?: { dayIndex: number; slotIndex: number };

  /** Keyboard event handler for slots */
  onSlotKeyDown?: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    dayIndex: number,
    slotIndex: number
  ) => void;

  /** Called when Arrow Up is pressed on the first slot, used to navigate to all-day slot */
  onFirstSlotArrowUp?: (dayIndex: number) => void;
}

export function WeekViewDay({
  day,
  dayIndex,
  slots,
  getStyles,
  weekendDays,
  children,
  labels,
  highlightBusinessHours,
  businessHours,
  withEventsDragAndDrop,
  onSlotDragOver,
  onSlotDragLeave,
  onSlotDrop,
  onSlotClick,
  dropTargetSlotIndex,
  mode,
  slotsRef,
  firstSlotIndex,
  onSlotKeyDown,
  onFirstSlotArrowUp,
}: WeekViewDayProps) {
  const ctx = useDatesContext();
  const weekend = ctx.getWeekendDays(weekendDays).includes(dayjs(day).day() as DayOfWeek);
  const today = dayjs(day).isSame(dayjs(), 'day');

  const items = slots.map((slot, slotIndex) => {
    const isDropTarget = dropTargetSlotIndex === slotIndex;
    const isFirstSlot =
      firstSlotIndex?.dayIndex === dayIndex && firstSlotIndex?.slotIndex === slotIndex;

    return (
      <UnstyledButton
        key={slot.startTime}
        ref={(node) => {
          if (node && slotsRef?.current) {
            if (!slotsRef.current[dayIndex]) {
              slotsRef.current[dayIndex] = [];
            }
            slotsRef.current[dayIndex][slotIndex] = node;
          }
        }}
        {...getStyles('weekViewDaySlot')}
        mod={{
          'hour-start': slot.isHourStart,
          ...getBusinessHoursMod({
            time: slot.startTime,
            businessHours,
            highlightBusinessHours,
          }),
          'drop-target': isDropTarget,
          static: mode === 'static',
        }}
        aria-label={`${getLabel('timeSlot', labels)} ${dayjs(day).format('YYYY-MM-DD')} ${slot.startTime} - ${slot.endTime}`}
        tabIndex={mode === 'static' ? -1 : isFirstSlot ? 0 : -1}
        onKeyDown={(e) => {
          if (slotIndex === 0 && e.key === 'ArrowUp' && onFirstSlotArrowUp) {
            e.preventDefault();
            onFirstSlotArrowUp(dayIndex);
          } else if (onSlotKeyDown) {
            onSlotKeyDown(e, dayIndex, slotIndex);
          }
        }}
        onClick={
          mode === 'static' || !onSlotClick
            ? undefined
            : (e) => onSlotClick(String(day), slot.startTime, e)
        }
        onDragOver={
          withEventsDragAndDrop && mode !== 'static'
            ? (e) => onSlotDragOver?.(e, String(day), slotIndex)
            : undefined
        }
        onDragLeave={withEventsDragAndDrop && mode !== 'static' ? onSlotDragLeave : undefined}
        onDrop={
          withEventsDragAndDrop && mode !== 'static'
            ? (e) => onSlotDrop?.(e, String(day), slot.startTime)
            : undefined
        }
      />
    );
  });

  return (
    <Box {...getStyles('weekViewDay')} mod={{ today, weekend }}>
      <Box mod={{ today }} {...getStyles('weekViewDaySlots')}>
        {children}
        {items}
      </Box>
    </Box>
  );
}
