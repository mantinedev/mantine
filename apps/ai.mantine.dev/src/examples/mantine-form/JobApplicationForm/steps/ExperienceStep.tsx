import type { RefObject } from 'react';
import { IconPlus } from '@tabler/icons-react';
import {
  Button,
  Group,
  Input,
  NumberInput,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { createPosition } from '../constants';
import type { JobApplicationFormType } from '../types';
import { PositionFields } from './PositionFields';

interface ExperienceStepProps {
  form: JobApplicationFormType;
  addPositionRef: RefObject<HTMLButtonElement | null>;
}

export function ExperienceStep({ form, addPositionRef }: ExperienceStepProps) {
  const positions = form.useWatchValue('positions');

  return (
    <Stack gap="md" mt="xl">
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
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
          clampBehavior="strict"
          allowNegative={false}
          allowDecimal={false}
          {...form.getInputProps('yearsOfExperience')}
        />
      </SimpleGrid>

      <Stack gap="xs">
        <Input.Label required>Previous positions</Input.Label>
        {positions.length > 0 ? (
          positions.map((position, index) => (
            <PositionFields key={position.id} form={form} index={index} />
          ))
        ) : (
          <Text size="sm">No positions added</Text>
        )}
        {form.errors.positions && <Input.Error>{form.errors.positions}</Input.Error>}
        <Group>
          <Button
            ref={addPositionRef}
            variant="default"
            leftSection={<IconPlus size={18} />}
            onClick={() => form.insertListItem('positions', createPosition())}
          >
            Add position
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
}
