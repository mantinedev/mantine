import { createContext, useContext } from 'react';
import { GetStylesApi, MantineSize } from '@mantine/core';
import { EmojiPickerEmoji, EmojiPickerLabels, FlattenedRowItem } from '../../types';
import type { EmojiPickerFactory } from './EmojiPicker';

export interface EmojiPickerContextValue {
  getStyles: GetStylesApi<EmojiPickerFactory>;
  columns: number;
  emojiSize: number | undefined;
  skinTone: number;
  size: MantineSize | undefined;
  onEmojiSelect: (emoji: EmojiPickerEmoji) => void;
  onSkinToneChange: (tone: number) => void;
  hoveredEmoji: EmojiPickerEmoji | null;
  setHoveredEmoji: (emoji: EmojiPickerEmoji | null) => void;
  focusedEmojiIndex: number;
  setFocusedEmojiIndex: (index: number) => void;
  keyboardActive: boolean;
  deactivateKeyboard: () => void;
  flattenedItems: FlattenedRowItem[];
  labels: Required<EmojiPickerLabels>;
  unstyled: boolean | undefined;
  scrollToCategory: (categoryId: string) => void;
}

const EmojiPickerContext = createContext<EmojiPickerContextValue | null>(null);

export const EmojiPickerProvider = EmojiPickerContext.Provider;

export function useEmojiPickerContext() {
  const ctx = useContext(EmojiPickerContext);
  if (!ctx) {
    throw new Error('EmojiPicker components must be used within EmojiPicker');
  }
  return ctx;
}
