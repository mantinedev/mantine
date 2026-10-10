import { Alert, Anchor, List } from '@mantine/core';
import { FormErrors } from '@mantine/form';

interface ErrorSummaryProps {
  errors: FormErrors;
  labels: Record<string, string>;
  onFocusField: (path: string) => void;
}

export function ErrorSummary({ errors, labels, onFocusField }: ErrorSummaryProps) {
  const entries = Object.entries(errors);

  if (entries.length === 0) {
    return null;
  }

  return (
    <Alert color="red" title={`Please fix ${entries.length} field(s)`}>
      <List size="sm">
        {entries.map(([path, error]) => (
          <List.Item key={path}>
            <Anchor component="button" type="button" size="sm" onClick={() => onFocusField(path)}>
              {labels[path] ?? path}
            </Anchor>
            : {error}
          </List.Item>
        ))}
      </List>
    </Alert>
  );
}
