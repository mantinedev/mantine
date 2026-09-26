import { HunkPair } from '../pair-hunks/pair-hunks';
import { LineEntry } from '../split-into-lines/split-into-lines';

export interface ExpandMarker {
  kind: 'expand';
  sectionIndex: number;
  hiddenCount: number;
}

export type ProcessedRow = (LineEntry & { kind: 'line' }) | HunkPair | ExpandMarker;

export function applyContextCollapsing(
  items: ((LineEntry & { kind: 'line' }) | HunkPair)[],
  contextLines: number,
  expandedSections: Set<number>
): ProcessedRow[] {
  if (!isFinite(contextLines)) {
    return items;
  }

  const isChange = (item: (typeof items)[number]) =>
    item.kind === 'hunkPair' || item.type !== 'equal';

  const changeIndices: number[] = [];
  for (let i = 0; i < items.length; i++) {
    if (isChange(items[i])) {
      changeIndices.push(i);
    }
  }

  if (changeIndices.length === 0) {
    return items;
  }

  const visible = new Set<number>();
  for (const ci of changeIndices) {
    for (
      let j = Math.max(0, ci - contextLines);
      j <= Math.min(items.length - 1, ci + contextLines);
      j++
    ) {
      visible.add(j);
    }
  }

  const result: ProcessedRow[] = [];
  let sectionIndex = 0;
  let i = 0;

  while (i < items.length) {
    if (visible.has(i)) {
      result.push(items[i]);
      i++;
    } else {
      const currentSection = sectionIndex++;
      let hiddenCount = 0;
      const sectionStart = i;

      while (i < items.length && !visible.has(i)) {
        hiddenCount++;
        i++;
      }

      if (expandedSections.has(currentSection)) {
        for (let j = sectionStart; j < i; j++) {
          result.push(items[j]);
        }
      } else {
        result.push({ kind: 'expand', sectionIndex: currentSection, hiddenCount });
      }
    }
  }

  return result;
}
