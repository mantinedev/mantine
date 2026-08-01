import { useRef, useState } from 'react';
import type { GetStylesApi } from '../../core';
import { AccordionChevron } from '../Accordion';
import { CheckIcon } from '../Checkbox/CheckIcon';
import { ScrollArea, ScrollAreaProps } from '../ScrollArea';
import { UnstyledButton } from '../UnstyledButton';
import type {
  CascaderOption,
  CascaderSafeAreaPolygonOptions,
  CascaderStylesNames,
} from './Cascader';
import { cascaderOptionHasChildren, getCascaderColumns } from './get-cascader-columns';
import { useCascaderSafeArea } from './use-cascader-safe-area';

type CascaderColumnsGetStyles = GetStylesApi<{ props: any; stylesNames: CascaderStylesNames }>;

export interface CascaderColumnsProps {
  data: CascaderOption[];
  activePath: string[];
  value: string[] | null;
  keyboardNav: boolean;
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
  safeAreaPolygon: boolean | CascaderSafeAreaPolygonOptions | undefined;
}

export function getCascaderOptionId(listId: string | undefined, level: number, value: string) {
  return listId ? `${listId}-${level}-${value}` : undefined;
}

export function CascaderColumns({
  data,
  activePath,
  value,
  keyboardNav,
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
  safeAreaPolygon,
}: CascaderColumnsProps) {
  const allColumns = getCascaderColumns(data, activePath);
  const totalColumns = allColumns.length;
  const maxLevels =
    maxDisplayedLevels && maxDisplayedLevels > 0 ? maxDisplayedLevels : totalColumns;
  const maxOffset = Math.max(0, totalColumns - maxLevels);
  const focusedLevel = activePath.length - 1;
  const showCheckIcon = withCheckIcon !== false;

  // Manual left/right scrolling of the visible window. It is reset synchronously whenever the
  // active path changes so that the focused column always stays visible during navigation.
  const activePathKey = JSON.stringify(activePath);
  const [windowState, setWindowState] = useState({ key: activePathKey, offset: 0 });
  const windowOffset = windowState.key === activePathKey ? windowState.offset : 0;
  if (windowState.key !== activePathKey) {
    setWindowState({ key: activePathKey, offset: 0 });
  }
  const setWindowOffset = (updater: (current: number) => number) =>
    setWindowState((current) => ({ key: activePathKey, offset: updater(current.offset) }));

  const clampedOffset = Math.min(windowOffset, maxOffset);
  const windowStart = Math.max(0, maxOffset - clampedOffset);
  const windowEnd = Math.min(totalColumns, windowStart + maxLevels);
  const visibleColumns = allColumns.slice(windowStart, windowEnd);
  const hiddenBefore = windowStart;
  const hiddenAfter = totalColumns - windowEnd;

  const check = showCheckIcon ? <CheckIcon {...getStyles('columnOptionCheck')} /> : null;

  const columnRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const safeArea = useCascaderSafeArea({ safeAreaPolygon, onFlush: onOptionMouseEnter });

  return (
    <div
      {...getStyles('columnsList')}
      role="presentation"
      onMouseLeave={() => {
        safeArea.disarm();
        onColumnsMouseLeave?.();
      }}
      onMouseMove={onPointerActivity}
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
            <ScrollArea.Autosize
              mah={maxDropdownHeight ?? 260}
              type="scroll"
              scrollbarSize="var(--combobox-padding)"
              role="listbox"
              {...scrollAreaProps}
              {...getStyles('columnScroll')}
            >
              {options.length === 0 ? (
                <div {...getStyles('columnEmpty')}>{nothingFoundMessage}</div>
              ) : (
                options.map((option) => {
                  const isActive = activePath[level] === option.value;
                  const isCurrent = isActive && level === focusedLevel && keyboardNav;
                  // The trail only covers ancestor columns; the deepest column is not highlighted
                  // during mouse navigation (only via the keyboard "current" state)
                  const isInPath = isActive && level < focusedLevel;
                  const hasChildren = cascaderOptionHasChildren(option);
                  const isSelected =
                    !!value && value.length === level + 1 && value[level] === option.value;

                  return (
                    <UnstyledButton
                      key={option.value}
                      id={getCascaderOptionId(listId, level, option.value)}
                      role="option"
                      aria-selected={isCurrent || undefined}
                      aria-disabled={option.disabled || undefined}
                      data-active={isCurrent || undefined}
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
                      onMouseEnter={() => {
                        if (option.disabled) {
                          return;
                        }

                        if (safeArea.isBlocked(level)) {
                          safeArea.setPending(level, option);
                          return;
                        }

                        onOptionMouseEnter(level, option);
                      }}
                      onMouseLeave={(event) => {
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
            </ScrollArea.Autosize>
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
