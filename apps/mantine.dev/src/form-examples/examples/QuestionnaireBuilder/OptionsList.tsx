import { PlusIcon, TrashIcon } from '@phosphor-icons/react';
import { ActionIcon, Button, Group, Input, Stack, TextInput } from '@mantine/core';
import { QuestionnaireForm, createOption } from './types';

interface OptionsListProps {
  form: QuestionnaireForm;
  questionIndex: number;
}

export function OptionsList({ form, questionIndex }: OptionsListProps) {
  const options = form.useWatchValue(`questions.${questionIndex}.options`);
  const error = form.errors[`questions.${questionIndex}.options`];

  return (
    <Stack gap="xs" pl="xl">
      {options.map((option, optionIndex) => (
        <Group key={option.key} gap="xs" wrap="nowrap" align="flex-start">
          <TextInput
            placeholder={`Option ${optionIndex + 1}`}
            aria-label={`Option ${optionIndex + 1}`}
            size="md"
            style={{ flex: 1 }}
            {...form.getInputProps(`questions.${questionIndex}.options.${optionIndex}.label`)}
          />

          <ActionIcon
            variant="default"
            size="input-md"
            aria-label="Remove option"
            onClick={() => form.removeListItem(`questions.${questionIndex}.options`, optionIndex)}
          >
            <TrashIcon size={18} color="var(--mantine-color-red-6)" />
          </ActionIcon>
        </Group>
      ))}

      {error && <Input.Error size="md">{error}</Input.Error>}

      <Group>
        <Button
          size="compact-sm"
          variant="default"
          leftSection={<PlusIcon size={14} />}
          onClick={() => form.insertListItem(`questions.${questionIndex}.options`, createOption())}
        >
          Add option
        </Button>
      </Group>
    </Stack>
  );
}
