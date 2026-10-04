import { IndexItem, SectionRecord } from './types';

const STOPWORDS = new Set([
  'a',
  'an',
  'the',
  'and',
  'or',
  'of',
  'to',
  'in',
  'on',
  'for',
  'with',
  'how',
  'do',
  'i',
  'my',
  'is',
  'it',
  'can',
  'use',
  'using',
  'when',
  'what',
  'that',
  'this',
  'be',
  'as',
  'at',
  'by',
  'from',
  'are',
  'get',
]);

function normalize(value: string): string {
  return value.trim().toLowerCase();
}

function tokenize(value: string): string[] {
  return normalize(value)
    .split(/[^a-z0-9.-]+/)
    .filter(Boolean);
}

function queryTokens(query: string): string[] {
  const raw = tokenize(query);
  const filtered = raw.filter((token) => token.length > 2 && !STOPWORDS.has(token));
  return filtered.length > 0 ? filtered : raw;
}

/** A scoring function pair built against a fixed corpus's document-frequency statistics */
export interface SearchScorer {
  scoreItem(item: IndexItem, query: string): number;
  scoreSection(section: SectionRecord, query: string): number;
}

/**
 * Builds an IDF-weighted scorer over a fixed corpus.
 *
 * Document frequency is computed lazily per token and cached for the lifetime of the
 * returned scorer, so a common token like "a" contributes almost nothing to a match while
 * a rare token like "zod" dominates it. Callers should rebuild the scorer whenever `index`
 * or `sections` actually change.
 */
export function createSearchScorer(index: IndexItem[], sections: SectionRecord[]): SearchScorer {
  const sectionDocs = sections.map((section) => normalize(`${section.heading} ${section.snippet}`));
  const itemDocs = index.map((item) => normalize(item.searchText));
  const corpus = [...sectionDocs, ...itemDocs];
  const corpusSize = corpus.length;
  const documentFrequencyCache = new Map<string, number>();

  function documentFrequency(token: string): number {
    const cached = documentFrequencyCache.get(token);
    if (cached !== undefined) {
      return cached;
    }

    let count = 0;
    for (const doc of corpus) {
      if (doc.includes(token)) {
        count += 1;
      }
    }

    documentFrequencyCache.set(token, count);
    return count;
  }

  function idf(token: string): number {
    return Math.log((corpusSize + 1) / (documentFrequency(token) + 1));
  }

  function coverage(haystack: string, tokens: string[]): number {
    if (tokens.length === 0) {
      return 0;
    }

    let matchedWeight = 0;
    let totalWeight = 0;

    for (const token of tokens) {
      const weight = idf(token);
      totalWeight += weight;

      if (haystack.includes(token)) {
        matchedWeight += weight;
      }
    }

    return totalWeight > 0 ? matchedWeight / totalWeight : 0;
  }

  return {
    scoreItem(item: IndexItem, query: string): number {
      const q = normalize(query);

      if (!q) {
        return 0;
      }

      const tokens = queryTokens(query);
      const name = normalize(item.name);
      const haystack = normalize(item.searchText);
      const coverageScore = coverage(haystack, tokens);

      let bonus = 0;
      if (name === q) {
        bonus = 60;
      } else if (name.startsWith(q)) {
        bonus = 40;
      } else if (name.includes(q)) {
        bonus = 25;
      }

      if (tokens.some((token) => name.includes(token))) {
        bonus += 15;
      }

      return coverageScore * 55 + bonus;
    },

    scoreSection(section: SectionRecord, query: string): number {
      const q = normalize(query);

      if (!q) {
        return 0;
      }

      const tokens = queryTokens(query);
      const heading = normalize(section.heading);
      const haystack = normalize(`${section.heading} ${section.snippet}`);
      const coverageScore = coverage(haystack, tokens);

      let bonus = 0;
      if (heading === q) {
        bonus += 40;
      } else if (heading.includes(q)) {
        bonus += 25;
      }

      if (tokens.some((token) => heading.includes(token))) {
        bonus += 15;
      }

      return coverageScore * 60 + bonus;
    },
  };
}

function editDistance(a: string, b: string): number {
  const rows = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);

  for (let j = 0; j <= b.length; j += 1) {
    rows[0][j] = j;
  }

  for (let i = 1; i <= a.length; i += 1) {
    for (let j = 1; j <= b.length; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      rows[i][j] = Math.min(rows[i - 1][j] + 1, rows[i][j - 1] + 1, rows[i - 1][j - 1] + cost);
    }
  }

  return rows[a.length][b.length];
}

/** Returns names close enough to a failed lookup to be worth suggesting */
export function suggestNames(index: IndexItem[], query: string, limit = 3): string[] {
  const q = normalize(query);
  const threshold = Math.max(2, Math.floor(q.length / 3));

  return index
    .map((item) => ({ name: item.name, distance: editDistance(q, normalize(item.name)) }))
    .filter((entry) => entry.distance <= threshold)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit)
    .map((entry) => entry.name);
}
