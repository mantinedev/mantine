import type { Ref } from 'react';
import { Group, NumberInput, Stack, TextInput } from '@mantine/core';
import { PositionsList } from './PositionsList';
import type { JobApplicationFormType } from './types';

interface ExperienceStepProps {
  form: JobApplicationFormType;
  addPositionRef: Ref<HTMLButtonElement>;
}

export function ExperienceStep({ form, addPositionRef }: ExperienceStepProps) {
  return (
    <Stack>
      <Group grow align="flex-start">
        <TextInput
          label="Current title"
          placeholder="Current title"
          withAsterisk
          {...form.getInputProps('currentTitle')}
        />
        <NumberInput
          label="Years of experience"
          placeholder="Years of experience"
          withAsterisk
          min={0}
          max={50}
          allowNegative={false}
          allowDecimal={false}
          {...form.getInputProps('yearsOfExperience')}
        />
      </Group>
      <PositionsList form={form} addPositionRef={addPositionRef} />
    </Stack>
  );
}
