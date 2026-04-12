import { Box, GetStylesApi, UnstyledButton } from '@mantine/core';
import { getLabel, ScheduleLabelsOverride } from '../../labels';
import { ScheduleMode, ScheduleResourceData } from '../../types';
import { DayTimeInterval, getBusinessHoursMod } from '../../utils';
import type { ResourcesWeekViewControlsRef } from './handle-resources-week-view-key-down';
import type { ResourcesWeekViewFactory } from './ResourcesWeekView';

export interface ResourcesWeekViewRowProps {
  resource: ScheduleResourceData;
  resourceIndex: number;
  weekdays: string[];
  slots: DayTimeInterval[];
  getStyles: GetStylesApi<ResourcesWeekViewFactory>;
  children?: React.ReactNode;
  labels?: ScheduleLabelsOverride;
  highlightBusinessHours?: boolean;
  businessHours?: [string, string];
  withEventsDragAndDrop?: boolean;
  onRowSlotsDragOver?: (
    e: React.DragEvent<HTMLDivElement>,
    resourceId: string | number,
    resourceIndex: number
  ) => void;
  onRowSlotsDragLeave?: () => void;
  onRowSlotsDrop?: (
    e: React.DragEvent<HTMLDivElement>,
    resourceId: string | number,
    resourceIndex: number
  ) => void;
  onSlotClick?: (
    resourceId: string | number,
    day: string,
    slotTime: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  dropTargetSlotIndex?: number;
  mode?: ScheduleMode;
  slotsRef?: ResourcesWeekViewControlsRef;
  firstSlotIndex?: { resourceIndex: number; slotIndex: number };
  onSlotKeyDown?: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    resourceIndex: number,
    slotIndex: number
  ) => void;
  withDragSlotSelect?: boolean;
  onSlotPointerDown?: (
    event: React.PointerEvent<HTMLButtonElement>,
    index: number,
    group: string
  ) => void;
  isSlotDragSelected?: (index: number, group: string) => boolean;
  rowSlotsContainerRef?: (node: HTMLDivElement | null) => void;
  renderResourceLabel?: (resource: ScheduleResourceData) => React.ReactNode;
  scrolledX?: boolean;
}

export function ResourcesWeekViewRow({
  resource,
  resourceIndex,
  weekdays,
  slots,
  getStyles,
  children,
  labels,
  highlightBusinessHours,
  businessHours,
  withEventsDragAndDrop,
  onRowSlotsDragOver,
  onRowSlotsDragLeave,
  onRowSlotsDrop,
  onSlotClick,
  dropTargetSlotIndex,
  mode,
  slotsRef,
  firstSlotIndex,
  onSlotKeyDown,
  withDragSlotSelect,
  onSlotPointerDown,
  isSlotDragSelected,
  rowSlotsContainerRef,
  renderResourceLabel,
  scrolledX,
}: ResourcesWeekViewRowProps) {
  const slotGroup = String(resource.id);

  const items = weekdays.flatMap((day, dayIndex) =>
    slots.map((slot, slotIndex) => {
      const flatIndex = dayIndex * slots.length + slotIndex;
      const isDropTarget = dropTargetSlotIndex === flatIndex;
      const isFirstSlot =
        firstSlotIndex?.resourceIndex === resourceIndex && firstSlotIndex?.slotIndex === flatIndex;
      const isDragSelected = isSlotDragSelected?.(flatIndex, slotGroup) || false;

      return (
        <UnstyledButton
          key={`${day}-${slot.startTime}`}
          ref={(node) => {
            if (node && slotsRef?.current) {
              if (!slotsRef.current[resourceIndex]) {
                slotsRef.current[resourceIndex] = [];
              }
              slotsRef.current[resourceIndex][flatIndex] = node;
            }
          }}
          {...getStyles('resourcesWeekViewRowSlot')}
          mod={{
            'hour-start': slot.isHourStart,
            ...getBusinessHoursMod({
              time: slot.startTime,
              businessHours,
              highlightBusinessHours,
            }),
            'drop-target': isDropTarget,
            'drag-selected': isDragSelected,
            static: mode === 'static',
          }}
          aria-label={`${getLabel('resourceSlot', labels)} ${resource.label} ${day} ${slot.startTime} - ${slot.endTime}`}
          tabIndex={mode === 'static' ? -1 : isFirstSlot ? 0 : -1}
          data-drag-slot-index={withDragSlotSelect && mode !== 'static' ? flatIndex : undefined}
          data-drag-slot-group={withDragSlotSelect && mode !== 'static' ? slotGroup : undefined}
          onKeyDown={(e) => {
            if (onSlotKeyDown) {
              onSlotKeyDown(e, resourceIndex, flatIndex);
            }
          }}
          onPointerDown={
            withDragSlotSelect && mode !== 'static'
              ? (e) => onSlotPointerDown?.(e, flatIndex, slotGroup)
              : undefined
          }
          onClick={
            mode === 'static' || !onSlotClick
              ? undefined
              : (e) => onSlotClick(resource.id, day, slot.startTime, e)
          }
          onDragOver={
            withEventsDragAndDrop && mode !== 'static' ? (e) => e.preventDefault() : undefined
          }
        />
      );
    })
  );

  return (
    <Box {...getStyles('resourcesWeekViewRow')}>
      <Box {...getStyles('resourcesWeekViewResourceLabel')} mod={{ 'scrolled-x': scrolledX }}>
        {renderResourceLabel ? renderResourceLabel(resource) : resource.label}
      </Box>
      <Box
        ref={rowSlotsContainerRef}
        {...getStyles('resourcesWeekViewRowSlots')}
        onDragOver={
          withEventsDragAndDrop && mode !== 'static'
            ? (e) => onRowSlotsDragOver?.(e, resource.id, resourceIndex)
            : undefined
        }
        onDragLeave={withEventsDragAndDrop && mode !== 'static' ? onRowSlotsDragLeave : undefined}
        onDrop={
          withEventsDragAndDrop && mode !== 'static'
            ? (e) => onRowSlotsDrop?.(e, resource.id, resourceIndex)
            : undefined
        }
      >
        {children}
        {items}
      </Box>
    </Box>
  );
}
