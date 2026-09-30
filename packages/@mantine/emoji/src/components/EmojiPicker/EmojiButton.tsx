import { memo } from 'react';
import { UnstyledButton } from '@mantine/core';
import { EmojiPickerEmoji } from '../../types';
import { applySkinTone } from '../../utils';
import { useEmojiPickerContext } from './EmojiPicker.context';

interface EmojiButtonProps {
  emoji: EmojiPickerEmoji;
  skinTone: number;
  emojiIndex: number;
  focused: boolean;
  id: string;
}

export const EmojiButton = memo(function EmojiButton({
  emoji,
  skinTone,
  emojiIndex,
  focused,
  id,
}: EmojiButtonProps) {
  const ctx = useEmojiPickerContext();

  return (
    <UnstyledButton
      {...ctx.getStyles('emoji')}
      role="gridcell"
      aria-label={emoji.name}
      title={emoji.name}
      id={id}
      tabIndex={-1}
      data-focused={focused || undefined}
      data-emoji-index={emojiIndex}
    >
      {applySkinTone(emoji, skinTone).emoji}
    </UnstyledButton>
  );
});
