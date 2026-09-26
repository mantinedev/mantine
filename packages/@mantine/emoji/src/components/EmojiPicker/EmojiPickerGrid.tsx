import { useEffect, useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { ScrollArea, ScrollAreaProps } from '@mantine/core';
import { FlattenedRowItem } from '../../types';
import { getEmojiIdAtIndex, getItemEmojiOffsets } from '../../utils';
import { EmojiButton } from './EmojiButton';
import { useEmojiPickerContext } from './EmojiPicker.context';

interface EmojiPickerGridProps {
  items: FlattenedRowItem[];
  onKeyDown: (event: React.KeyboardEvent) => void;
  focusedEmojiIndex: number;
  emojiSize: number;
  headerHeight?: number;
  scrollToIndexRef?: React.RefObject<((index: number) => void) | null>;
  scrollAreaProps?: ScrollAreaProps;
}

const DEFAULT_HEADER_HEIGHT = 32;
const DEFAULT_SCROLL_AREA_HEIGHT = 300;

export function EmojiPickerGrid({
  items,
  onKeyDown,
  focusedEmojiIndex,
  emojiSize,
  headerHeight = DEFAULT_HEADER_HEIGHT,
  scrollToIndexRef,
  scrollAreaProps,
}: EmojiPickerGridProps) {
  const ctx = useEmojiPickerContext();
  const viewportRef = useRef<HTMLDivElement>(null);

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => viewportRef.current,
    estimateSize: (index) => (items[index].type === 'header' ? headerHeight : emojiSize),
    overscan: 10,
  });

  useEffect(() => {
    virtualizer.measure();
  }, [emojiSize, virtualizer]);

  useEffect(() => {
    if (scrollToIndexRef) {
      scrollToIndexRef.current = (index: number) => {
        virtualizer.scrollToIndex(index, { align: 'auto' });
      };
    }
  }, [virtualizer, scrollToIndexRef]);

  const itemEmojiOffsets = getItemEmojiOffsets(items);
  const focusedEmojiId = getEmojiIdAtIndex(items, focusedEmojiIndex);

  return (
    <ScrollArea
      scrollbars="y"
      {...scrollAreaProps}
      {...ctx.getStyles('content', {
        style: { height: DEFAULT_SCROLL_AREA_HEIGHT, ...scrollAreaProps?.style },
      })}
      viewportRef={viewportRef}
      role="grid"
      tabIndex={0}
      aria-activedescendant={focusedEmojiId ? `emoji-${focusedEmojiId}` : undefined}
      onKeyDown={onKeyDown}
    >
      <div
        style={{
          height: virtualizer.getTotalSize(),
          width: '100%',
          position: 'relative',
        }}
      >
        {virtualizer.getVirtualItems().map((virtualItem) => {
          const item = items[virtualItem.index];

          if (item.type === 'header') {
            return (
              <div
                key={`header-${item.categoryId}`}
                {...ctx.getStyles('categoryLabel')}
                data-category={item.categoryId}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: virtualItem.size,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                {item.label}
              </div>
            );
          }

          const emojiOffset = itemEmojiOffsets[virtualItem.index];

          return (
            <div
              key={`row-${virtualItem.index}`}
              role="row"
              {...ctx.getStyles('grid')}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: virtualItem.size,
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              {item.emojis.map((emoji, colIndex) => {
                const emojiGlobalIndex = emojiOffset + colIndex;
                return (
                  <EmojiButton
                    key={emoji.id}
                    emoji={emoji}
                    isFocused={emojiGlobalIndex === focusedEmojiIndex}
                    emojiIndex={emojiGlobalIndex}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}
