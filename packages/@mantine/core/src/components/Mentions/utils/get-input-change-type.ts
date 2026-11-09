import type { MentionsChangeReasonType } from '../Mentions.types';

const INPUT_TYPE_REASONS: Record<string, MentionsChangeReasonType> = {
  insertFromPaste: 'paste',
  deleteByCut: 'cut',
  insertFromDrop: 'insert-text',
  historyUndo: 'undo',
  historyRedo: 'redo',
};

export function getInputChangeType(
  nativeEvent: Event,
  removedMention: boolean
): MentionsChangeReasonType {
  return (
    INPUT_TYPE_REASONS[(nativeEvent as InputEvent).inputType] ??
    (removedMention ? 'mention-remove' : 'input')
  );
}
