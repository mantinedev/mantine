import dayjs from 'dayjs';
import { Issue, LABELS, MEMBERS } from './data';

export type FilterKey = 'status' | 'author' | 'assignee' | 'label' | 'priority' | 'due';

export interface FilterValue {
  value: string;
  label: string;
  /** Texts the typed query is matched against */
  terms: string[];
}

export interface FilterDefinition {
  key: FilterKey;
  description: string;
  /** Repeatable keys accept several tokens (OR), the others keep one token */
  repeatable: boolean;
  values: FilterValue[];
}

export interface Token {
  key: FilterKey;
  value: string;
}

export interface SearchQuery {
  tokens: Token[];
  text: string;
}

const simpleValues = (values: [string, string][]): FilterValue[] =>
  values.map(([value, label]) => ({ value, label, terms: [value, label.toLowerCase()] }));

const memberValues: FilterValue[] = MEMBERS.map((member) => ({
  value: member.username,
  label: member.name,
  terms: [member.username, member.name.toLowerCase()],
}));

export const FILTERS: FilterDefinition[] = [
  {
    key: 'status',
    description: 'Open, in progress or closed',
    repeatable: false,
    values: simpleValues([
      ['open', 'Open'],
      ['in-progress', 'In progress'],
      ['closed', 'Closed'],
    ]),
  },
  {
    key: 'author',
    description: 'Team member who opened the issue',
    repeatable: false,
    values: memberValues,
  },
  {
    key: 'assignee',
    description: 'Team member working on the issue',
    repeatable: true,
    values: [
      { value: 'none', label: 'No assignee', terms: ['none', 'no assignee'] },
      ...memberValues,
    ],
  },
  {
    key: 'label',
    description: 'Issue label',
    repeatable: true,
    values: LABELS.map((label) => ({ value: label.name, label: label.name, terms: [label.name] })),
  },
  {
    key: 'priority',
    description: 'Urgent, high, medium or low',
    repeatable: false,
    values: simpleValues([
      ['urgent', 'Urgent'],
      ['high', 'High'],
      ['medium', 'Medium'],
      ['low', 'Low'],
    ]),
  },
  {
    key: 'due',
    description: 'Due date relative to today',
    repeatable: false,
    values: simpleValues([
      ['today', 'Today'],
      ['this-week', 'This week'],
      ['next-week', 'Next week'],
      ['overdue', 'Overdue'],
      ['none', 'No due date'],
    ]),
  },
];

export function getFilter(key: string) {
  return FILTERS.find((filter) => filter.key === key.toLowerCase());
}

export function getFilterValue(key: FilterKey, value: string) {
  return getFilter(key)?.values.find((item) => item.value === value);
}

/** Values of a key whose value or label contains the typed text */
export function matchValues(filter: FilterDefinition, query: string) {
  const search = query.trim().toLowerCase();
  if (search === '') {
    return filter.values;
  }
  const dashed = search.replace(/\s+/g, '-');
  return filter.values.filter((item) =>
    item.terms.some((term) => term.includes(search) || term.includes(dashed))
  );
}

/** Splits `key:value` into its parts, or returns null when the word has no colon */
export function splitWord(word: string) {
  const index = word.indexOf(':');
  if (index === -1) {
    return null;
  }
  return { key: word.slice(0, index), value: word.slice(index + 1) };
}

/** Returns the token for a complete `key:value` word with a known key and value */
export function parseToken(word: string): Token | null {
  const parts = splitWord(word);
  const filter = parts && getFilter(parts.key);
  if (!parts || !filter) {
    return null;
  }
  const value = filter.values.find((item) => item.value === parts.value.toLowerCase());
  return value ? { key: filter.key, value: value.value } : null;
}

/** Adds a token: replaces the token of a single-value key, skips a repeated value */
export function withToken(tokens: Token[], token: Token): Token[] {
  const filter = getFilter(token.key)!;
  if (filter.repeatable) {
    const exists = tokens.some((item) => item.key === token.key && item.value === token.value);
    return exists ? tokens : [...tokens, token];
  }
  const index = tokens.findIndex((item) => item.key === token.key);
  if (index === -1) {
    return [...tokens, token];
  }
  return tokens.map((item, i) => (i === index ? token : item));
}

/** Moves every valid `key:value` word of the text into tokens */
export function normalizeQuery(query: SearchQuery): SearchQuery {
  let tokens = query.tokens;
  const words: string[] = [];
  query.text
    .split(/\s+/)
    .filter(Boolean)
    .forEach((word) => {
      const token = parseToken(word);
      if (token) {
        tokens = withToken(tokens, token);
      } else {
        words.push(word);
      }
    });
  return { tokens, text: words.join(' ') };
}

export function formatQuery(query: SearchQuery) {
  return [...query.tokens.map((token) => `${token.key}:${token.value}`), query.text.trim()]
    .filter(Boolean)
    .join(' ');
}

export function isEmptyQuery(query: SearchQuery) {
  return query.tokens.length === 0 && query.text.trim() === '';
}

function matchesDue(issue: Issue, value: string, today: dayjs.Dayjs) {
  if (value === 'none') {
    return issue.due === null;
  }
  if (issue.due === null) {
    return false;
  }
  const due = dayjs(issue.due);
  // Weeks start on Monday
  const weekStart = today.subtract((today.day() + 6) % 7, 'day');
  const daysFromWeekStart = due.diff(weekStart, 'day');
  switch (value) {
    case 'today':
      return due.isSame(today, 'day');
    case 'this-week':
      return daysFromWeekStart >= 0 && daysFromWeekStart < 7;
    case 'next-week':
      return daysFromWeekStart >= 7 && daysFromWeekStart < 14;
    case 'overdue':
      return issue.status !== 'closed' && due.isBefore(today, 'day');
    default:
      return false;
  }
}

function matchesToken(issue: Issue, token: Token, today: dayjs.Dayjs) {
  switch (token.key) {
    case 'status':
      return issue.status === token.value;
    case 'author':
      return issue.author === token.value;
    case 'assignee':
      return token.value === 'none'
        ? issue.assignees.length === 0
        : issue.assignees.includes(token.value);
    case 'label':
      return issue.labels.includes(token.value);
    case 'priority':
      return issue.priority === token.value;
    case 'due':
      return matchesDue(issue, token.value, today);
  }
}

/** Tokens of one key are OR, different keys are AND, every text word must be in the title */
export function filterIssues(issues: Issue[], query: SearchQuery, now = new Date()) {
  const today = dayjs(now).startOf('day');
  const words = query.text.toLowerCase().split(/\s+/).filter(Boolean);
  const keys = [...new Set(query.tokens.map((token) => token.key))];

  return issues.filter((issue) => {
    const title = issue.title.toLowerCase();
    return (
      words.every((word) => title.includes(word)) &&
      keys.every((key) =>
        query.tokens
          .filter((token) => token.key === key)
          .some((token) => matchesToken(issue, token, today))
      )
    );
  });
}
