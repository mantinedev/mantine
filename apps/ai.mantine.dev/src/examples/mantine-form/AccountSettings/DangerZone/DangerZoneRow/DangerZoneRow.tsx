import { Text } from '@mantine/core';
import classes from './DangerZoneRow.module.css';

interface DangerZoneRowProps {
  title: string;
  description: string;
  action: React.ReactNode;
}

export function DangerZoneRow({ title, description, action }: DangerZoneRowProps) {
  return (
    <div className={classes.row}>
      <div className={classes.texts}>
        <Text size="sm" className={classes.title}>
          {title}
        </Text>
        <Text size="sm">{description}</Text>
      </div>
      <div className={classes.action}>{action}</div>
    </div>
  );
}
