import { Alert, List } from '@mantine/core';
import { ProfileForm } from './types';

const LABELS: Record<string, string> = {
  name: 'Name',
  age: 'Age',
  tags: 'Tags',
};

interface ErrorSummaryProps {
  form: ProfileForm;
}

export function ErrorSummary({ form }: ErrorSummaryProps) {
  const entries = Object.entries(form.errors);

  if (entries.length === 0) {
    return null;
  }

  return (
    <Alert color="red" title="Fix the following errors">
      <List size="sm">
        {entries.map(([path, error]) => (
          <List.Item key={path}>
            {LABELS[path] ?? path}: {error}
          </List.Item>
        ))}
      </List>
    </Alert>
  );
}
