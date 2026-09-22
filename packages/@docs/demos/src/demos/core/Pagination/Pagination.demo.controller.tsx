import { Button, Group, Pagination, Stack, Text, usePagination } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Pagination, Stack, Text, usePagination } from '@mantine/core';

function Demo() {
  const total = 20;
  const controller = usePagination({ total, siblings: 2 });

  return (
    <Stack align="center">
      <Pagination controller={controller} />

      <Text size="sm">
        Page {controller.getActive()} of {total}, showing{' '}
        {controller.getRange().filter((item) => item !== 'dots').length} controls
      </Text>

      <Group>
        <Button variant="default" onClick={controller.first} disabled={controller.getActive() === 1}>
          First
        </Button>
        <Button variant="default" onClick={controller.previous}>
          Previous
        </Button>
        <Button variant="default" onClick={controller.next}>
          Next
        </Button>
        <Button
          variant="default"
          onClick={controller.last}
          disabled={controller.getActive() === total}
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
  const controller = usePagination({ total, siblings: 2 });

  return (
    <Stack align="center">
      <Pagination controller={controller} />

      <Text size="sm">
        Page {controller.getActive()} of {total}, showing{' '}
        {controller.getRange().filter((item) => item !== 'dots').length} controls
      </Text>

      <Group>
        <Button
          variant="default"
          onClick={controller.first}
          disabled={controller.getActive() === 1}
        >
          First
        </Button>
        <Button variant="default" onClick={controller.previous}>
          Previous
        </Button>
        <Button variant="default" onClick={controller.next}>
          Next
        </Button>
        <Button
          variant="default"
          onClick={controller.last}
          disabled={controller.getActive() === total}
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
