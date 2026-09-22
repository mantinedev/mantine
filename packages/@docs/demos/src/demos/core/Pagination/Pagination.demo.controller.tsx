import { Button, Group, Pagination, Stack, Text, usePagination } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Pagination, Stack, Text, usePagination } from '@mantine/core';

function Demo() {
  const total = 20;
  const pagination = usePagination({ total, siblings: 2 });

  return (
    <Stack align="center">
      <Pagination controller={pagination} />

      <Text size="sm">
        Page {pagination.getActive()} of {total}, showing{' '}
        {pagination.getRange().filter((item) => item !== 'dots').length} controls
      </Text>

      <Group>
        <Button variant="default" onClick={pagination.first} disabled={pagination.getActive() === 1}>
          First
        </Button>
        <Button variant="default" onClick={pagination.previous}>
          Previous
        </Button>
        <Button variant="default" onClick={pagination.next}>
          Next
        </Button>
        <Button
          variant="default"
          onClick={pagination.last}
          disabled={pagination.getActive() === total}
        >
          Last
        </Button>
      </Group>
    </Stack>
  );
}
`;

function Demo() {
  const total = 20;
  const pagination = usePagination({ total, siblings: 2 });

  return (
    <Stack align="center">
      <Pagination controller={pagination} />

      <Text size="sm">
        Page {pagination.getActive()} of {total}, showing{' '}
        {pagination.getRange().filter((item) => item !== 'dots').length} controls
      </Text>

      <Group>
        <Button
          variant="default"
          onClick={pagination.first}
          disabled={pagination.getActive() === 1}
        >
          First
        </Button>
        <Button variant="default" onClick={pagination.previous}>
          Previous
        </Button>
        <Button variant="default" onClick={pagination.next}>
          Next
        </Button>
        <Button
          variant="default"
          onClick={pagination.last}
          disabled={pagination.getActive() === total}
        >
          Last
        </Button>
      </Group>
    </Stack>
  );
}

export const controller: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
