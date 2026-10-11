import { Badge, Button, Group, Surface, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { FormMode, isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { CurrentName } from './CurrentName';
import { ExpensiveChild } from './ExpensiveChild';
import { RenderCountBadge } from './RenderCountBadge';

interface ProfileValues {
  name: string;
  email: string;
}

interface ProfileFormProps {
  mode: FormMode;
}

export function ProfileForm({ mode }: ProfileFormProps) {
  const form = useForm<ProfileValues>({
    mode,
    initialValues: {
      name: '',
      email: '',
    },
    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  const handleSubmit = (values: ProfileValues) => {
    notifications.show({
      title: 'Profile saved',
      message: `${values.name} (${values.email}) saved from the ${mode} form`,
    });
  };

  return (
    <Surface level={0} withBorder p="md">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <Group>
            <Badge variant="default">{mode}</Badge>
            <RenderCountBadge label="Form renders" />
            <ExpensiveChild />
          </Group>

          <SimpleGrid cols={{ base: 1, sm: 2 }}>
            <TextInput
              size="md"
              label="Name"
              placeholder="Jane Doe"
              withAsterisk
              {...form.getInputProps('name')}
            />

            <TextInput
              size="md"
              label="Email"
              placeholder="you@mantine.dev"
              withAsterisk
              {...form.getInputProps('email')}
            />
          </SimpleGrid>

          <Group justify="space-between">
            <CurrentName form={form} />
            <Button size="md" type="submit">
              Save profile
            </Button>
          </Group>
        </Stack>
      </form>
    </Surface>
  );
}
