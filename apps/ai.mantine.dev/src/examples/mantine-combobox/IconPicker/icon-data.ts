import type { Icon } from '@tabler/icons-react';

export type IconStyle = 'outline' | 'filled';

export interface IconValue {
  name: string;
  style: IconStyle;
}

export interface IconEntry {
  /** Icon name without the `Icon` prefix and `Filled` suffix: `ArrowLeft` */
  name: string;
  /** Name split into words for display: `Arrow left` */
  label: string;
  /** Lowercase words of the name: `['arrow', 'left']` */
  words: string[];
  /** Lowercase name without separators: `arrowleft` */
  compact: string;
  style: IconStyle;
  Component: Icon;
}

export interface IconSet {
  outline: IconEntry[];
  filled: IconEntry[];
  /** Icon of the search field, taken from the loaded module to keep it out of the main bundle */
  find: (value: IconValue) => IconEntry | undefined;
}

export function splitIconName(name: string) {
  return name.match(/[A-Z]+(?![a-z])|[A-Z][a-z]*|\d+/g) ?? [name];
}

function formatLabelWord(word: string, index: number) {
  // The first word keeps its capital letter, abbreviations (`AB`) stay uppercase
  if (index === 0 || /^[A-Z]{2,}$/.test(word)) {
    return word;
  }

  return word.toLowerCase();
}

export function getIconLabel(name: string) {
  return splitIconName(name).map(formatLabelWord).join(' ');
}

function createEntry(name: string, style: IconStyle, Component: Icon): IconEntry {
  const words = splitIconName(name).map((word) => word.toLowerCase());
  return { name, label: getIconLabel(name), words, compact: words.join(''), style, Component };
}

export function buildIconSet(icons: Record<string, Icon>): IconSet {
  const outline: IconEntry[] = [];
  const filled: IconEntry[] = [];
  const byKey = new Map<string, IconEntry>();

  for (const exportName of Object.keys(icons).sort()) {
    if (!exportName.startsWith('Icon')) {
      continue;
    }

    const baseName = exportName.slice('Icon'.length);
    const isFilled = baseName.endsWith('Filled');
    const name = isFilled ? baseName.slice(0, -'Filled'.length) : baseName;
    const entry = createEntry(name, isFilled ? 'filled' : 'outline', icons[exportName]);
    (isFilled ? filled : outline).push(entry);
    byKey.set(`${entry.style}:${name}`, entry);
  }

  return {
    outline,
    filled,
    find: (value) => byKey.get(`${value.style}:${value.name}`),
  };
}

/**
 * Matches every word of the query against the beginnings of the icon name words,
 * case-insensitive. Names that start with the query come first.
 */
export function searchIcons(entries: IconEntry[], query: string) {
  const tokens = query
    .toLowerCase()
    .split(/[\s_-]+/)
    .filter(Boolean);

  if (tokens.length === 0) {
    return entries;
  }

  const compactQuery = tokens.join('');
  const startsWith: IconEntry[] = [];
  const contains: IconEntry[] = [];

  for (const entry of entries) {
    if (entry.compact.startsWith(compactQuery)) {
      startsWith.push(entry);
    } else if (tokens.every((token) => entry.words.some((word) => word.startsWith(token)))) {
      contains.push(entry);
    }
  }

  return [...startsWith, ...contains];
}

let loadedIconSet: IconSet | null = null;
let iconSetPromise: Promise<IconSet> | null = null;

/** The whole icon set is several megabytes: it is loaded the first time it is needed */
export function loadIconSet() {
  iconSetPromise ??= import('@tabler/icons-react').then((module) => {
    loadedIconSet = buildIconSet(module.icons as Record<string, Icon>);
    return loadedIconSet;
  });

  return iconSetPromise;
}

export function getLoadedIconSet() {
  return loadedIconSet;
}
