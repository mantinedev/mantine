import { Box, GetStylesApi, UnstyledButton } from '@mantine/core';
import { getLabel, ScheduleLabelsOverride } from '../../labels';
import { ScheduleMode, ScheduleResourceData } from '../../types';
import { DayTimeInterval, getBusinessHoursMod } from '../../utils';
import type { ResourcesDayViewControlsRef } from './handle-resources-day-view-key-down';
import type { ResourcesDayViewFactory } from './ResourcesDayView';

export interface ResourcesDayViewRowProps {
  resource: ScheduleResourceData;
  resourceIndex: number;
  date: string;
  slots: DayTimeInterval[];
  getStyles: GetStylesApi<ResourcesDayViewFactory>;
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
    slotTime: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => void;
  dropTargetSlotIndex?: number;
  mode?: ScheduleMode;
  slotsRef?: ResourcesDayViewControlsRef;
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

export function ResourcesDayViewRow({
  resource,
  resourceIndex,
  date,
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
}: ResourcesDayViewRowProps) {
  const slotGroup = String(resource.id);

  const items = slots.map((slot, slotIndex) => {
    const isDropTarget = dropTargetSlotIndex === slotIndex;
    const isFirstSlot =
      firstSlotIndex?.resourceIndex === resourceIndex && firstSlotIndex?.slotIndex === slotIndex;
    const isDragSelected = isSlotDragSelected?.(slotIndex, slotGroup) || false;

    return (
      <UnstyledButton
        key={slot.startTime}
        ref={(node) => {
          if (node && slotsRef?.current) {
            if (!slotsRef.current[resourceIndex]) {
              slotsRef.current[resourceIndex] = [];
            }
            slotsRef.current[resourceIndex][slotIndex] = node;
          }
        }}
        {...getStyles('resourcesDayViewRowSlot')}
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
        aria-label={`${getLabel('resourceSlot', labels)} ${resource.label} ${date} ${slot.startTime} - ${slot.endTime}`}
        tabIndex={mode === 'static' ? -1 : isFirstSlot ? 0 : -1}
        data-drag-slot-index={withDragSlotSelect && mode !== 'static' ? slotIndex : undefined}
        data-drag-slot-group={withDragSlotSelect && mode !== 'static' ? slotGroup : undefined}
        onKeyDown={(e) => {
          if (onSlotKeyDown) {
            onSlotKeyDown(e, resourceIndex, slotIndex);
          }
        }}
        onPointerDown={
          withDragSlotSelect && mode !== 'static'
            ? (e) => onSlotPointerDown?.(e, slotIndex, slotGroup)
            : undefined
        }
        onClick={
          mode === 'static' || !onSlotClick
            ? undefined
            : (e) => onSlotClick(resource.id, slot.startTime, e)
        }
        onDragOver={
          withEventsDragAndDrop && mode !== 'static' ? (e) => e.preventDefault() : undefined
        }
      />
    );
  });

  return (
    <Box {...getStyles('resourcesDayViewRow')}>
      <Box {...getStyles('resourcesDayViewResourceLabel')} mod={{ 'scrolled-x': scrolledX }}>
        {renderResourceLabel ? renderResourceLabel(resource) : resource.label}
      </Box>
      <Box
        ref={rowSlotsContainerRef}
        {...getStyles('resourcesDayViewRowSlots')}
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
