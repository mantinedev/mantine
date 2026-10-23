import { Input, List, Stack, Text } from '@mantine/core';
import { getOptionLabel, MEMBERS, SAMPLE_ISSUE } from './constants';
import { describeAction } from './describe';
import { evaluateGroup, renderPlaceholders } from './evaluate';
import { GroupResult } from './GroupResult/GroupResult';
import { SampleIssueValues } from './SampleIssueValues';
import type { RuleValues } from './types';

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

export function TestRuleResults({ values }: { values: RuleValues }) {
  const result = evaluateGroup(values.root, SAMPLE_ISSUE);
  const assignee = getOptionLabel(MEMBERS, SAMPLE_ISSUE.assignee);
  const actions = values.actions.filter((action) => action.type !== null);

  return (
    <Stack>
      <div>
        <Input.Label labelElement="div" mb="xs">
          Sample issue
        </Input.Label>
        <SampleIssueValues issue={SAMPLE_ISSUE} />
      </div>

      <div>
        <Input.Label labelElement="div">Conditions</Input.Label>
        <GroupResult result={result} label="Conditions" />
      </div>

      <div>
        <Input.Label labelElement="div" mb="xs">
          Actions that would run
        </Input.Label>
        {result.matched && actions.length > 0 ? (
          <List type="ordered" size="sm" spacing="xs" aria-label="Actions that would run">
            {actions.map((action) => (
              <List.Item key={action.id}>
                {capitalize(describeAction(action)!)}
                {action.type === 'post_comment' && action.comment.trim() !== '' && (
                  <Text size="xs">
                    {renderPlaceholders(action.comment, SAMPLE_ISSUE, assignee)}
                  </Text>
                )}
              </List.Item>
            ))}
          </List>
        ) : (
          <Text size="sm">
            {result.matched
              ? 'The rule has no actions yet'
              : 'The sample issue does not match the conditions, no actions would run'}
          </Text>
        )}
      </div>
    </Stack>
  );
}
