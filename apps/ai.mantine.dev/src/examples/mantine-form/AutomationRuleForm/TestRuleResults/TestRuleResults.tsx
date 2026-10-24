import { IconCheck, IconMinus, IconX } from '@tabler/icons-react';
import { DataList, List, Stack, Text, ThemeIcon } from '@mantine/core';
import {
  FIELDS,
  LABELS,
  MEMBERS,
  optionLabel,
  PRIORITIES,
  SAMPLE_ISSUE,
  STATUSES,
} from '../constants';
import { describeAction, formatDate } from '../describe';
import { evaluateRule, type ConditionStatus, type GroupResult } from '../evaluate';
import type { RuleValues, SampleIssue } from '../types';
import classes from './TestRuleResults.module.css';

const SAMPLE_VALUES: { [K in keyof SampleIssue]: (issue: SampleIssue) => string } = {
  title: (issue) => issue.title,
  description: (issue) => issue.description,
  status: (issue) => optionLabel(STATUSES, issue.status),
  priority: (issue) => optionLabel(PRIORITIES, issue.priority),
  assignee: (issue) => optionLabel(MEMBERS, issue.assignee),
  labels: (issue) => issue.labels.map((label) => optionLabel(LABELS, label)).join(', '),
  storyPoints: (issue) => String(issue.storyPoints),
  dueDate: (issue) => formatDate(issue.dueDate),
  createdAt: (issue) => formatDate(issue.createdAt),
  isBlocked: (issue) => (issue.isBlocked ? 'Yes' : 'No'),
};

const STATUS_DISPLAY: Record<ConditionStatus, { label: string; icon: React.ReactNode }> = {
  matched: {
    label: 'Matched',
    icon: <IconCheck size={14} color="var(--mantine-color-green-text)" />,
  },
  not_matched: {
    label: 'Not matched',
    icon: <IconX size={14} color="var(--mantine-color-red-text)" />,
  },
  incomplete: { label: 'Incomplete', icon: <IconMinus size={14} /> },
};

function ResultLine({ text, status }: { text: string; status: ConditionStatus }) {
  const display = STATUS_DISPLAY[status];
  return (
    <div className={classes.line}>
      <ThemeIcon variant="default" size="sm">
        {display.icon}
      </ThemeIcon>
      <Text size="sm" className={classes.text}>
        {text}
      </Text>
      <Text size="xs">{display.label}</Text>
    </div>
  );
}

const QUANTIFIERS = { and: 'All', or: 'Any' } as const;

function GroupResults({ result }: { result: GroupResult }) {
  return (
    <ul className={classes.list}>
      {result.conditions.map((condition) => (
        <li
          key={condition.id}
          aria-label={`${condition.text}: ${STATUS_DISPLAY[condition.status].label}`}
        >
          <ResultLine text={condition.text} status={condition.status} />
        </li>
      ))}
      {result.groups.map((group) => (
        <li key={group.id}>
          <ResultLine
            text={`${QUANTIFIERS[group.combinator]} of the following`}
            status={group.matched ? 'matched' : 'not_matched'}
          />
          <GroupResults result={group} />
        </li>
      ))}
    </ul>
  );
}

export function TestRuleResults({ values, today }: { values: RuleValues; today?: Date }) {
  const result = evaluateRule(values, SAMPLE_ISSUE, today);
  const actions = values.actions.filter((action) => action.type !== null);

  return (
    <Stack gap="lg">
      <Stack gap="xs">
        <Text size="sm" className={classes.caption}>
          Sample issue
        </Text>
        <DataList size="sm" labelWidth={110}>
          {(Object.keys(SAMPLE_VALUES) as (keyof SampleIssue)[]).map((key) => (
            <DataList.Item key={key}>
              <DataList.ItemLabel>{FIELDS[key].label}</DataList.ItemLabel>
              <DataList.ItemValue>{SAMPLE_VALUES[key](SAMPLE_ISSUE)}</DataList.ItemValue>
            </DataList.Item>
          ))}
        </DataList>
      </Stack>

      <Stack gap="xs">
        <Text size="sm" className={classes.caption}>
          Conditions
        </Text>
        <Text size="sm">
          {result.matched
            ? 'The sample issue matches the conditions.'
            : 'The sample issue does not match the conditions.'}
        </Text>
        <GroupResults result={result} />
      </Stack>

      <Stack gap="xs">
        <Text size="sm" className={classes.caption}>
          Actions that would run
        </Text>
        {result.matched && actions.length > 0 ? (
          <List type="ordered" size="sm" withPadding aria-label="Actions that would run">
            {actions.map((action) => (
              <List.Item key={action.id}>{describeAction(action)}</List.Item>
            ))}
          </List>
        ) : (
          <Text size="sm">No actions would run.</Text>
        )}
      </Stack>
    </Stack>
  );
}
