import { useState } from 'react';
import {
  Button,
  Checkbox,
  Flex,
  Input,
  RangeSlider,
  Select,
  Stack,
  TextInput,
  Title,
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
    initialValues,
    onValuesChange: (values) => setProducts(filterProducts(PRODUCTS, values)),
  });

  const dirty = form.useDirty();

  return (
    <Flex gap="xl" direction={{ base: 'column', sm: 'row' }}>
      <Stack w={{ base: '100%', sm: '30%' }} flex="none">
        <Title order={4}>Filters</Title>

        <TextInput
          size="md"
          label="Search"
          placeholder="Product name"
          {...form.getInputProps('search')}
        />

        <Select
          size="md"
          label="Category"
          placeholder="All categories"
          data={CATEGORIES}
          clearable
          {...form.getInputProps('category')}
        />

        <div>
          <Input.Label size="md" mb={6}>
            Price
          </Input.Label>

          <RangeSlider
            size="md"
            min={0}
            max={2000}
            step={50}
            minRange={50}
            label={(value) => `$${value}`}
            {...form.getInputProps('price')}
          />
        </div>

        <Checkbox
          size="md"
          label="In stock only"
          {...form.getInputProps('inStockOnly', { type: 'checkbox' })}
        />

        {dirty && (
          <Button variant="default" size="md" onClick={form.reset}>
            Clear filters
          </Button>
        )}
      </Stack>

      <Stack flex={1} miw={0}>
        <Title order={4}>Data</Title>

        <ProductsTable products={products} total={PRODUCTS.length} />
      </Stack>
    </Flex>
  );
}
