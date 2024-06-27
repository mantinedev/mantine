import { rem, Table } from '@mantine/core';
import { DocsSection } from '@/components/DocsSection';

interface DataTableProps {
  data: React.ReactNode[][];
  head?: string[];
}

function removeScale(input: string): string {
  const regex = /calc\((.*?)\)/g;
  const matches = input.match(regex);
  if (!matches) {
    return input;
  }
  let output = input;
  matches.forEach((match) => {
    const transformed = match.replace('calc(', '').replace(')', '').split('*')[0].trim();
    output = output.replace(match, transformed);
  });
  return output.replaceAll('rem)', 'rem');
}

function getTransformedScaledValue(value: unknown) {
  if (typeof value !== 'string' || !value.includes('var(--mantine-scale)')) {
    return value as string;
  }

  return removeScale(value);
}

export function MdxDataTable({ data, head }: DataTableProps) {
  const rows = data.map((row, index) => {
    const cells = row.map((cell, cellIndex) => (
      <Table.Td key={cellIndex}>{getTransformedScaledValue(cell)}</Table.Td>
    ));
    return <Table.Tr key={index}>{cells}</Table.Tr>;
  });

  const ths = Array.isArray(head)
    ? head.map((cell, index) => <Table.Th key={index}>{cell}</Table.Th>)
    : null;

  return (
    <DocsSection>
      <div style={{ overflowX: 'auto' }}>
        <div style={{ minWidth: rem(400) }}>
          <Table>
            {ths && (
              <Table.Thead>
                <Table.Tr>{ths}</Table.Tr>
              </Table.Thead>
            )}
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </div>
      </div>
    </DocsSection>
  );
}
