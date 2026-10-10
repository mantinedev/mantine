import { useState } from 'react';
import {
  Button,
  Checkbox,
  Group,
  RangeSlider,
  Select,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { CATEGORIES, PRODUCTS, Product } from './data';
import { ProductsTable } from './ProductsTable';

interface FiltersValues {
  search: string;
  category: string | null;
  price: [number, number];
  inStockOnly: boolean;
}

const initialValues: FiltersValues = {
  search: '',
  category: null,
  price: [0, 2000],
  inStockOnly: false,
};

function filterProducts(products: Product[], filters: FiltersValues) {
  const search = filters.search.trim().toLowerCase();

  return products.filter(
    (product) =>
      (search === '' || product.name.toLowerCase().includes(search)) &&
      (filters.category === null || product.category === filters.category) &&
      product.price >= filters.price[0] &&
      product.price <= filters.price[1] &&
      (!filters.inStockOnly || product.inStock)
  );
}

export function FiltersForm() {
  const [products, setProducts] = useState(() => filterProducts(PRODUCTS, initialValues));

  const form = useForm<FiltersValues>({
    mode: 'uncontrolled',
    initialValues,
    onValuesChange: (values) => setProducts(filterProducts(PRODUCTS, values)),
  });

  const dirty = form.useDirty();

  return (
    <Stack>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput label="Search" placeholder="Product name" {...form.getInputProps('search')} />
        <Select
          label="Category"
          placeholder="All categories"
          data={CATEGORIES}
          clearable
          {...form.getInputProps('category')}
        />
      </SimpleGrid>
      <div>
        <Text size="sm" fw={500} mb={6}>
          Price
        </Text>
        <RangeSlider
          min={0}
          max={2000}
          step={50}
          minRange={50}
          label={(value) => `$${value}`}
          {...form.getInputProps('price')}
        />
      </div>
      <Checkbox
        label="In stock only"
        {...form.getInputProps('inStockOnly', { type: 'checkbox' })}
      />

      <Group justify="space-between">
        <Text size="sm" c="dimmed">
          {products.length} of {PRODUCTS.length} products
        </Text>
        {dirty && (
          <Button variant="default" size="compact-sm" onClick={form.reset}>
            Clear filters
          </Button>
        )}
      </Group>

      <ProductsTable products={products} />
    </Stack>
  );
}
