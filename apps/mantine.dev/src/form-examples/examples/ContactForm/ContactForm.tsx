import { Button, Group, Select, Stack, Textarea, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { SUBJECTS } from './data';

const MAX_LENGTH = 500;

interface ContactValues {
  subject: string | null;
  email: string;
  message: string;
}

function sendMessage(values: ContactValues) {
  return new Promise<ContactValues>((resolve) => {
    setTimeout(() => resolve(values), 800);
  });
}

export function ContactForm() {
  const form = useForm<ContactValues>({
    mode: 'uncontrolled',
    initialValues: { subject: null, email: '', message: '' },
    validate: {
      subject: isNotEmpty('Select a subject'),
      email: isEmail('Invalid email'),
      message: (value) => {
        if (value.trim().length === 0) {
          return 'Message is required';
        }

        return value.length > MAX_LENGTH
          ? `Message must be ${MAX_LENGTH} characters or less`
          : null;
      },
    },
  });

  const message = form.useWatchValue('message');

  const handleSubmit = async (values: ContactValues) => {
    const response = await sendMessage(values);
    notifications.show({
      title: 'Message sent',
      message: `Message sent, we will reply to ${response.email}`,
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      form.onSubmit(handleSubmit)();
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <Select
          label="Subject"
          placeholder="Pick a subject"
          data={SUBJECTS}
          withAsterisk
          {...form.getInputProps('subject')}
        />
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          withAsterisk
          {...form.getInputProps('email')}
        />
        <Textarea
          label="Message"
          placeholder="How can we help?"
          description={`${message.length}/${MAX_LENGTH} characters. Ctrl + Enter to send`}
          inputWrapperOrder={['label', 'input', 'description', 'error']}
          autosize
          minRows={4}
          withAsterisk
          onKeyDown={handleKeyDown}
          {...form.getInputProps('message')}
        />
        <Group justify="flex-end">
          <Button type="submit" loading={form.submitting}>
            Send message
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
