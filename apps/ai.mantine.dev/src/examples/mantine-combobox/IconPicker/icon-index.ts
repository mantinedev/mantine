import { icons, type TablerIcon } from '@tabler/icons-react';

export type IconStyle = 'outline' | 'filled';

export interface IconPickerValue {
  name: string;
  style: IconStyle;
}

export interface IconEntry {
  /** Component name without the `Icon` prefix and `Filled` suffix: `ArrowLeft` */
  name: string;
  lower: string;
  /** Lowercase words joined from every word boundary: `arrowleft`, `left` */
  suffixes: string[];
}

const registry = icons as unknown as Record<string, TablerIcon | undefined>;
const collator = new Intl.Collator('en', { numeric: true });

function splitWords(name: string) {
  return name.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g) ?? [name];
}

function createEntry(name: string): IconEntry {
  const words = splitWords(name).map((word) => word.toLowerCase());
  return {
    name,
    lower: name.toLowerCase(),
    suffixes: words.map((_, index) => words.slice(index).join('')),
  };
}

let cache: Record<IconStyle, IconEntry[]> | null = null;

/** Every icon of the style, sorted by name. Built once on first use. */
export function getIcons(style: IconStyle): IconEntry[] {
  if (!cache) {
    const outline: string[] = [];
    const filled: string[] = [];

    for (const key of Object.keys(registry)) {
      if (!key.startsWith('Icon')) {
        continue;
      }
      if (key.endsWith('Filled')) {
        filled.push(key.slice(4, -6));
      } else {
        outline.push(key.slice(4));
      }
    }

    cache = {
      outline: outline.sort(collator.compare).map(createEntry),
      filled: filled.sort(collator.compare).map(createEntry),
    };
  }

  return cache[style];
}

export function getIconComponent(name: string, style: IconStyle): TablerIcon | undefined {
  return registry[`Icon${name}${style === 'filled' ? 'Filled' : ''}`];
}

/**
 * Every word of the query must start one of the icon's words ("arrow left" finds `ArrowLeft` and
 * `ArrowBigLeft`; "arrowle" finds `ArrowLeft`). Names that start with the query come first.
 */
export function searchIcons(entries: IconEntry[], query: string): IconEntry[] {
  const tokens = query
    .toLowerCase()
    .split(/[\s_-]+/)
    .filter(Boolean);

  if (tokens.length === 0) {
    return entries;
  }

  const compact = tokens.join('');
  const leading: IconEntry[] = [];
  const rest: IconEntry[] = [];

  for (const entry of entries) {
    if (tokens.every((token) => entry.suffixes.some((suffix) => suffix.startsWith(token)))) {
      (entry.lower.startsWith(compact) ? leading : rest).push(entry);
    }
  }

  return leading.concat(rest);
}
