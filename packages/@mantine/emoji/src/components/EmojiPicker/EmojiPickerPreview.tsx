import { EmojiPickerEmoji } from '../../types';
import { useEmojiPickerContext } from './EmojiPicker.context';

interface EmojiPickerPreviewProps {
  emoji: EmojiPickerEmoji | null;
}

export function EmojiPickerPreview({ emoji }: EmojiPickerPreviewProps) {
  const ctx = useEmojiPickerContext();

  return (
    <div {...ctx.getStyles('preview')} aria-live="polite" aria-label={ctx.labels.preview}>
      {emoji ? (
        <>
          <span {...ctx.getStyles('previewEmoji')}>{emoji.emoji}</span>
          <span {...ctx.getStyles('previewName')}>{emoji.name}</span>
        </>
      ) : null}
    </div>
  );
}
