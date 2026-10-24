import { List, Text } from '@mantine/core';
import { describeAction, describeCondition, describeTrigger } from '../describe';
import type { ConditionGroup, RuleFormType } from '../types';
import { countConditions } from '../validation';
import classes from './RuleSummary.module.css';

const QUANTIFIERS = { and: 'all', or: 'any' } as const;

function SummaryGroup({ group }: { group: ConditionGroup }) {
  return (
    <List size="sm" withPadding>
      {group.conditions
        .filter((condition) => condition.field)
        .map((condition) => (
          <List.Item key={condition.id}>{describeCondition(condition)}</List.Item>
        ))}
      {group.groups
        .filter((child) => countConditions(child) > 0)
        .map((child) => (
          <List.Item key={child.id}>
            {QUANTIFIERS[child.combinator]} of the following:
            <SummaryGroup group={child} />
          </List.Item>
        ))}
    </List>
  );
}

export function RuleSummary({ form }: { form: RuleFormType }) {
  const trigger = form.useWatchValue('trigger');
  const conditions = form.useWatchValue('conditions');
  const actions = form.useWatchValue('actions').filter((action) => action.type !== null);
  const when = describeTrigger(trigger);
  const hasConditions =
    conditions.conditions.some((condition) => condition.field) || conditions.groups.length > 0;

  return (
    <section aria-label="Rule summary" className={classes.root}>
      <Text size="sm" className={classes.title}>
        Summary
      </Text>
      {when ? (
        <>
          <Text size="sm">{when}</Text>
          {hasConditions && (
            <>
              <Text size="sm">If {QUANTIFIERS[conditions.combinator]} of the following:</Text>
              <SummaryGroup group={conditions} />
            </>
          )}
          {actions.length > 0 && (
            <>
              <Text size="sm">Then:</Text>
              <List type="ordered" size="sm" withPadding>
                {actions.map((action) => (
                  <List.Item key={action.id}>{describeAction(action)}</List.Item>
                ))}
              </List>
            </>
          )}
        </>
      ) : (
        <Text size="sm">Pick an event to see what this rule does.</Text>
      )}
    </section>
  );
}
