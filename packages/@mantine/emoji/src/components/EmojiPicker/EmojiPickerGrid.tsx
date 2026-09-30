import { useEffect, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { ScrollArea, ScrollAreaProps } from '@mantine/core';
import { useIsomorphicEffect } from '@mantine/hooks';
import { FlattenedRowItem } from '../../types';
import { EmojiButton } from './EmojiButton';
import { useEmojiPickerContext } from './EmojiPicker.context';

export type EmojiPickerScrollToItem = (itemIndex: number, align: 'auto' | 'start') => void;

interface EmojiPickerGridProps {
  items: FlattenedRowItem[];
  itemOffsets: number[];
  columns: number;
  skinTone: number;
  focusedIndex: number;
  focusedItemIndex: number;
  idPrefix: string;
  gridId: string;
  onActiveDescendantChange: (id: string | undefined) => void;
  emojiSize: number;
  emptyContent: React.ReactNode;
  onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
  onPointerIndex: (index: number) => void;
  onEmojiClick: (index: number) => void;
  scrollToItemRef: React.RefObject<EmojiPickerScrollToItem | null>;
  scrollAreaProps?: ScrollAreaProps;
}

const HEADER_HEIGHT = 32;
const DEFAULT_SCROLL_AREA_HEIGHT = 300;

function getEmojiIndexFromEvent(event: React.SyntheticEvent) {
  const target = (event.target as HTMLElement).closest<HTMLElement>('[data-emoji-index]');
  return target ? Number(target.dataset.emojiIndex) : -1;
}

export function EmojiPickerGrid({
  items,
  itemOffsets,
  columns,
  skinTone,
  focusedIndex,
  focusedItemIndex,
  idPrefix,
  gridId,
  onActiveDescendantChange,
  emojiSize,
  emptyContent,
  onKeyDown,
  onPointerIndex,
  onEmojiClick,
  scrollToItemRef,
  scrollAreaProps,
}: EmojiPickerGridProps) {
  const ctx = useEmojiPickerContext();
  const viewportRef = useRef<HTMLDivElement>(null);
  const lastPointerRef = useRef<{ x: number; y: number } | null>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => viewportRef.current,
    estimateSize: (index) => (items[index].type === 'header' ? HEADER_HEIGHT : emojiSize),
    overscan: 10,
  });

  useEffect(() => {
    virtualizer.measure();
  }, [emojiSize, virtualizer]);

  useEffect(() => {
    scrollToItemRef.current = (itemIndex, align) => {
      virtualizer.scrollToIndex(itemIndex, { align });
    };
  }, [virtualizer, scrollToItemRef]);

  const virtualItems = virtualizer.getVirtualItems();
  const focusedItemMounted =
    focusedIndex !== -1 && virtualItems.some((item) => item.index === focusedItemIndex);
  const hasEmojis = items.length > 0;
  const activeDescendant =
    hasEmojis && focusedItemMounted ? `${idPrefix}-${focusedIndex}` : undefined;

  useIsomorphicEffect(() => {
    onActiveDescendantChange(activeDescendant);
  }, [activeDescendant, onActiveDescendantChange]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const last = lastPointerRef.current;
    if (last && last.x === event.clientX && last.y === event.clientY) {
      return;
    }
    lastPointerRef.current = { x: event.clientX, y: event.clientY };
    const index = getEmojiIndexFromEvent(event);
    if (index !== -1) {
      onPointerIndex(index);
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (getEmojiIndexFromEvent(event) !== -1) {
      event.preventDefault();
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const index = getEmojiIndexFromEvent(event);
    if (index !== -1) {
      onEmojiClick(index);
    }
  };

  return (
    <ScrollArea
      scrollbars="y"
      {...scrollAreaProps}
      {...ctx.getStyles('content', {
        style: { height: DEFAULT_SCROLL_AREA_HEIGHT, ...scrollAreaProps?.style },
      })}
      viewportRef={viewportRef}
      viewportProps={{
        ...scrollAreaProps?.viewportProps,
        ...(hasEmojis
          ? {
              id: gridId,
              role: 'grid',
              tabIndex: 0,
              'aria-label': ctx.labels.emojis,
              'aria-colcount': columns,
              'aria-activedescendant': activeDescendant,
              onKeyDown,
              onMouseMove: handleMouseMove,
              onMouseDown: handleMouseDown,
              onClick: handleClick,
            }
          : { tabIndex: -1 }),
      }}
    >
      {hasEmojis ? (
        <div style={{ height: virtualizer.getTotalSize(), width: '100%', position: 'relative' }}>
          {virtualItems.map((virtualItem) => {
            const item = items[virtualItem.index];
            const positionStyle: React.CSSProperties = {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: virtualItem.size,
              transform: `translateY(${virtualItem.start}px)`,
            };

            if (item.type === 'header') {
              return (
                <div
                  key={`header-${item.categoryId}`}
                  role="row"
                  {...ctx.getStyles('categoryLabel', { style: positionStyle })}
                  data-category={item.categoryId}
                >
                  <span role="columnheader" aria-colspan={columns}>
                    {item.label}
                  </span>
                </div>
              );
            }

            const emojiOffset = itemOffsets[virtualItem.index];

            return (
              <div
                key={`row-${virtualItem.index}`}
                role="row"
                {...ctx.getStyles('grid', { style: positionStyle })}
              >
                {item.emojis.map((emoji, colIndex) => {
                  const emojiIndex = emojiOffset + colIndex;
                  return (
                    <EmojiButton
                      key={emoji.id}
                      emoji={emoji}
                      skinTone={skinTone}
                      emojiIndex={emojiIndex}
                      focused={emojiIndex === focusedIndex}
                      id={`${idPrefix}-${emojiIndex}`}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      ) : (
        <div {...ctx.getStyles('empty')}>{emptyContent}</div>
      )}
    </ScrollArea>
  );
}
