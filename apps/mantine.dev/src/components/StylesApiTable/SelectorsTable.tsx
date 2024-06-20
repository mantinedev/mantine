import { Table, TableProps } from '@mantine/core';
import { HtmlText } from '@/components/HtmlText';
import { TableInlineCode } from '@/components/TableInlineCode';
import type { StylesApiData } from './StylesApiTable';

interface SelectorsTableProps extends Omit<TableProps, 'data'> {
  data: StylesApiData;
  component: string;
  fixedLayout?: boolean;
}

export function SelectorsTable({
  data,
  component,
  fixedLayout = true,
  ...others
}: SelectorsTableProps) {
  const rows = Object.keys(data.selectors).map((selector) => (
    <Table.Tr key={selector}>
      <Table.Td>{selector}</Table.Td>
      <Table.Td>
        <TableInlineCode>
          .mantine-{component}-{selector}
        </TableInlineCode>
      </Table.Td>
      <Table.Td>
        <HtmlText>{data.selectors[selector]}</HtmlText>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={600}>
      <Table layout={fixedLayout ? 'fixed' : undefined} {...others}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={fixedLayout ? 210 : undefined}>Selector</Table.Th>
            <Table.Th w={fixedLayout ? 310 : undefined}>Static selector</Table.Th>
            <Table.Th>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
