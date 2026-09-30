import { EmojiPickerEmoji } from '../../types';
import { applySkinTone } from '../../utils';
import { useEmojiPickerContext } from './EmojiPicker.context';

interface EmojiPickerPreviewProps {
  emoji: EmojiPickerEmoji | null;
  skinTone: number;
  withPreview: boolean;
  children?: React.ReactNode;
}

export function EmojiPickerPreview({
  emoji,
  skinTone,
  withPreview,
  children,
}: EmojiPickerPreviewProps) {
  const ctx = useEmojiPickerContext();
  const displayEmoji = emoji ? applySkinTone(emoji, skinTone) : null;

  return (
    <div
      {...ctx.getStyles('preview')}
      role={withPreview ? 'group' : undefined}
      aria-label={withPreview ? ctx.labels.preview : undefined}
    >
      {withPreview && (
        <>
          <span {...ctx.getStyles('previewEmoji')}>{displayEmoji?.emoji}</span>
          <span {...ctx.getStyles('previewName')}>{displayEmoji?.name}</span>
        </>
      )}
      {children}
    </div>
  );
}
