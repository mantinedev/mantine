import type { ReactNode } from 'react';
import { Anchor, Group, SimpleGrid, Surface, Text, Title } from '@mantine/core';
import classes from './ReviewSection.module.css';

export interface ReviewItem {
  label: string;
  value: ReactNode;
}

interface ReviewSectionProps {
  title: string;
  items: ReviewItem[];
  onEdit: () => void;
}

export function ReviewSection({ title, items, onEdit }: ReviewSectionProps) {
  return (
    <Surface withBorder p="md" component="section" aria-label={title}>
      <Group justify="space-between" mb="sm">
        <Title order={4}>{title}</Title>
        <Anchor
          component="button"
          type="button"
          size="sm"
          aria-label={`Edit ${title}`}
          onClick={onEdit}
        >
          Edit
        </Anchor>
      </Group>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md" verticalSpacing="sm">
        {items.map((item) => (
          <div key={item.label}>
            <Text size="sm" className={classes.label}>
              {item.label}
            </Text>
            <Text size="sm" component="div" className={classes.value}>
              {item.value}
            </Text>
          </div>
        ))}
      </SimpleGrid>
    </Surface>
  );
}
