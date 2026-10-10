import { Button, Group, Paper } from '@mantine/core';
import { demoFormActions } from './form-actions';

export function ExternalControls() {
  return (
    <Paper withBorder p="md">
      <Group gap="xs">
        <Button
          size="xs"
          variant="default"
          onClick={() =>
            demoFormActions.setValues({ name: 'Jane Doe', email: 'jane@mantine.dev', age: 32 })
          }
        >
          Fill demo data
        </Button>

        <Button
          size="xs"
          variant="default"
          onClick={() => demoFormActions.setFieldError('email', 'This email is already taken')}
        >
          Set error
        </Button>

        <Button size="xs" variant="default" onClick={() => demoFormActions.validate()}>
          Validate
        </Button>

        <Button size="xs" variant="default" onClick={() => demoFormActions.reset()}>
          Clear
        </Button>
      </Group>
    </Paper>
  );
}
