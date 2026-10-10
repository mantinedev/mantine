import { useState } from 'react';
import {
  Button,
  Checkbox,
  Input,
  RangeSlider,
  Select,
  SimpleGrid,
  Stack,
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
    initialValues,
    onValuesChange: (values) => setProducts(filterProducts(PRODUCTS, values)),
  });

  const dirty = form.useDirty();

  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
      <Stack>
        <TextInput label="Search" placeholder="Product name" {...form.getInputProps('search')} />

        <Select
          label="Category"
          placeholder="All categories"
          data={CATEGORIES}
          clearable
          {...form.getInputProps('category')}
        />

        <div>
          <Input.Label mb={6}>Price</Input.Label>

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

        <Button variant="default" disabled={!dirty} onClick={form.reset}>
          Clear filters
        </Button>
      </Stack>

      <ProductsTable products={products} total={PRODUCTS.length} />
    </SimpleGrid>
  );
}
