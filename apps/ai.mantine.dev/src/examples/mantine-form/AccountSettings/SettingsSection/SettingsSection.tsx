import { useId } from 'react';
import { Skeleton, Stack, Text, Title } from '@mantine/core';
import classes from './SettingsSection.module.css';

interface SettingsSectionProps {
  title: string;
  description: string;
  loading: boolean;
  children: React.ReactNode;
}

export function SettingsSection({ title, description, loading, children }: SettingsSectionProps) {
  const titleId = useId();

  return (
    <section aria-labelledby={titleId} aria-busy={loading}>
      <Title order={3} id={titleId} c="var(--mantine-color-bright)">
        {title}
      </Title>
      <Text size="sm" mt={4}>
        {description}
      </Text>

      <div className={classes.body}>
        {loading ? (
          <Stack gap="md" role="status" aria-label={`Loading ${title}`}>
            <Skeleton height={36} />
            <Skeleton height={36} />
            <Skeleton height={36} width="60%" />
          </Stack>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
