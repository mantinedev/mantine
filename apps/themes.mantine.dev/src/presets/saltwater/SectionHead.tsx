import { Text, Title } from '@mantine/core';
import classes from './Saltwater.module.css';

interface SectionHeadProps {
  id: string;
  title: React.ReactNode;
  description: React.ReactNode;
  onBand?: boolean;
}

export function SectionHead({ id, title, description, onBand }: SectionHeadProps) {
  return (
    <div className={classes.sectionHead} data-on-band={onBand || undefined}>
      <Title order={2} id={id} className={classes.sectionTitle}>
        {title}
      </Title>
      <Text className={classes.sectionDescription}>{description}</Text>
    </div>
  );
}
