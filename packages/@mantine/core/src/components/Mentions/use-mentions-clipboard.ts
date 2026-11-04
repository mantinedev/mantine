import type { MentionsChangeReason } from './Mentions.types';
import { getPlainText } from './utils/get-plain-text';
import { getMarkupRange, mapMarkupIndex } from './utils/map-plain-text-index';
import { normalizeNewlines } from './utils/normalize-newlines';
import { getSelectionStates } from './utils/selection';
import type { MentionConfig } from './utils/types';
import type { MentionWalk } from './utils/walk-mentions';

const CLIPBOARD_TYPE = 'application/x-mantine-mentions';

type ClipboardHandler = React.ClipboardEventHandler<HTMLTextAreaElement>;

interface UseMentionsClipboardInput {
  walk: MentionWalk;
  configs: MentionConfig[];
  singleLine: boolean;
  interactive: boolean;
  readLiveSelection: (target: HTMLTextAreaElement) => { start: number; end: number };
  commitEdit: (
    value: string,
    caret: number,
    caretBefore: number,
    reason: MentionsChangeReason
  ) => void;
  onCopy: ClipboardHandler | undefined;
  onCut: ClipboardHandler | undefined;
  onPaste: ClipboardHandler | undefined;
}

export function useMentionsClipboard({
  walk,
  configs,
  singleLine,
  interactive,
  readLiveSelection,
  commitEdit,
  onCopy,
  onCut,
  onPaste,
}: UseMentionsClipboardInput) {
  const writeClipboard = (
    event: React.ClipboardEvent<HTMLTextAreaElement>,
    widenToMentions: boolean
  ) => {
    const selection = readLiveSelection(event.currentTarget);

    if (selection.start === selection.end || !event.clipboardData) {
      return null;
    }

    const range = getMarkupRange(walk, selection.start, selection.end);
    const start = widenToMentions ? mapMarkupIndex(walk, range.markupStart) : selection.start;
    const end = widenToMentions ? mapMarkupIndex(walk, range.markupEnd) : selection.end;
    const states = getSelectionStates(walk.spans, start, end);
    const coversMentions =
      states.size > 0 && [...states.values()].every((state) => state === 'full');
    event.preventDefault();
    event.clipboardData.setData('text/plain', walk.plainText.slice(start, end));
    if (coversMentions) {
      event.clipboardData.setData(
        CLIPBOARD_TYPE,
        walk.value.slice(range.markupStart, range.markupEnd)
      );
    }
    return { ...range, start, end };
  };

  const handleCopy = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    onCopy?.(event);
    if (!event.defaultPrevented) {
      writeClipboard(event, false);
    }
  };

  const handleCut = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    onCut?.(event);
    if (event.defaultPrevented || !interactive) {
      return;
    }

    const range = writeClipboard(event, true);
    if (!range) {
      return;
    }

    const newValue = walk.value.slice(0, range.markupStart) + walk.value.slice(range.markupEnd);
    commitEdit(newValue, range.start, range.end, { type: 'cut', nativeEvent: event.nativeEvent });
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    onPaste?.(event);
    if (event.defaultPrevented || !interactive) {
      return;
    }

    const markup = event.clipboardData?.getData(CLIPBOARD_TYPE);
    if (!markup) {
      return;
    }

    const inserted = normalizeNewlines(markup, singleLine);
    const insertedPlainText = getPlainText(inserted, configs);
    const clipboardText = normalizeNewlines(event.clipboardData.getData('text/plain'), singleLine);
    if (insertedPlainText !== clipboardText) {
      return;
    }

    const target = event.currentTarget;
    const { start, end } = readLiveSelection(target);
    const range = getMarkupRange(walk, start, end);
    const newValue =
      walk.value.slice(0, range.markupStart) + inserted + walk.value.slice(range.markupEnd);
    if (target.maxLength >= 0 && getPlainText(newValue, configs).length > target.maxLength) {
      return;
    }

    event.preventDefault();
    const caret = mapMarkupIndex(walk, range.markupStart) + insertedPlainText.length;
    commitEdit(newValue, caret, end, { type: 'paste', nativeEvent: event.nativeEvent });
  };

  return { onCopy: handleCopy, onCut: handleCut, onPaste: handlePaste };
}
