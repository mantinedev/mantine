import { Skeleton, Stack, Text, Title } from '@mantine/core';
import classes from './SettingsSection.module.css';

interface SettingsSectionProps {
  title: string;
  description: string;
  loading: boolean;
  children: React.ReactNode;
}

export function SettingsSection({ title, description, loading, children }: SettingsSectionProps) {
  const headingId = `${title.toLowerCase().replace(/\s+/g, '-')}-section-title`;

  return (
    <section aria-labelledby={headingId} className={classes.root}>
      <div className={classes.header}>
        <Title order={3} id={headingId} c="var(--mantine-color-bright)">
          {title}
        </Title>
        <Text size="sm">{description}</Text>
      </div>

      {loading ? (
        <Stack gap="md" role="status" aria-label={`Loading ${title.toLowerCase()} settings`}>
          <Skeleton height={56} />
          <Skeleton height={56} />
          <Skeleton height={56} />
        </Stack>
      ) : (
        children
      )}
    </section>
  );
}
