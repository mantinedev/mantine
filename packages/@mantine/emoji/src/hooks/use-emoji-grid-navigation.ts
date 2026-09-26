import { useCallback, useEffect, useState } from 'react';
import { EmojiPickerEmoji, FlattenedRowItem } from '../types';
import { applySkinTone, emojiIndexToRowIndex, getAllEmojis } from '../utils';

interface UseEmojiGridNavigationInput {
  flattenedItems: FlattenedRowItem[];
  columns: number;
  skinTone: number;
  onEmojiSelect: (emoji: EmojiPickerEmoji) => void;
  onEscape?: () => void;
  scrollToIndex?: (index: number) => void;
}

export function useEmojiGridNavigation({
  flattenedItems,
  columns,
  skinTone,
  onEmojiSelect,
  onEscape,
  scrollToIndex,
}: UseEmojiGridNavigationInput) {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [keyboardActive, setKeyboardActive] = useState(false);
  const allEmojis = getAllEmojis(flattenedItems);

  useEffect(() => {
    if (allEmojis.length > 0 && focusedIndex >= allEmojis.length) {
      setFocusedIndex(allEmojis.length - 1);
    }
  }, [allEmojis.length, focusedIndex]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (allEmojis.length === 0) {
        return;
      }

      let nextIndex = focusedIndex;

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowLeft':
        case 'ArrowDown':
        case 'ArrowUp':
          if (!keyboardActive) {
            setKeyboardActive(true);
            setFocusedIndex(0);
            const rowIndex = emojiIndexToRowIndex(flattenedItems, 0);
            scrollToIndex?.(rowIndex);
            event.preventDefault();
            return;
          }
          break;
        default:
          break;
      }

      switch (event.key) {
        case 'ArrowRight':
          nextIndex = Math.min(focusedIndex + 1, allEmojis.length - 1);
          event.preventDefault();
          break;
        case 'ArrowLeft':
          nextIndex = Math.max(focusedIndex - 1, 0);
          event.preventDefault();
          break;
        case 'ArrowDown':
          nextIndex = Math.min(focusedIndex + columns, allEmojis.length - 1);
          event.preventDefault();
          break;
        case 'ArrowUp':
          nextIndex = Math.max(focusedIndex - columns, 0);
          event.preventDefault();
          break;
        case 'Enter':
        case ' ':
          if (allEmojis[focusedIndex]) {
            onEmojiSelect(applySkinTone(allEmojis[focusedIndex], skinTone));
          }
          event.preventDefault();
          break;
        case 'Escape':
          onEscape?.();
          event.preventDefault();
          break;
        default:
          return;
      }

      if (nextIndex !== focusedIndex) {
        setKeyboardActive(true);
        setFocusedIndex(nextIndex);
        const rowIndex = emojiIndexToRowIndex(flattenedItems, nextIndex);
        scrollToIndex?.(rowIndex);
      }
    },
    [
      focusedIndex,
      allEmojis,
      columns,
      skinTone,
      keyboardActive,
      onEmojiSelect,
      onEscape,
      scrollToIndex,
      flattenedItems,
    ]
  );

  const deactivateKeyboard = useCallback(() => {
    setKeyboardActive(false);
  }, []);

  const focusedEmoji = allEmojis[focusedIndex]
    ? applySkinTone(allEmojis[focusedIndex], skinTone)
    : null;

  return {
    focusedIndex,
    setFocusedIndex,
    focusedEmoji,
    handleKeyDown,
    keyboardActive,
    deactivateKeyboard,
    allEmojis,
  };
}
