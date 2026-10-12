import { Badge, Stack, Table, Text } from '@mantine/core';
import { Product } from './data';
import classes from './ProductsTable.module.css';

interface ProductsTableProps {
  products: Product[];
  total: number;
}

export function ProductsTable({ products, total }: ProductsTableProps) {
  const rows = products.map((product) => (
    <Table.Tr key={product.id}>
      <Table.Td>{product.name}</Table.Td>
      <Table.Td>{product.category}</Table.Td>
      <Table.Td>${product.price}</Table.Td>
      <Table.Td>
        <Badge variant={product.inStock ? 'filled' : 'default'} color="teal">
          {product.inStock ? 'In stock' : 'Sold out'}
        </Badge>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack gap="xs">
      <Text size="sm">
        {products.length} of {total} products
      </Text>

      <Table.ScrollContainer
        minWidth={480}
        classNames={{ scrollContainer: classes.scrollContainer }}
        scrollAreaProps={{ type: 'auto' }}
      >
        <Table verticalSpacing="xs" layout="fixed">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th w={130}>Category</Table.Th>
              <Table.Th w={90}>Price</Table.Th>
              <Table.Th w={110}>Stock</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <Table.Tr>
                <Table.Td colSpan={4}>
                  <Text size="sm" ta="center">
                    No products match the filters
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Stack>
  );
}
