import { Badge, ScrollArea, Stack, Table, Text } from '@mantine/core';
import { Product } from './data';

interface ProductsTableProps {
  products: Product[];
  total: number;
}

export function ProductsTable({ products, total }: ProductsTableProps) {
  const rows = products.map((product) => (
    <Table.Tr key={product.id}>
      <Table.Td>{product.name}</Table.Td>
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
      <Text size="xs">
        {products.length} of {total} products
      </Text>

      <ScrollArea h={360} type="auto">
        <Table verticalSpacing="xs" layout="fixed">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Name</Table.Th>
              <Table.Th w={70}>Price</Table.Th>
              <Table.Th w={90}>Stock</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <Table.Tr>
                <Table.Td colSpan={3}>
                  <Text size="xs" ta="center">
                    No products match the filters
                  </Text>
                </Table.Td>
              </Table.Tr>
            )}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Stack>
  );
}
