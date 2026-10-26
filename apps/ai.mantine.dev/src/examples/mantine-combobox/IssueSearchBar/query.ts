import dayjs from 'dayjs';
import { ISSUES, LABELS, MEMBERS, type Issue } from './data';

export type FilterKey = 'status' | 'author' | 'assignee' | 'label' | 'priority' | 'due';

export interface FilterValue {
  value: string;
  label: string;
  /** Extra words the value is found by in suggestions (member name and username) */
  search: string[];
}

export interface FilterDefinition {
  key: FilterKey;
  description: string;
  /** Several tokens of this key are allowed and combined with OR */
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

const memberValues: FilterValue[] = MEMBERS.map((member) => ({
  value: member.username,
  label: member.name,
  search: [member.name, member.username],
}));

const simpleValues = (items: [string, string][]): FilterValue[] =>
  items.map(([value, label]) => ({ value, label, search: [value, label] }));

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
    description: 'Who created the issue',
    repeatable: false,
    values: memberValues,
  },
  {
    key: 'assignee',
    description: 'Who works on the issue',
    repeatable: true,
    values: [
      { value: 'none', label: 'No assignee', search: ['none', 'No assignee'] },
      ...memberValues,
    ],
  },
  {
    key: 'label',
    description: 'Issue labels',
    repeatable: true,
    values: LABELS.map((label) => ({ value: label.name, label: label.name, search: [label.name] })),
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

export const getFilter = (key: string) =>
  FILTERS.find((filter) => filter.key === key.toLowerCase());

const slug = (value: string) => value.trim().toLowerCase().replace(/\s+/g, '-');

/** Canonical value for a typed `key:value`, or null when the key or the value is unknown */
export function resolveToken(word: string): Token | null {
  const colon = word.indexOf(':');
  if (colon <= 0) {
    return null;
  }

  const filter = getFilter(word.slice(0, colon));
  const raw = slug(word.slice(colon + 1));
  if (!filter || raw === '') {
    return null;
  }

  const exact = filter.values.find((item) => item.value === raw || slug(item.label) === raw);
  if (exact) {
    return { key: filter.key, value: exact.value };
  }

  if (filter.key !== 'author' && filter.key !== 'assignee') {
    return null;
  }

  // Members are also found by their first or last name when it is unique
  const byNamePart = MEMBERS.filter((member) =>
    member.name.toLowerCase().split(/\s+/).includes(raw)
  );
  return byNamePart.length === 1 ? { key: filter.key, value: byNamePart[0].username } : null;
}

export const tokenText = (token: Token) => `${token.key}:${token.value}`;

/** Adds a token: replaces the token of a single-value key, ignores a repeated value */
export function addToken(tokens: Token[], token: Token): Token[] {
  const filter = getFilter(token.key)!;
  if (!filter.repeatable) {
    return [...tokens.filter((item) => item.key !== token.key), token];
  }
  return tokens.some((item) => item.key === token.key && item.value === token.value)
    ? tokens
    : [...tokens, token];
}

/** Turns every valid `key:value` word of the text into a token, the rest stays text */
export function extractTokens(query: SearchQuery): SearchQuery {
  let tokens = query.tokens;
  const words: string[] = [];

  query.text
    .split(/\s+/)
    .filter(Boolean)
    .forEach((word) => {
      const token = resolveToken(word);
      if (token) {
        tokens = addToken(tokens, token);
      } else {
        words.push(word);
      }
    });

  return { tokens, text: words.join(' ') };
}

export const serializeQuery = (query: SearchQuery) =>
  [...query.tokens.map(tokenText), query.text.trim()].filter(Boolean).join(' ');

const weekStart = (date: dayjs.Dayjs) => date.subtract((date.day() + 6) % 7, 'day').startOf('day');

function matchesDue(issue: Issue, value: string, today: dayjs.Dayjs) {
  if (value === 'none') {
    return issue.due === null;
  }
  if (issue.due === null) {
    return false;
  }

  const due = dayjs(issue.due);
  const monday = weekStart(today);

  switch (value) {
    case 'today':
      return due.isSame(today, 'day');
    case 'this-week':
      return !due.isBefore(monday) && due.isBefore(monday.add(7, 'day'));
    case 'next-week':
      return !due.isBefore(monday.add(7, 'day')) && due.isBefore(monday.add(14, 'day'));
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

/** Tokens of one key are OR, different keys are AND, every free text word must be in the title */
export function filterIssues(query: SearchQuery, issues: Issue[] = ISSUES, now: Date = new Date()) {
  const today = dayjs(now).startOf('day');
  const words = query.text.toLowerCase().split(/\s+/).filter(Boolean);

  return issues.filter((issue) => {
    const title = issue.title.toLowerCase();
    if (!words.every((word) => title.includes(word))) {
      return false;
    }

    return FILTERS.every((filter) => {
      const tokens = query.tokens.filter((token) => token.key === filter.key);
      return tokens.length === 0 || tokens.some((token) => matchesToken(issue, token, today));
    });
  });
}
