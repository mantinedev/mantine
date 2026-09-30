import { DiffRow, LineRow } from '../group-change-blocks/group-change-blocks';

export interface ExpandMarker {
  kind: 'expand';
  sectionIndex: number;
  hiddenCount: number;
}

export interface RevealedLineRow extends LineRow {
  revealedSectionIndex: number;
}

export type ProcessedRow = DiffRow | RevealedLineRow | ExpandMarker;

export function applyContextCollapsing(
  items: DiffRow[],
  contextLines: number,
  expandedSections: Set<number>
): ProcessedRow[] {
  if (!isFinite(contextLines)) {
    return items;
  }

  const changeIndices: number[] = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i].kind === 'block') {
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
        result.push({ ...(items[sectionStart] as LineRow), revealedSectionIndex: currentSection });
        for (let j = sectionStart + 1; j < i; j++) {
          result.push(items[j]);
        }
      } else {
        result.push({ kind: 'expand', sectionIndex: currentSection, hiddenCount });
      }
    }
  }

  return result;
}
