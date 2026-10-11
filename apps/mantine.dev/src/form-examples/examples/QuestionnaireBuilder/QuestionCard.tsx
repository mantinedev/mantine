import { TrashIcon } from '@phosphor-icons/react';
import { ActionIcon, Group, Surface, Stack, TextInput } from '@mantine/core';
import { OptionsList } from './OptionsList';
import { QuestionnaireForm } from './types';

interface QuestionCardProps {
  form: QuestionnaireForm;
  index: number;
}

export function QuestionCard({ form, index }: QuestionCardProps) {
  return (
    <Surface level={0} withBorder p="md">
      <Stack gap="sm">
        <Group gap="xs" wrap="nowrap" align="flex-start">
          <TextInput
            size="md"
            label={`Question ${index + 1}`}
            placeholder="Type your question"
            withAsterisk
            style={{ flex: 1 }}
            {...form.getInputProps(`questions.${index}.text`)}
          />

          <ActionIcon
            variant="default"
            size="input-md"
            aria-label="Remove question"
            mt={25}
            onClick={() => form.removeListItem('questions', index)}
          >
            <TrashIcon size={18} color="var(--mantine-color-red-6)" />
          </ActionIcon>
        </Group>

        <OptionsList form={form} questionIndex={index} />
      </Stack>
    </Surface>
  );
}
