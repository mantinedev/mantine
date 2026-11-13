import { useRef } from 'react';
import { CheckIcon, CopyIcon } from '@phosphor-icons/react';
import { Button, CopyButton, Stack, Table } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useRef } from 'react';
import { Button, CopyButton, Stack, Table } from '@mantine/core';
import { CopyIcon, CheckIcon } from '@phosphor-icons/react';

function Demo() {
  const ref = useRef<HTMLTableElement>(null);

  return (
    <Stack align="flex-start">
      <Table ref={ref} withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Package</Table.Th>
            <Table.Th>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>@mantine/core</Table.Td>
            <Table.Td>Core components</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>@mantine/hooks</Table.Td>
            <Table.Td>React hooks</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>

      <CopyButton value={() => ({ html: ref.current!.outerHTML, text: ref.current!.innerText })}>
        {({ copied, copy }) => (
          <Button
            color={copied ? 'teal' : 'blue'}
            leftSection={copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
            onClick={copy}
          >
            {copied ? 'Copied table' : 'Copy table'}
          </Button>
        )}
      </CopyButton>
    </Stack>
  );
}
`;

function Demo() {
  const ref = useRef<HTMLTableElement>(null);

  return (
    <Stack align="flex-start">
      <Table ref={ref} withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Package</Table.Th>
            <Table.Th>Description</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>@mantine/core</Table.Td>
            <Table.Td>Core components</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>@mantine/hooks</Table.Td>
            <Table.Td>React hooks</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>

      <CopyButton value={() => ({ html: ref.current!.outerHTML, text: ref.current!.innerText })}>
        {({ copied, copy }) => (
          <Button
            color={copied ? 'teal' : 'blue'}
            leftSection={copied ? <CheckIcon size={16} /> : <CopyIcon size={16} />}
            onClick={copy}
          >
            {copied ? 'Copied table' : 'Copy table'}
          </Button>
        )}
      </CopyButton>
    </Stack>
  );
}

export const richContent: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
