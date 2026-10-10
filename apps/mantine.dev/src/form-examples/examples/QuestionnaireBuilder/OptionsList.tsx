import { PlusIcon, TrashIcon } from '@phosphor-icons/react';
import { ActionIcon, Button, Group, Stack, Text, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { createOption, QuestionnaireValues } from './types';

interface OptionsListProps {
  form: UseFormReturnType<QuestionnaireValues>;
  questionIndex: number;
}

export function OptionsList({ form, questionIndex }: OptionsListProps) {
  const options = form.useWatchValue(`questions.${questionIndex}.options`);
  const error = form.errors[`questions.${questionIndex}.options`];

  return (
    <Stack gap="xs" pl="md">
      {options.map((option, optionIndex) => (
        <Group key={option.key} gap="xs" wrap="nowrap" align="flex-start">
          <TextInput
            placeholder={`Option ${optionIndex + 1}`}
            aria-label={`Option ${optionIndex + 1}`}
            size="sm"
            style={{ flex: 1 }}
            {...form.getInputProps(`questions.${questionIndex}.options.${optionIndex}.label`)}
          />
          <ActionIcon
            variant="default"
            size="input-sm"
            aria-label="Remove option"
            onClick={() => form.removeListItem(`questions.${questionIndex}.options`, optionIndex)}
          >
            <TrashIcon size={18} color="var(--mantine-color-red-6)" />
          </ActionIcon>
        </Group>
      ))}

      {error && (
        <Text size="sm" c="red">
          {error}
        </Text>
      )}

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
