import { UnstyledButton } from '@mantine/core';
import { EmojiPickerEmoji } from '../../types';
import { useEmojiPickerContext } from './EmojiPicker.context';

interface EmojiButtonProps {
  emoji: EmojiPickerEmoji;
  isFocused: boolean;
  emojiIndex: number;
}

export function EmojiButton({ emoji, isFocused, emojiIndex }: EmojiButtonProps) {
  const ctx = useEmojiPickerContext();
  const { skinTone } = ctx;

  const displayEmoji =
    skinTone > 0 && emoji.skins && emoji.skins[skinTone - 1]
      ? emoji.skins[skinTone - 1]
      : emoji.emoji;

  const showFocused = isFocused && ctx.keyboardActive;

  return (
    <UnstyledButton
      {...ctx.getStyles('emoji')}
      role="gridcell"
      aria-label={emoji.name}
      title={emoji.name}
      id={`emoji-${emoji.id}`}
      tabIndex={-1}
      data-focused={showFocused || undefined}
      data-emoji-index={emojiIndex}
      onClick={() => ctx.onEmojiSelect({ ...emoji, emoji: displayEmoji })}
      onMouseEnter={() => {
        ctx.deactivateKeyboard();
        ctx.setHoveredEmoji(emoji);
      }}
      onMouseLeave={() => ctx.setHoveredEmoji(null)}
    >
      {displayEmoji}
    </UnstyledButton>
  );
}
