import { Button, Group, Stack } from '@mantine/core';
import { useField } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { EmailField, emailRule } from './EmailField';

export function NewsletterForm() {
  const email = useField({
    initialValue: '',
    validate: emailRule,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const error = await email.validate();

    if (!error) {
      notifications.show({
        title: 'Subscribed',
        message: `Weekly updates will be sent to ${email.getValue()}`,
      });
      email.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <EmailField field={email} description="One email per week, unsubscribe at any time" />

        <Group justify="flex-end">
          <Button size="md" type="submit">
            Subscribe
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
