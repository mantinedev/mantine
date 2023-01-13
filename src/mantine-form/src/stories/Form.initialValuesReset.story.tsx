import React, { useState } from 'react';
import { TextInput, Code, Button, Group } from '@mantine/core';
import { useForm } from '../use-form';

export default { title: 'Form' };

export function RevaluateInitialValues() {
  const [initialValues, setInitialValues] = useState({
    name: 'Mantine',
  });
  const form = useForm({
    initialValues,
    revaluateInitialValues: true,
    validate: {
      name: (value) => (value.length === 0 ? 'Required' : null),
    },
  });

  const save = () => {};
  const update = () => {
    setInitialValues({
      name: 'Form',
    });
    /* Previously done with setValues & resetDirty. Reset would still revert back to initial values */
    // form.setValues({ name: 'Form' });
    // form.resetDirty({ name: 'Form' });
  };

  return (
    <form
      style={{ padding: 40, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto' }}
      onSubmit={form.onSubmit(save)}
      onReset={form.onReset}
    >
      <TextInput label="Name" {...form.getInputProps('name')} />

      <Group mt="xl" mb="xl" position="right">
        <Button type="reset" variant="default">
          Reset
        </Button>
        <Button onClick={() => update()} variant="default">
          Update
        </Button>
        <Button type="submit">Submit</Button>
      </Group>

      <div>Submitted values:</div>
      <Code block mt={5}>
        {`Is Dirty: ${JSON.stringify(form.isDirty(), null, 2)}`}
      </Code>
    </form>
  );
}
