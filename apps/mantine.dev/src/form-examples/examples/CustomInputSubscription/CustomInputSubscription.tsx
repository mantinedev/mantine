import { useRef } from 'react';
import { Badge, Button, Group, Stack } from '@mantine/core';
import { FormErrors, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { NativeTextInput } from './NativeTextInput';
import { StarRating } from './StarRating';

interface ReviewValues {
  rating: number;
  comment: string;
}

function RenderCount() {
  const renders = useRef(0);
  renders.current += 1;
  return <Badge>Form renders: {renders.current}</Badge>;
}

export function CustomInputSubscription() {
  const form = useForm<ReviewValues>({
    initialValues: {
      rating: 0,
      comment: '',
    },
    validate: {
      rating: (value) => (value > 0 ? null : 'Pick a rating'),
    },
  });

  const handleSubmit = (values: ReviewValues) => {
    notifications.show({
      title: 'Review submitted',
      message: `Rated ${values.rating} ${values.rating === 1 ? 'star' : 'stars'}`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <Stack>
        <Group>
          <RenderCount />
        </Group>

        <StarRating label="Rating" {...form.getInputProps('rating')} />

        <NativeTextInput
          label="Comment"
          placeholder="What did you like?"
          {...form.getInputProps('comment')}
        />

        <Group justify="flex-end">
          <Button size="md" variant="default" onClick={form.reset}>
            Reset
          </Button>

          <Button size="md" type="submit">
            Submit review
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
