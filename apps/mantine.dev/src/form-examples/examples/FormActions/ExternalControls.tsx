import { Button, Group, Surface } from '@mantine/core';
import { demoFormActions } from './form-actions';

export function ExternalControls() {
  return (
    <Surface level={0} withBorder p="md">
      <Group gap="xs">
        <Button
          variant="default"
          onClick={() =>
            demoFormActions.setValues({
              name: 'Jane Doe',
              email: 'jane@mantine.dev',
              age: 32,
            })
          }
        >
          Fill demo data
        </Button>

        <Button
          variant="default"
          onClick={() => demoFormActions.setFieldError('email', 'This email is already taken')}
        >
          Set error
        </Button>

        <Button variant="default" onClick={() => demoFormActions.validate()}>
          Validate
        </Button>

        <Button variant="default" onClick={() => demoFormActions.reset()}>
          Clear
        </Button>
      </Group>
    </Surface>
  );
}
