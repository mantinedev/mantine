import { Button, Group, Stack } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { ROWS } from './data';
import { RowsTable } from './RowsTable';
import { TableValues } from './types';

export function EditableTable() {
  const form = useForm<TableValues>({
    initialValues: {
      rows: ROWS,
    },
    validate: {
      rows: {
        name: isNotEmpty('Required'),
        email: isEmail('Invalid email'),
        quantity: (value) => (typeof value === 'number' && value >= 0 ? null : 'Must be 0 or more'),
      },
    },
  });

  const dirty = form.useDirty();

  const handleSubmit = (values: TableValues) => {
    const changedRows = values.rows.filter((_, index) => form.isDirty(`rows.${index}`)).length;
    form.setInitialValues(values);
    form.resetDirty(values);
    notifications.show({
      title: 'Changes saved',
      message: `${changedRows} ${changedRows === 1 ? 'row' : 'rows'} changed`,
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
