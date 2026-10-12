import { PlusIcon } from '@phosphor-icons/react';
import { Button, Group, Input, Stack, Text, TextInput } from '@mantine/core';
import { formRootRule, isNotEmpty, useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { QuestionCard } from './QuestionCard';
import { createOption, createQuestion, QuestionnaireValues } from './types';

export function QuestionnaireBuilder() {
  const form = useForm<QuestionnaireValues>({
    initialValues: {
      title: 'Customer satisfaction',
      questions: [
        {
          key: randomId(),
          text: 'How often do you use the product?',
          options: [createOption('Daily'), createOption('Weekly'), createOption('Rarely')],
        },
      ],
    },
    validate: {
      title: isNotEmpty('Title is required'),
      questions: {
        [formRootRule]: isNotEmpty('Add at least one question'),
        text: isNotEmpty('Question text is required'),
        options: {
          [formRootRule]: (value) => (value.length < 2 ? 'Add at least 2 options' : null),
          label: isNotEmpty('Option label is required'),
        },
      },
    },
  });

  const questions = form.useWatchValue('questions');

  const handleSubmit = (values: QuestionnaireValues) => {
    notifications.show({
      title: 'Questionnaire saved',
      message: `${values.title}: ${values.questions.length} ${values.questions.length === 1 ? 'question' : 'questions'} saved`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          size="md"
          label="Questionnaire title"
          placeholder="Customer satisfaction"
          withAsterisk
          {...form.getInputProps('title')}
        />

        {questions.map((question, index) => (
          <QuestionCard key={question.key} form={form} index={index} />
        ))}

        {questions.length === 0 && (
          <Text size="sm" ta="center">
            No questions yet
          </Text>
        )}

        {form.errors.questions && <Input.Error size="md">{form.errors.questions}</Input.Error>}

        <Group>
          <Button
            variant="default"
            leftSection={<PlusIcon size={16} />}
            onClick={() => form.insertListItem('questions', createQuestion())}
          >
            Add question
          </Button>
        </Group>

        <Group justify="flex-end">
          <Button size="md" type="submit">
            Save questionnaire
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
