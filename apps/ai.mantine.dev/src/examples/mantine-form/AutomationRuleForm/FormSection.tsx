import { Stack, Text, Title } from '@mantine/core';

interface FormSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function FormSection({ title, description, children }: FormSectionProps) {
  return (
    <Stack component="section">
      <div>
        <Title order={3} c="var(--mantine-color-bright)">
          {title}
        </Title>
        <Text size="sm">{description}</Text>
      </div>
      {children}
    </Stack>
  );
}
