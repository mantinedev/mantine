import { ComboboxItemData } from '../types';

export interface ChunkedItems {
  ungrouped: ComboboxItemData[];
  grouped: { label: string; items: ComboboxItemData[] }[];
  length: number;
}

export function chunkItems(items: ComboboxItemData[]): ChunkedItems {
  const normalized = items.reduce<{
    ungrouped: ComboboxItemData[];
    grouped: Record<string, ComboboxItemData[]>;
    length: number;
  }>(
    (acc, item) => {
      if (item.group) {
        if (!acc.grouped[item.group]) {
          acc.grouped[item.group] = [];
        }

        acc.grouped[item.group].push(item);
      } else {
        acc.ungrouped.push(item);
      }

      return acc;
    },
    { ungrouped: [], grouped: {}, length: 0 }
  );

  return {
    length: items.length,
    ungrouped: normalized.ungrouped,
    grouped: Object.keys(normalized.grouped).map((groupKey) => ({
      label: groupKey,
      items: normalized.grouped[groupKey],
    })),
  };
}
