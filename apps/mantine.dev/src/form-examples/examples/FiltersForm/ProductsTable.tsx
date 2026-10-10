import { Badge, Table, Text } from '@mantine/core';
import { Product } from './data';

interface ProductsTableProps {
  products: Product[];
}

export function ProductsTable({ products }: ProductsTableProps) {
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
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Category</Table.Th>
          <Table.Th>Price</Table.Th>
          <Table.Th>Availability</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows.length > 0 ? (
          rows
        ) : (
          <Table.Tr>
            <Table.Td colSpan={4}>
              <Text size="sm" c="dimmed" ta="center">
                No products match the filters
              </Text>
            </Table.Td>
          </Table.Tr>
        )}
      </Table.Tbody>
    </Table>
  );
}
