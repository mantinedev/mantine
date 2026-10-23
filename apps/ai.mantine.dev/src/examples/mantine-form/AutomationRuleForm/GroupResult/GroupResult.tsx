import { Badge, Group, Text } from '@mantine/core';
import { describeCondition } from '../describe';
import type { ConditionStatus, GroupResult as GroupResultValue } from '../evaluate';
import classes from './GroupResult.module.css';

const STATUS_BADGES: Record<ConditionStatus, React.ReactNode> = {
  matched: (
    <Badge color="green" size="sm">
      Matched
    </Badge>
  ),
  not_matched: (
    <Badge variant="default" size="sm">
      Not matched
    </Badge>
  ),
  incomplete: (
    <Badge variant="default" size="sm">
      Incomplete
    </Badge>
  ),
};

interface GroupResultProps {
  result: GroupResultValue;
  label: string;
  nested?: boolean;
}

export function GroupResult({ result, label, nested = false }: GroupResultProps) {
  const rule = result.combinator === 'and' ? 'All must match' : 'Any can match';

  return (
    <div className={nested ? classes.nested : undefined}>
      <Group justify="space-between" wrap="nowrap" className={classes.item}>
        <Text size="sm" className={classes.title}>
          {label} · {rule}
        </Text>
        {STATUS_BADGES[result.matched ? 'matched' : 'not_matched']}
      </Group>
      <ul aria-label={label} className={classes.list}>
        {result.conditions.map(({ id, condition, status }, index) => (
          <li key={id}>
            <Group justify="space-between" wrap="nowrap" className={classes.item}>
              <Text size="sm">
                {describeCondition(condition) ?? `Condition ${index + 1} is not filled in`}
              </Text>
              {STATUS_BADGES[status]}
            </Group>
          </li>
        ))}
        {result.groups.map((group, index) => (
          <li key={group.id}>
            <GroupResult
              result={group}
              label={nested ? `${label}.${index + 1}` : `Group ${index + 1}`}
              nested
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
