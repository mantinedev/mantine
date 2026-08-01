import type { MentionConfig } from '../Mentions.types';
import { getMentions } from './get-mentions';
import { getPlainText } from './get-plain-text';
import { mapPlainTextIndex } from './map-plain-text-index';

export interface MentionsSelection {
  /** Caret start in the plain text before the change */
  selectionStartBefore: number;

  /** Caret end in the plain text before the change */
  selectionEndBefore: number;

  /** Caret end in the plain text after the change */
  selectionEndAfter: number;
}

export interface ApplyChangeResult {
  /** New markup value */
  value: string;

  /** `true` if the change removed at least one mention */
  removedMention: boolean;

  /** Caret position in the plain text of the new value */
  caretPlainTextIndex: number;
}

function spliceString(str: string, start: number, end: number, insert: string): string {
  return str.slice(0, start) + insert + str.slice(end);
}

/**
 * Applies a plain-text change back to the markup value. Uses the selection captured before and after
 * the change to map the edited span through the markup and splice it. A change that clips any part of
 * a mention removes the whole mention (atomic edit).
 */
export function applyChangeToValue(
  value: string,
  plainTextValue: string,
  selection: MentionsSelection,
  configs: MentionConfig[]
): ApplyChangeResult {
  const { selectionEndAfter, selectionEndBefore } = selection;
  let { selectionStartBefore } = selection;

  const oldPlainTextValue = getPlainText(value, configs);

  // Replacing a selection with same-length content keeps every offset identical, shift the start so
  // the changed character is still detected.
  if (
    selectionStartBefore === selectionEndBefore &&
    selectionEndBefore === selectionEndAfter &&
    oldPlainTextValue.length === plainTextValue.length
  ) {
    selectionStartBefore -= 1;
  }

  const insert = plainTextValue.slice(selectionStartBefore, selectionEndAfter);

  let spliceStart = Math.min(selectionStartBefore, selectionEndAfter);
  let spliceEnd = selectionEndBefore;

  if (selectionStartBefore === selectionEndAfter) {
    // Deletion without a selection (Backspace / Delete)
    spliceEnd = Math.max(
      selectionEndBefore,
      selectionStartBefore + (oldPlainTextValue.length - plainTextValue.length)
    );
  }

  const mappedSpliceStart = mapPlainTextIndex(value, configs, spliceStart, 'START') ?? 0;
  const mappedSpliceEnd = mapPlainTextIndex(value, configs, spliceEnd, 'END') ?? value.length;

  let newValue = spliceString(value, mappedSpliceStart, mappedSpliceEnd, insert);

  // Fallback when the selection-based splice produced a value whose plain text does not match the
  // one reported by the browser (for example spellcheck or autocomplete replacements).
  const controlSpliceStart = mapPlainTextIndex(value, configs, spliceStart, 'NULL');
  const controlSpliceEnd = mapPlainTextIndex(value, configs, spliceEnd, 'NULL');
  const willBreakMention = controlSpliceStart === null || controlSpliceEnd === null;

  if (!willBreakMention && getPlainText(newValue, configs) !== plainTextValue) {
    let diffStart = 0;
    const minLength = Math.min(oldPlainTextValue.length, plainTextValue.length);
    while (diffStart < minLength && oldPlainTextValue[diffStart] === plainTextValue[diffStart]) {
      diffStart += 1;
    }

    let oldDiffEnd = oldPlainTextValue.length;
    let newDiffEnd = plainTextValue.length;
    while (
      oldDiffEnd > diffStart &&
      newDiffEnd > diffStart &&
      oldPlainTextValue[oldDiffEnd - 1] === plainTextValue[newDiffEnd - 1]
    ) {
      oldDiffEnd -= 1;
      newDiffEnd -= 1;
    }

    const fallbackInsert = plainTextValue.slice(diffStart, newDiffEnd);
    const fallbackStart = mapPlainTextIndex(value, configs, diffStart, 'START') ?? 0;
    const fallbackEnd = mapPlainTextIndex(value, configs, oldDiffEnd, 'END') ?? value.length;
    newValue = spliceString(value, fallbackStart, fallbackEnd, fallbackInsert);
    spliceStart = diffStart;
  }

  const removedMention = getMentions(newValue, configs).length < getMentions(value, configs).length;

  const caretPlainTextIndex =
    getPlainText(value.slice(0, mappedSpliceStart), configs).length + insert.length;

  return { value: newValue, removedMention, caretPlainTextIndex };
}
