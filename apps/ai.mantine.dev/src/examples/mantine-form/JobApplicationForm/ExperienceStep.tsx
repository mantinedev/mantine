import type { Ref } from 'react';
import { Button, Group, Input, NumberInput, Stack, Text, TextInput } from '@mantine/core';
import { PositionRow } from './PositionRow/PositionRow';
import type { JobApplicationFormType } from './types';
import { createPosition } from './validation';

interface ExperienceStepProps {
  form: JobApplicationFormType;
  addPositionRef: Ref<HTMLButtonElement>;
}

export function ExperienceStep({ form, addPositionRef }: ExperienceStepProps) {
  const positions = form.useWatchValue('positions');

  return (
    <Stack>
      <TextInput
        label="Current title"
        placeholder="Current title"
        withAsterisk
        {...form.getInputProps('currentTitle')}
      />
      <NumberInput
        label="Years of experience"
        placeholder="Years of experience"
        min={0}
        max={50}
        clampBehavior="strict"
        allowNegative={false}
        allowDecimal={false}
        withAsterisk
        maw={240}
        {...form.getInputProps('yearsOfExperience')}
      />
      <Stack gap="xs">
        <Input.Label required labelElement="div">
          Previous positions
        </Input.Label>
        {positions.length > 0 ? (
          positions.map((position, index) => (
            <PositionRow key={position.id} form={form} index={index} />
          ))
        ) : (
          <Text size="sm">No positions added</Text>
        )}
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
    </Stack>
  );
}
