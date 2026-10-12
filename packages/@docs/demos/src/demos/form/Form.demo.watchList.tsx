import { useState } from 'react';
import { Button, Group, NumberInput, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Button, Group, NumberInput, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';

interface Product {
  name: string;
  price: number;
  quantity: number;
  key: string;
}

const getTotal = (products: Product[]) =>
  products.reduce((acc, item) => acc + item.price * item.quantity, 0);

function Demo() {
  const form = useForm<{ products: Product[] }>({
    initialValues: {
      products: [
        { name: 'Apple', price: 2, quantity: 3, key: randomId() },
        { name: 'Orange', price: 1, quantity: 5, key: randomId() },
      ],
    },
  });

  const [total, setTotal] = useState(() => getTotal(form.getValues().products));

  form.watch('products', ({ value }) => setTotal(getTotal(value)));

  return (
    <Stack>
      <Text fw={700}>Total: \${total}</Text>
      {form.getValues().products.map((item, index) => (
        <Group key={item.key} align="flex-end">
          <TextInput
            label="Name"
            style={{ flex: 1 }}
            {...form.getInputProps(\`products.\${index}.name\`)}
          />
          <NumberInput
            label="Price"
            style={{ width: 80 }}
            {...form.getInputProps(\`products.\${index}.price\`)}
          />
          <NumberInput
            label="Qty"
            style={{ width: 80 }}
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
    </Stack>
  );
}
`;

interface Product {
  name: string;
  price: number;
  quantity: number;
  key: string;
}

const getTotal = (products: Product[]) =>
  products.reduce((acc, item) => acc + item.price * item.quantity, 0);

function Demo() {
  const form = useForm<{ products: Product[] }>({
    initialValues: {
      products: [
        { name: 'Apple', price: 2, quantity: 3, key: randomId() },
        { name: 'Orange', price: 1, quantity: 5, key: randomId() },
      ],
    },
  });

  const [total, setTotal] = useState(() => getTotal(form.getValues().products));

  form.watch('products', ({ value }) => setTotal(getTotal(value)));

  return (
    <Stack>
      <Text fw={700}>Total: ${total}</Text>
      {form.getValues().products.map((item, index) => (
        <Group key={item.key} align="flex-end">
          <TextInput
            label="Name"
            style={{ flex: 1 }}
            {...form.getInputProps(`products.${index}.name`)}
          />
          <NumberInput
            label="Price"
            style={{ width: 80 }}
            {...form.getInputProps(`products.${index}.price`)}
          />
          <NumberInput
            label="Qty"
            style={{ width: 80 }}
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
