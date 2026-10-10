import { Button, Group, NumberInput, Select, SimpleGrid, Stack } from '@mantine/core';
import { isInRange, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { products } from './data';
import { currency, OrderSummary } from './OrderSummary';

interface Values {
  product: string | null;
  quantity: number | string;
  discount: number | string;
}

interface OrderPayload extends Values {
  total: number;
}

function calculateTotal({ product, quantity, discount }: Values) {
  const price = products.find((item) => item.value === product)?.price ?? 0;
  const count = typeof quantity === 'number' ? quantity : 0;
  const percent = typeof discount === 'number' ? discount : 0;
  return Math.round(price * count * (1 - percent / 100) * 100) / 100;
}

export function OrderTotal() {
  const form = useForm<Values, OrderPayload>({
    mode: 'uncontrolled',
    initialValues: { product: null, quantity: 1, discount: 0 },
    validate: {
      product: isNotEmpty('Select a product'),
      quantity: isInRange({ min: 1 }, 'Quantity must be at least 1'),
      discount: isInRange({ min: 0, max: 100 }, 'Discount must be between 0% and 100%'),
    },
    transformValues: (values) => ({ ...values, total: calculateTotal(values) }),
  });

  const product = form.useWatchValue('product');
  const quantity = form.useWatchValue('quantity');
  const discount = form.useWatchValue('discount');
  const total = calculateTotal({ product, quantity, discount });

  const handleSubmit = (values: OrderPayload) => {
    const item = products.find((entry) => entry.value === values.product);
    notifications.show({
      title: 'Order placed',
      message: `${values.quantity} × ${item?.label}, total ${currency.format(values.total)}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <Select
          label="Product"
          placeholder="Pick a product"
          withAsterisk
          data={products.map(({ value, label, price }) => ({
            value,
            label: `${label} – ${currency.format(price)}`,
          }))}
          {...form.getInputProps('product')}
        />
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <NumberInput
            label="Quantity"
            placeholder="1"
            withAsterisk
            min={1}
            max={1000}
            allowDecimal={false}
            {...form.getInputProps('quantity')}
          />
          <NumberInput
            label="Discount"
            placeholder="0"
            suffix="%"
            min={0}
            max={100}
            {...form.getInputProps('discount')}
          />
        </SimpleGrid>
        <OrderSummary product={product} quantity={quantity} discount={discount} total={total} />
        <Group justify="flex-end">
          <Button variant="default" onClick={form.reset}>
            Reset
          </Button>
          <Button type="submit">Place order</Button>
        </Group>
      </Stack>
    </form>
  );
}
