import { useEffect, useRef, useState } from 'react';
import { useCallbackRef } from '@mantine/hooks';
import { GetStylesApi } from '../../core';
import { AccordionChevron } from '../Accordion';
import { CheckIcon } from '../Checkbox/CheckIcon';
import { useComboboxContext } from '../Combobox/Combobox.context';
import { PopoverScrollArea } from '../Popover/PopoverScrollArea/PopoverScrollArea';
import { ScrollAreaProps } from '../ScrollArea';
import { UnstyledButton } from '../UnstyledButton';
import type {
  CascaderOption,
  CascaderSafeAreaPolygonOptions,
  CascaderStylesNames,
} from './Cascader';
import {
  cascaderOptionHasChildren,
  getCascaderColumns,
  getCascaderIndexPath,
  getCascaderOptionText,
} from './get-cascader-columns';
import { useCascaderSafeArea } from './use-cascader-safe-area';

type CascaderColumnsGetStyles = GetStylesApi<{ props: any; stylesNames: CascaderStylesNames }>;

export interface CascaderColumnsProps {
  data: CascaderOption[];
  activePath: string[];
  value: string[] | null;
  keyboardNav: boolean;
  currentOptionId: string | undefined;
  withCheckIcon: boolean | undefined;
  checkIconPosition: 'left' | 'right' | undefined;
  renderOption: ((option: CascaderOption, level: number) => React.ReactNode) | undefined;
  columnWidth: number | string | undefined;
  maxDisplayedLevels: number | undefined;
  previousLevelsControlLabel: string | undefined;
  nextLevelsControlLabel: string | undefined;
  maxDropdownHeight: number | string | undefined;
  nothingFoundMessage: React.ReactNode;
  getStyles: CascaderColumnsGetStyles;
  unstyled: boolean | undefined;
  scrollAreaProps: ScrollAreaProps | undefined;
  onOptionClick: (level: number, option: CascaderOption) => void;
  onOptionMouseEnter: (level: number, option: CascaderOption) => void;
  onColumnsMouseLeave: (() => void) | undefined;
  onPointerActivity: (() => void) | undefined;
  listId: string | undefined;
  labelId: string | undefined;
  ariaLabel: string | undefined;
  safeAreaPolygon: boolean | CascaderSafeAreaPolygonOptions | undefined;
}

interface CascaderPointerState {
  locked: boolean;
  lastMove: { x: number; y: number } | null;
  resting: { x: number; y: number } | null;
  pending: { level: number; option: CascaderOption; element: HTMLElement } | null;
}

function isSamePosition(
  position: { x: number; y: number } | null,
  event: React.MouseEvent | MouseEvent
) {
  return !!position && position.x === event.clientX && position.y === event.clientY;
}

export function getCascaderOptionId(listId: string | undefined, indexPath: number[]) {
  return listId && indexPath.length > 0 ? `${listId}-option-${indexPath.join('-')}` : undefined;
}

function getCascaderColumnId(listId: string | undefined, level: number) {
  return listId ? `${listId}-column-${level}` : undefined;
}

export function CascaderColumns({
  data,
  activePath,
  value,
  keyboardNav,
  currentOptionId,
  withCheckIcon,
  checkIconPosition,
  renderOption,
  columnWidth,
  maxDisplayedLevels,
  previousLevelsControlLabel,
  nextLevelsControlLabel,
  maxDropdownHeight,
  nothingFoundMessage,
  getStyles,
  unstyled,
  scrollAreaProps,
  onOptionClick,
  onOptionMouseEnter,
  onColumnsMouseLeave,
  onPointerActivity,
  listId,
  labelId,
  ariaLabel,
  safeAreaPolygon,
}: CascaderColumnsProps) {
  const allColumns = getCascaderColumns(data, activePath);
  const totalColumns = allColumns.length;
  const maxLevels =
    maxDisplayedLevels && maxDisplayedLevels > 0 ? maxDisplayedLevels : totalColumns;
  const maxOffset = Math.max(0, totalColumns - maxLevels);
  const currentLevel = activePath.length - 1;
  const showCheckIcon = withCheckIcon !== false;

  const activePathKey = JSON.stringify(activePath);
  const [offsetForActivePath, setOffsetForActivePath] = useState({
    key: activePathKey,
    offset: 0,
  });
  const windowOffset = offsetForActivePath.key === activePathKey ? offsetForActivePath.offset : 0;
  if (offsetForActivePath.key !== activePathKey) {
    setOffsetForActivePath({ key: activePathKey, offset: 0 });
  }
  const setWindowOffset = (updater: (current: number) => number) =>
    setOffsetForActivePath((current) => ({ key: activePathKey, offset: updater(current.offset) }));

  const clampedOffset = Math.min(windowOffset, maxOffset);
  const windowStart = Math.max(0, maxOffset - clampedOffset);
  const windowEnd = Math.min(totalColumns, windowStart + maxLevels);
  const visibleColumns = allColumns.slice(windowStart, windowEnd);
  const hiddenBefore = windowStart;
  const hiddenAfter = totalColumns - windowEnd;

  const check = showCheckIcon ? <CheckIcon {...getStyles('columnOptionCheck')} /> : null;

  const columnRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const currentOptionRef = useRef<HTMLButtonElement>(null);
  const pointer = useRef<CascaderPointerState>({
    locked: false,
    lastMove: null,
    resting: null,
    pending: null,
  });
  const safeArea = useCascaderSafeArea({ safeAreaPolygon, onFlush: onOptionMouseEnter });

  const applyHover = useCallbackRef((level: number, option: CascaderOption) => {
    if (safeArea.isBlocked(level)) {
      safeArea.setPending(level, option);
    } else {
      onOptionMouseEnter(level, option);
    }
  });
  const ctx = useComboboxContext();
  const visibleColumnIds = listId
    ? visibleColumns.map((_, index) => getCascaderColumnId(listId, windowStart + index)).join(' ')
    : undefined;
  const activeIndexPath = getCascaderIndexPath(data, activePath);

  useEffect(() => {
    if (keyboardNav) {
      pointer.current.locked = true;
    } else {
      pointer.current.resting = pointer.current.lastMove;
    }
  }, [activePathKey, keyboardNav]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const state = pointer.current;
      if (isSamePosition(state.lastMove, event)) {
        return;
      }

      const pending = state.pending;
      state.lastMove = { x: event.clientX, y: event.clientY };
      state.locked = false;
      state.resting = null;
      state.pending = null;

      if (pending?.element.isConnected) {
        applyHover(pending.level, pending.option);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!visibleColumnIds) {
      return undefined;
    }

    ctx.setListId(visibleColumnIds);
    return () => ctx.setListId((current) => (current === visibleColumnIds ? null : current));
  }, [visibleColumnIds]);

  useEffect(() => {
    if (currentOptionId) {
      currentOptionRef.current?.scrollIntoView({ block: 'nearest' });
    }
  }, [currentOptionId]);

  return (
    <div
      {...getStyles('columnsList')}
      role="presentation"
      onMouseLeave={() => {
        safeArea.disarm();
        if (!pointer.current.locked) {
          onColumnsMouseLeave?.();
        }
      }}
      onMouseMove={(event) => {
        if (!isSamePosition(pointer.current.lastMove, event)) {
          onPointerActivity?.();
        }
      }}
    >
      {hiddenBefore > 0 && (
        <UnstyledButton
          {...getStyles('columnsOverflow')}
          data-position="start"
          tabIndex={-1}
          unstyled={unstyled}
          aria-label={previousLevelsControlLabel}
          title={previousLevelsControlLabel}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => setWindowOffset((current) => Math.min(maxOffset, current + 1))}
        >
          <AccordionChevron />
        </UnstyledButton>
      )}

      {visibleColumns.map((options, index) => {
        const level = windowStart + index;
        const isLastColumn = index === visibleColumns.length - 1 && hiddenAfter === 0;
        const parentOption =
          level > 0
            ? allColumns[level - 1].find((item) => item.value === activePath[level - 1])
            : undefined;

        return (
          <div
            key={level}
            ref={(node) => {
              columnRefs.current[level] = node;
            }}
            data-last={isLastColumn || undefined}
            {...getStyles('column', {
              style: columnWidth ? { width: columnWidth, minWidth: columnWidth } : undefined,
            })}
          >
            <PopoverScrollArea
              mah={maxDropdownHeight}
              scrollbarSize="var(--combobox-padding)"
              role="listbox"
              id={getCascaderColumnId(listId, level)}
              aria-labelledby={level === 0 ? labelId : undefined}
              aria-label={
                parentOption ? getCascaderOptionText(parentOption) : labelId ? undefined : ariaLabel
              }
              {...scrollAreaProps}
              offsetScrollbars={scrollAreaProps?.offsetScrollbars !== false}
              {...getStyles('columnScroll')}
            >
              {options.length === 0 ? (
                <div {...getStyles('columnEmpty')}>{nothingFoundMessage}</div>
              ) : (
                options.map((option, optionIndex) => {
                  const isOnActivePath = activePath[level] === option.value;
                  const isCurrent = isOnActivePath && level === currentLevel && keyboardNav;
                  const isInPath = isOnActivePath && level < currentLevel;
                  const hasChildren = cascaderOptionHasChildren(option);
                  const isSelected =
                    !!value && value.length === level + 1 && value[level] === option.value;

                  return (
                    <UnstyledButton
                      key={option.value}
                      ref={isCurrent ? currentOptionRef : undefined}
                      id={getCascaderOptionId(listId, [
                        ...activeIndexPath.slice(0, level),
                        optionIndex,
                      ])}
                      role="option"
                      aria-selected={isSelected}
                      aria-disabled={option.disabled || undefined}
                      data-current={isCurrent || undefined}
                      data-in-path={isInPath || undefined}
                      data-selected={isSelected || undefined}
                      data-disabled={option.disabled || undefined}
                      tabIndex={-1}
                      unstyled={unstyled}
                      onMouseDown={(event) => event.preventDefault()}
                      onClick={() => {
                        if (!option.disabled) {
                          onOptionClick(level, option);
                        }
                      }}
                      onMouseEnter={(event) => {
                        if (option.disabled) {
                          return;
                        }

                        const state = pointer.current;
                        if (state.locked || isSamePosition(state.resting, event)) {
                          state.pending = { level, option, element: event.currentTarget };
                          return;
                        }

                        applyHover(level, option);
                      }}
                      onMouseLeave={(event) => {
                        if (pointer.current.pending?.element === event.currentTarget) {
                          pointer.current.pending = null;
                        }
                        safeArea.clearPending(level, option);

                        if (!safeArea.enabled || option.disabled) {
                          return;
                        }

                        if (activePath[level] !== option.value) {
                          return;
                        }

                        const floating = columnRefs.current[level + 1];

                        if (!floating) {
                          return;
                        }

                        safeArea.arm({
                          level,
                          reference: event.currentTarget,
                          floating,
                          clientX: event.clientX,
                          clientY: event.clientY,
                        });
                      }}
                      {...getStyles('columnOption')}
                    >
                      {isSelected && checkIconPosition === 'left' && check}

                      <span {...getStyles('columnOptionLabel')}>
                        {renderOption
                          ? renderOption(option, level)
                          : (option.label ?? option.value)}
                      </span>

                      {isSelected && checkIconPosition !== 'left' && check}

                      {hasChildren && (
                        <span {...getStyles('columnOptionIcon')}>
                          <AccordionChevron />
                        </span>
                      )}
                    </UnstyledButton>
                  );
                })
              )}
            </PopoverScrollArea>
          </div>
        );
      })}

      {hiddenAfter > 0 && (
        <UnstyledButton
          {...getStyles('columnsOverflow')}
          data-position="end"
          tabIndex={-1}
          unstyled={unstyled}
          aria-label={nextLevelsControlLabel}
          title={nextLevelsControlLabel}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => setWindowOffset((current) => Math.max(0, current - 1))}
        >
          <AccordionChevron />
        </UnstyledButton>
      )}
    </div>
  );
}

CascaderColumns.displayName = '@mantine/core/CascaderColumns';
