import { Alert, Anchor, List } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';

interface ErrorSummaryProps<Values> {
  form: UseFormReturnType<Values>;
  labels: Record<string, string>;
}

export function ErrorSummary<Values>({ form, labels }: ErrorSummaryProps<Values>) {
  const entries = Object.entries(form.errors);

  if (entries.length === 0) {
    return null;
  }

  return (
    <Alert
      color="red"
      title={`Please fix ${entries.length} ${entries.length === 1 ? 'field' : 'fields'}`}
    >
      <List size="sm">
        {entries.map(([path, error]) => (
          <List.Item key={path}>
            <Anchor
              component="button"
              type="button"
              size="sm"
              onClick={() => form.getInputNode(path)?.focus()}
            >
              {labels[path] ?? path}
            </Anchor>
            : {error}
          </List.Item>
        ))}
      </List>
    </Alert>
  );
}
