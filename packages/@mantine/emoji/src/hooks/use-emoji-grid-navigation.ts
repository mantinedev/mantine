import { useCallback, useMemo, useState } from 'react';
import type { EmojiPickerEmoji, FlattenedRowItem } from '../types';
import {
  applySkinTone,
  createEmojiGridModel,
  EmojiGridDirection,
  getEmojiItemIndex,
  getNextEmojiIndex,
} from '../utils';

type ActiveEmojiSource = 'anchor' | 'pointer' | 'keyboard';

interface ActiveEmojiState {
  index: number;
  source: ActiveEmojiSource;
}

interface UseEmojiGridNavigationInput {
  items: FlattenedRowItem[];
  resetKey: string;
  skinTone: number;
  onEmojiSelect: (emoji: EmojiPickerEmoji) => void;
  scrollToItem?: (itemIndex: number) => void;
}

const INITIAL_STATE: ActiveEmojiState = { index: 0, source: 'anchor' };

const KEY_DIRECTIONS: Record<string, EmojiGridDirection> = {
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ArrowUp: 'up',
  ArrowDown: 'down',
};

export function useEmojiGridNavigation({
  items,
  resetKey,
  skinTone,
  onEmojiSelect,
  scrollToItem,
}: UseEmojiGridNavigationInput) {
  const model = useMemo(() => createEmojiGridModel(items), [items]);
  const [state, setState] = useState<ActiveEmojiState>(INITIAL_STATE);
  const [prevResetKey, setPrevResetKey] = useState(resetKey);

  if (prevResetKey !== resetKey) {
    setPrevResetKey(resetKey);
    setState(INITIAL_STATE);
  }

  const isCurrent = state.index < model.emojis.length;
  const source: ActiveEmojiSource = isCurrent ? state.source : 'anchor';
  const activeIndex = model.emojis.length === 0 ? -1 : isCurrent ? state.index : 0;
  const keyboardActive = source === 'keyboard' && activeIndex !== -1;

  const setActive = useCallback((index: number, nextSource: ActiveEmojiSource) => {
    setState((prev) =>
      prev.index === index && prev.source === nextSource ? prev : { index, source: nextSource }
    );
  }, []);

  const setPointerIndex = useCallback((index: number) => setActive(index, 'pointer'), [setActive]);
  const setAnchorIndex = useCallback((index: number) => setActive(index, 'anchor'), [setActive]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (activeIndex === -1) {
        return;
      }

      const direction = KEY_DIRECTIONS[event.key];
      if (direction) {
        event.preventDefault();
        const nextIndex =
          source === 'anchor' ? activeIndex : getNextEmojiIndex(model, activeIndex, direction);
        setActive(nextIndex, 'keyboard');
        scrollToItem?.(getEmojiItemIndex(model, nextIndex));
        return;
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onEmojiSelect(applySkinTone(model.emojis[activeIndex], skinTone));
      }
    },
    [activeIndex, source, model, setActive, scrollToItem, onEmojiSelect, skinTone]
  );

  return {
    model,
    activeIndex,
    activeEmoji: activeIndex === -1 ? null : model.emojis[activeIndex],
    keyboardActive,
    handleKeyDown,
    setPointerIndex,
    setAnchorIndex,
  };
}
