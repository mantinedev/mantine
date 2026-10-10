import { Button, Group, Stack } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ROWS, TableRow } from './data';
import { RowsTable } from './RowsTable';

interface TableValues {
  rows: TableRow[];
}

export function EditableTable() {
  const form = useForm<TableValues>({
    initialValues: {
      rows: ROWS,
    },
    validate: {
      rows: {
        name: isNotEmpty('Required'),
        email: isEmail('Invalid email'),
        quantity: (value) => (Number(value) >= 0 ? null : 'Must be positive'),
      },
    },
  });

  const dirty = form.useDirty();

  const handleSubmit = (values: TableValues) => {
    const changedRows = values.rows.filter((_, index) => form.isDirty(`rows.${index}`)).length;
    notifications.show({
      title: 'Changes saved',
      message: `${changedRows} rows changed`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <RowsTable form={form} />

        <Group justify="flex-end">
          {dirty && (
            <Button size="md" variant="default" onClick={form.reset}>
              Reset all
            </Button>
          )}

          <Button size="md" type="submit">
            Save changes
          </Button>
        </Group>
      </Stack>
    </form>
  );
}
