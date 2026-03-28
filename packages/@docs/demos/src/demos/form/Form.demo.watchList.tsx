import { useState } from 'react';
import { Button, Code, Group, NumberInput, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Code, Group, NumberInput, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';

function Demo() {
  const [total, setTotal] = useState(0);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      products: [
        { name: 'Apple', price: 2, quantity: 3, key: randomId() },
        { name: 'Orange', price: 1, quantity: 5, key: randomId() },
      ],
    },
  });

  form.watch('products', ({ value }) => {
    setTotal(value.reduce((acc, item) => acc + item.price * item.quantity, 0));
  });

  return (
    <Stack>
      <Text fw={700}>Total: \${total}</Text>
      {form.getValues().products.map((item, index) => (
        <Group key={item.key} align="flex-end">
          <TextInput
            label="Name"
            style={{ flex: 1 }}
            key={form.key(\`products.\${index}.name\`)}
            {...form.getInputProps(\`products.\${index}.name\`)}
          />
          <NumberInput
            label="Price"
            style={{ width: 80 }}
            key={form.key(\`products.\${index}.price\`)}
            {...form.getInputProps(\`products.\${index}.price\`)}
          />
          <NumberInput
            label="Qty"
            style={{ width: 80 }}
            key={form.key(\`products.\${index}.quantity\`)}
            {...form.getInputProps(\`products.\${index}.quantity\`)}
          />
          <Button
            color="red"
            onClick={() => form.removeListItem('products', index)}
          >
            Remove
          </Button>
        </Group>
      ))}
      <Group>
        <Button
          onClick={() =>
            form.insertListItem('products', {
              name: '',
              price: 0,
              quantity: 1,
              key: randomId(),
            })
          }
        >
          Add product
        </Button>
      </Group>
      <Code block>{JSON.stringify(form.getValues(), null, 2)}</Code>
    </Stack>
  );
}
`;

function Demo() {
  const [total, setTotal] = useState(0);

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      products: [
        { name: 'Apple', price: 2, quantity: 3, key: randomId() },
        { name: 'Orange', price: 1, quantity: 5, key: randomId() },
      ],
    },
  });

  form.watch('products', ({ value }) => {
    setTotal(
      value.reduce(
        (acc: number, item: { price: number; quantity: number }) =>
          acc + item.price * item.quantity,
        0
      )
    );
  });

  return (
    <Stack>
      <Text fw={700}>Total: ${total}</Text>
      {form.getValues().products.map((item, index) => (
        <Group key={item.key} align="flex-end">
          <TextInput
            label="Name"
            style={{ flex: 1 }}
            key={form.key(`products.${index}.name`)}
            {...form.getInputProps(`products.${index}.name`)}
          />
          <NumberInput
            label="Price"
            style={{ width: 80 }}
            key={form.key(`products.${index}.price`)}
            {...form.getInputProps(`products.${index}.price`)}
          />
          <NumberInput
            label="Qty"
            style={{ width: 80 }}
            key={form.key(`products.${index}.quantity`)}
            {...form.getInputProps(`products.${index}.quantity`)}
          />
          <Button color="red" onClick={() => form.removeListItem('products', index)}>
            Remove
          </Button>
        </Group>
      ))}
      <Group>
        <Button
          onClick={() =>
            form.insertListItem('products', {
              name: '',
              price: 0,
              quantity: 1,
              key: randomId(),
            })
          }
        >
          Add product
        </Button>
      </Group>
      <Code block>{JSON.stringify(form.getValues(), null, 2)}</Code>
    </Stack>
  );
}

export const watchList: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 600,
};
