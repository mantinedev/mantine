import { useEffect, useRef, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Combobox, ScrollArea, Text } from '@mantine/core';
import {
  COLUMNS,
  getOffsetToCenter,
  getOffsetToReveal,
  GRID_HEIGHT,
  LABEL_HEIGHT,
  ROW_HEIGHT,
  type GridModel,
} from './grid-model';
import type { IconPickerValue } from './icon-index';
import { IconByName } from './IconByName';
import classes from './IconPicker.module.css';

interface IconGridProps {
  opened: boolean;
  model: GridModel;
  value: IconPickerValue | null;
  highlightedIndex: number;
  getOptionId: (index: number) => string;
  onPick: (index: number) => void;
  onHover: (index: number) => void;
}

const GRID_WIDTH = COLUMNS * ROW_HEIGHT;

/** Renders only the visible rows. Remount it (with `key`) when the list changes. */
export function IconGrid({
  opened,
  model,
  value,
  highlightedIndex,
  getOptionId,
  onPick,
  onHover,
}: IconGridProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [initialOffset] = useState(() => getOffsetToCenter(model, highlightedIndex));

  const virtualizer = useVirtualizer({
    count: model.rows.length,
    getScrollElement: () => viewportRef.current,
    estimateSize: (index) => (model.rows[index].kind === 'label' ? LABEL_HEIGHT : ROW_HEIGHT),
    getItemKey: (index) => model.rows[index].key,
    initialOffset,
    initialRect: { width: GRID_WIDTH, height: GRID_HEIGHT },
    overscan: 3,
  });

  // Keep the highlighted cell in view while it moves
  useEffect(() => {
    if (highlightedIndex < 0) {
      return;
    }
    const current = virtualizer.scrollOffset ?? 0;
    const next = getOffsetToReveal(model, highlightedIndex, current);
    if (next !== current) {
      virtualizer.scrollToOffset(next);
    }
  }, [highlightedIndex]);

  // The dropdown stays mounted while closed: center the highlighted cell once it is visible again
  useEffect(() => {
    if (!opened) {
      return undefined;
    }
    const frame = requestAnimationFrame(() =>
      virtualizer.scrollToOffset(getOffsetToCenter(model, highlightedIndex))
    );
    return () => cancelAnimationFrame(frame);
  }, [opened]);

  return (
    <ScrollArea
      h={GRID_HEIGHT}
      type="scroll"
      scrollbars="y"
      viewportRef={viewportRef}
      viewportProps={{ tabIndex: -1 }}
      onMouseLeave={() => onHover(-1)}
    >
      <div className={classes.grid} style={{ height: model.totalHeight }}>
        {virtualizer.getVirtualItems().map((item) => {
          const row = model.rows[item.index];
          const position = { transform: `translateY(${item.start}px)`, height: item.size };

          if (row.kind === 'label') {
            return (
              <Text
                key={row.key}
                size="xs"
                fw={500}
                className={classes.sectionLabel}
                style={position}
              >
                {row.label}
              </Text>
            );
          }

          return (
            <div key={row.key} className={classes.row} style={position}>
              {model.cells.slice(row.start, row.end).map((cell, offset) => {
                const index = row.start + offset;
                return (
                  <Combobox.Option
                    key={cell.key}
                    value={cell.key}
                    id={getOptionId(index)}
                    aria-label={cell.name}
                    className={classes.cell}
                    active={value?.name === cell.name && value.style === cell.style}
                    selected={index === highlightedIndex}
                    onClick={() => onPick(index)}
                    onMouseEnter={() => onHover(index)}
                  >
                    <IconByName name={cell.name} iconStyle={cell.style} size={22} stroke={1.5} />
                  </Combobox.Option>
                );
              })}
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
