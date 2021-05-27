import React, { useState } from 'react';
import { useForm, useMediaQuery } from '@mantine/hooks';
import { Pencil2Icon } from '@modulz/radix-icons';
import {
  Popover,
  Button,
  Group,
  TextInput,
  Avatar,
  Text,
  ActionIcon,
  useMantineTheme,
} from '../../src';

interface UserEditFormProps {
  initialValues: { name: string; email: string };
  onSubmit(values: { name: string; email: string }): void;
  onCancel(): void;
}

function UserEditForm({ initialValues, onSubmit, onCancel }: UserEditFormProps) {
  const isMobile = useMediaQuery('(max-width: 755px');
  const theme = useMantineTheme();
  const inputVariant = theme.colorScheme === 'dark' ? 'filled' : 'default';

  const form = useForm({
    initialValues,
    validationRules: {
      name: (value) => value.trim().length > 2,
      email: (value) => value.trim().length > 2,
    },
  });

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <TextInput
        required
        label="Name"
        placeholder="Name"
        style={{ minWidth: isMobile ? 220 : 300 }}
        value={form.values.name}
        onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
        error={form.errors.name}
        variant={inputVariant}
        inputStyle={{ backgroundColor: theme.colorScheme === 'dark' && theme.colors.dark[7] }}
      />

      <TextInput
        required
        label="Email"
        placeholder="Email"
        style={{ minWidth: isMobile ? 220 : 300, marginTop: 15 }}
        value={form.values.email}
        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
        error={form.errors.email}
        variant={inputVariant}
        inputStyle={{ backgroundColor: theme.colorScheme === 'dark' && theme.colors.dark[7] }}
      />

      <Group position="apart" style={{ marginTop: 15 }}>
        <Button variant="link" color="gray" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" size="sm" variant={theme.colorScheme === 'dark' ? 'light' : 'filled'}>
          Save
        </Button>
      </Group>
    </form>
  );
}

interface UserProps {
  name: string;
  email: string;
  className?: string;
}

function User({ name, email, className }: UserProps) {
  return (
    <div className={className} style={{ display: 'flex' }}>
      <Avatar style={{ marginRight: 15 }} color="blue">
        {name
          .split(' ')
          .map((part) => part.charAt(0).toUpperCase())
          .slice(0, 2)
          .join('')}
      </Avatar>

      <div>
        <Text>{name}</Text>
        <Text size="xs" color="gray">
          {email}
        </Text>
      </div>
    </div>
  );
}

export function EditUserPopover() {
  const [values, setValues] = useState({ name: 'Bob Handsome', email: 'bob@handsome.inc' });
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <Group>
      <User name={values.name} email={values.email} />

      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        position="bottom"
        placement="end"
        withArrow
        withCloseButton
        title="Edit user"
        target={
          <ActionIcon
            variant={theme.colorScheme === 'dark' ? 'hover' : 'light'}
            onClick={() => setOpened(true)}
          >
            <Pencil2Icon />
          </ActionIcon>
        }
      >
        <UserEditForm
          initialValues={values}
          onCancel={() => setOpened(false)}
          onSubmit={(data) => {
            setValues(data);
            setOpened(false);
          }}
        />
      </Popover>
    </Group>
  );
}
