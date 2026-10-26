import { Text, Title } from '@mantine/core';
import classes from './Shelfwise.module.css';

interface SectionHeadProps {
  id: string;
  title: string;
  description?: string;
}

export function SectionHead({ id, title, description }: SectionHeadProps) {
  return (
    <div className={classes.sectionHead}>
      <Title order={2} id={id} className={classes.sectionTitle}>
        {title}
      </Title>
      {description && <Text className={classes.sectionDescription}>{description}</Text>}
    </div>
  );
}
