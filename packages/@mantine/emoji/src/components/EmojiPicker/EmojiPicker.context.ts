import { createSafeContext, GetStylesApi, MantineSize } from '@mantine/core';
import { EmojiPickerLabels } from '../../types';
import type { EmojiPickerFactory } from './EmojiPicker';

export interface EmojiPickerContextValue {
  getStyles: GetStylesApi<EmojiPickerFactory>;
  labels: Required<EmojiPickerLabels>;
  size: MantineSize | undefined;
}

export const [EmojiPickerProvider, useEmojiPickerContext] =
  createSafeContext<EmojiPickerContextValue>(
    'EmojiPicker components must be used within EmojiPicker'
  );
