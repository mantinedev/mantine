import React from 'react';
import { IconTrash } from '@tabler/icons-react';
import { ActionIcon, Button, Code, Group, Text, TextInput } from '@mantine/core';
import { useForm } from '../use-form';

export default { title: 'Form' };

export function Dirty() {
  const form = useForm<{ formArray: Array<{ one: string; two: string }> }>({
    initialValues: {
      formArray: [
        {
          one: '1',
          two: '1',
        },
        {
          one: '2',
          two: '2',
        },
      ],
    },
  });

  return (
    <>
      {form.values.formArray.map((item, index) => (
        <Group key={index}>
          <ActionIcon onClick={() => form.removeListItem('formArray', index)}>
            <IconTrash size={16} />
          </ActionIcon>
          <TextInput {...form.getInputProps(`formArray.${index}.one`)} />
          <TextInput {...form.getInputProps(`formArray.${index}.two`)} />
        </Group>
      ))}
      <Button onClick={() => form.insertListItem('formArray', { one: '', two: '' })}>
        Add item
      </Button>
      <Text>{form.isDirty() ? 'Dirty' : 'Not Dirty'}</Text>
      <Code block>{JSON.stringify(form.values, null, 2)}</Code>
    </>
  );
}
