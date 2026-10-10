import { Button, Group, TextInput } from '@mantine/core';
import { emailRegexp, useField } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import classes from './SubscribeInput.module.css';

function checkSubscription(email: string) {
  return new Promise<string | null>((resolve) => {
    setTimeout(() => {
      if (!emailRegexp.test(email)) {
        resolve('Invalid email');
      } else if (email.toLowerCase() === 'taken@mantine.dev') {
        resolve('Already subscribed');
      } else {
        resolve(null);
      }
    }, 800);
  });
}

export function SubscribeInput() {
  const field = useField({
    initialValue: '',
    validate: checkSubscription,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = field.getValue();
    const error = await field.validate();

    if (!error) {
      field.reset();
      notifications.show({ title: 'Subscribed', message: `${email} is now subscribed` });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Group align="flex-end" pb={18}>
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          description="taken@mantine.dev is already subscribed"
          withAsterisk
          style={{ flex: 1 }}
          classNames={classes}
          readOnly={field.isValidating}
          {...field.getInputProps()}
        />

        <Button type="submit" loading={field.isValidating}>
          Subscribe
        </Button>
      </Group>
    </form>
  );
}
