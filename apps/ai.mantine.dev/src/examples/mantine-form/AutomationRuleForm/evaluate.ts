import dayjs from 'dayjs';
import { getShape } from './constants';
import { describeCondition } from './describe';
import type {
  Combinator,
  Condition,
  ConditionGroup,
  NumberRange,
  Operator,
  RuleValues,
  SampleIssue,
} from './types';
import { validateRule } from './validation';

export type ConditionStatus = 'matched' | 'not_matched' | 'incomplete';

export interface ConditionResult {
  id: string;
  text: string;
  status: ConditionStatus;
}

export interface GroupResult {
  id: string;
  combinator: Combinator;
  matched: boolean;
  conditions: ConditionResult[];
  groups: GroupResult[];
}

type IssueValue = SampleIssue[keyof SampleIssue];
type Evaluate = (actual: IssueValue, expected: Condition['value'], today: Date) => boolean;

const text = (value: unknown) => String((value as string | number | null) ?? '').toLowerCase();
const asList = (value: IssueValue) => (Array.isArray(value) ? value : [String(value)]);

const EVALUATORS: Record<Operator, Evaluate> = {
  contains: (actual, expected) => text(actual).includes(text(expected)),
  not_contains: (actual, expected) => !text(actual).includes(text(expected)),
  equals: (actual, expected) =>
    typeof actual === 'number'
      ? actual === expected
      : text(actual).trim() === text(expected).trim(),
  not_equals: (actual, expected) => actual !== expected,
  greater_than: (actual, expected) => (actual as number) > (expected as number),
  less_than: (actual, expected) => (actual as number) < (expected as number),
  between: (actual, expected) => {
    const { min, max } = expected as NumberRange;
    return (actual as number) >= (min as number) && (actual as number) <= (max as number);
  },
  before: (actual, expected) => dayjs(actual as string).isBefore(expected as string, 'day'),
  after: (actual, expected) => dayjs(actual as string).isAfter(expected as string, 'day'),
  within_next_days: (actual, expected, today) => {
    const days = dayjs(actual as string).diff(dayjs(today).startOf('day'), 'day');
    return days >= 0 && days <= (expected as number);
  },
  is_empty: (actual) => text(actual).trim() === '',
  any_of: (actual, expected) =>
    asList(actual).some((item) => (expected as string[]).includes(item)),
  none_of: (actual, expected) =>
    !asList(actual).some((item) => (expected as string[]).includes(item)),
  is_true: (actual) => actual === true,
  is_false: (actual) => actual === false,
};

function hasErrorUnder(errors: Record<string, unknown>, path: string) {
  return Object.keys(errors).some((key) => key.startsWith(`${path}.`));
}

function evaluateCondition(
  condition: Condition,
  path: string,
  errors: Record<string, unknown>,
  issue: SampleIssue,
  today: Date
): ConditionResult {
  const shape = getShape(condition.field, condition.operator);
  const result = { id: condition.id, text: describeCondition(condition) };
  if (!condition.field || !condition.operator || !shape || hasErrorUnder(errors, path)) {
    return { ...result, status: 'incomplete' };
  }
  const matched = EVALUATORS[condition.operator](issue[condition.field], condition.value, today);
  return { ...result, status: matched ? 'matched' : 'not_matched' };
}

function evaluateGroup(
  group: ConditionGroup,
  path: string,
  errors: Record<string, unknown>,
  issue: SampleIssue,
  today: Date
): GroupResult {
  const conditions = group.conditions.map((condition, index) =>
    evaluateCondition(condition, `${path}.conditions.${index}`, errors, issue, today)
  );
  const groups = group.groups.map((child, index) =>
    evaluateGroup(child, `${path}.groups.${index}`, errors, issue, today)
  );
  const outcomes = [
    ...conditions.map((item) => item.status === 'matched'),
    ...groups.map((item) => item.matched),
  ];
  const matched =
    outcomes.length > 0 &&
    (group.combinator === 'and' ? outcomes.every(Boolean) : outcomes.some(Boolean));
  return { id: group.id, combinator: group.combinator, matched, conditions, groups };
}

export function evaluateRule(values: RuleValues, issue: SampleIssue, today = new Date()) {
  return evaluateGroup(values.conditions, 'conditions', validateRule(values), issue, today);
}
