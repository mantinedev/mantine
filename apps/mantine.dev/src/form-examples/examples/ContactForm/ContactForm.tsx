import { Button, Group, Select, Stack, Text, Textarea, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

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
    initialValues: {
      subject: null,
      email: '',
      message: '',
    },
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
      <Stack maw={420} mx="auto">
        <Select
          size="md"
          label="Subject"
          placeholder="Pick a subject"
          data={[
            { value: 'bug', label: 'Bug report' },
            { value: 'feature', label: 'Feature request' },
            { value: 'billing', label: 'Billing question' },
            { value: 'other', label: 'Other' },
          ]}
          withAsterisk
          {...form.getInputProps('subject')}
        />

        <TextInput
          size="md"
          label="Email"
          placeholder="you@mantine.dev"
          withAsterisk
          {...form.getInputProps('email')}
        />

        <Textarea
          size="md"
          label="Message"
          placeholder="How can we help?"
          autosize
          minRows={4}
          maxRows={8}
          withAsterisk
          onKeyDown={handleKeyDown}
          bottomSection={
            <Group justify="space-between">
              <Text size="sm">
                {message.length}/{MAX_LENGTH} characters
              </Text>
              <Text size="sm">Ctrl + Enter to send</Text>
            </Group>
          }
          {...form.getInputProps('message')}
        />

        <Group justify="flex-end">
          <Button size="md" type="submit" loading={form.submitting}>
            Send message
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
