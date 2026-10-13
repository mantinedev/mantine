import { TrashIcon } from '@phosphor-icons/react';
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

  const dirty = form.useDirty();
  const formArray = form.useWatchValue('formArray');

  return (
    <>
      {form.getValues().formArray.map((_item, index) => (
        <Group key={index}>
          <ActionIcon onClick={() => form.removeListItem('formArray', index)}>
            <TrashIcon size={16} />
          </ActionIcon>
          <TextInput {...form.getInputProps(`formArray.${index}.one`)} />
          <TextInput {...form.getInputProps(`formArray.${index}.two`)} />
        </Group>
      ))}
      <Button onClick={() => form.insertListItem('formArray', { one: '', two: '' })}>
        Add item
      </Button>
      <Text>{dirty ? 'Dirty' : 'Not Dirty'}</Text>
      <Code block>{JSON.stringify(formArray, null, 2)}</Code>
    </>
  );
}

export function DirtyUncontrolled() {
  const form = useForm({
    initialValues: {
      text: '1',
    },
  });

  const dirty = form.useDirty();

  console.log('render');

  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      <TextInput {...form.getInputProps('text')} />
      <div>{dirty ? 'Dirty' : 'Not dirty'}</div>
    </div>
  );
}
