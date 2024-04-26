import { Button, Input, MantineColorsTuple, MantineProvider, Table } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';

interface ComponentsPreviewProps {
  colors: MantineColorsTuple;
}

export function ComponentsPreview({ colors }: ComponentsPreviewProps) {
  const [debouncedColors] = useDebouncedValue(colors, 100);

  return (
    <>
      <Input.Label display="block" size="md" labelElement="div" mt="xl" mb="sm">
        Variants preview
      </Input.Label>

      <MantineProvider theme={{ colors: { '__colors-generator__': debouncedColors } }}>
        <Table.ScrollContainer minWidth={600}>
          <Table withTableBorder withColumnBorders>
            <Table.Thead>
              <Table.Tr>
                <Table.Th ta="center">Filled</Table.Th>
                <Table.Th ta="center">Light</Table.Th>
                <Table.Th ta="center">Outline</Table.Th>
                <Table.Th ta="center">Subtle</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              <Table.Tr>
                <Table.Td>
                  <Button color="__colors-generator__" fullWidth autoContrast>
                    Button
                  </Button>
                </Table.Td>
                <Table.Td>
                  <Button color="__colors-generator__" variant="light" fullWidth>
                    Button
                  </Button>
                </Table.Td>
                <Table.Td>
                  <Button color="__colors-generator__" variant="outline" fullWidth>
                    Button
                  </Button>
                </Table.Td>
                <Table.Td>
                  <Button color="__colors-generator__" variant="subtle" fullWidth>
                    Button
                  </Button>
                </Table.Td>
              </Table.Tr>
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </MantineProvider>
    </>
  );
}
