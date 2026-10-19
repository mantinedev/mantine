import { Button, CloseButton, Fieldset, Group, Input, Stack, Text, TextInput } from '@mantine/core';
import { YearPickerInput } from '@mantine/dates';
import type { JobApplicationFormType } from './types';
import { createPosition } from './values';

interface PositionsListProps {
  form: JobApplicationFormType;
  addPositionRef: React.Ref<HTMLButtonElement>;
}

export function PositionsList({ form, addPositionRef }: PositionsListProps) {
  const positions = form.useWatchValue('positions');

  return (
    <Stack gap="xs">
      <Input.Label required>Previous positions</Input.Label>

      {positions.length === 0 && <Text size="sm">No positions added</Text>}

      {positions.map((position, index) => (
        <Fieldset
          key={position.id}
          legend={`Position ${index + 1}`}
          aria-label={`Position ${index + 1}`}
        >
          <Group align="flex-start" wrap="nowrap">
            <Stack gap="sm" style={{ flex: 1 }}>
              <Group grow align="flex-start">
                <TextInput
                  label="Company"
                  placeholder="Company"
                  withAsterisk
                  {...form.getInputProps(`positions.${index}.company`)}
                />
                <TextInput
                  label="Title"
                  placeholder="Title"
                  withAsterisk
                  {...form.getInputProps(`positions.${index}.title`)}
                />
              </Group>
              <YearPickerInput
                type="range"
                label="Start and end year"
                placeholder="Start and end year"
                withAsterisk
                allowSingleDateInRange
                maxDate={new Date()}
                {...form.getInputProps(`positions.${index}.years`)}
              />
            </Stack>
            <CloseButton
              mt={24}
              aria-label={`Remove position ${index + 1}`}
              onClick={() => form.removeListItem('positions', index)}
            />
          </Group>
        </Fieldset>
      ))}

      {form.errors.positions && <Input.Error>{form.errors.positions}</Input.Error>}

      <Group>
        <Button
          ref={addPositionRef}
          variant="default"
          onClick={() => form.insertListItem('positions', createPosition())}
        >
          Add position
        </Button>
      </Group>
    </Stack>
  );
}
