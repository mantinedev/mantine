import { Box, GetStylesApi, UnstyledButton } from '@mantine/core';
import { getLabel, ScheduleLabelsOverride } from '../../labels';
import { ScheduleMode, ScheduleResourceData, ScheduleResourceGroup } from '../../types';
import { DayTimeInterval, getBusinessHoursMod, ResourceGroupInfo } from '../../utils';
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
  renderGroupLabel?: (group: ScheduleResourceGroup) => React.ReactNode;
  scrolledX?: boolean;
  groupInfo?: ResourceGroupInfo | null;
  allDayCount?: number;
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
  renderGroupLabel,
  scrolledX,
  groupInfo,
  allDayCount,
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
          if (!slotsRef?.current) {
            return;
          }
          if (!slotsRef.current[resourceIndex]) {
            slotsRef.current[resourceIndex] = [];
          }
          const row = slotsRef.current[resourceIndex];
          if (node) {
            row[slotIndex] = node;
          } else {
            delete row[slotIndex];
            while (row.length > 0 && row[row.length - 1] == null) {
              row.length -= 1;
            }
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

  const isGroupStart = groupInfo?.position === 'first' || groupInfo?.position === 'only';
  const groupCell =
    groupInfo !== undefined ? (
      groupInfo !== null ? (
        <Box
          {...getStyles('resourcesDayViewGroupColumn')}
          mod={{ 'scrolled-x': scrolledX, 'group-position': groupInfo.position }}
        >
          {isGroupStart && (
            <span
              style={
                groupInfo.count > 1
                  ? {
                      transform: `translateY(calc((${groupInfo.count - 1} * (var(--resources-day-view-row-height) + 1px)) / 2))`,
                    }
                  : undefined
              }
            >
              {renderGroupLabel ? renderGroupLabel(groupInfo.group) : groupInfo.group.label}
            </span>
          )}
        </Box>
      ) : (
        <Box {...getStyles('resourcesDayViewGroupColumnEmpty')} mod={{ 'scrolled-x': scrolledX }} />
      )
    ) : null;

  return (
    <Box {...getStyles('resourcesDayViewRow')}>
      {groupCell}
      <Box
        {...getStyles('resourcesDayViewResourceLabel')}
        mod={{ 'scrolled-x': scrolledX, 'has-groups': groupInfo !== undefined }}
      >
        {renderResourceLabel ? renderResourceLabel(resource) : resource.label}
      </Box>
      <Box
        ref={rowSlotsContainerRef}
        {...getStyles('resourcesDayViewRowSlots', {
          style: allDayCount
            ? {
                minHeight: `max(var(--resources-day-view-row-height), calc(${allDayCount} * (var(--resources-day-view-all-day-height) + 2px) + 4px))`,
              }
            : undefined,
        })}
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
