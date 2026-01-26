import { Button, Group, Text } from '@mantine/core';
import { usePagination } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group, Text } from '@mantine/core';
import { usePagination } from '@mantine/hooks';

function Demo() {
  const pagination = usePagination({ total: 15, startValue: 5, initialPage: 5 });

  return (
    <>
      <Text>Active page: {pagination.active}</Text>
      <Text>Range: [{pagination.range.join(', ')}]</Text>
      <Group mt="md" gap={4}>
        <Button size="compact-sm" variant="default" onClick={pagination.first}>
          First
        </Button>
        <Button size="compact-sm" variant="default" onClick={pagination.previous}>
          Previous
        </Button>
        {pagination.range.map((page, index) =>
          page === 'dots' ? (
            <span key={index}>...</span>
          ) : (
            <Button
              size="compact-sm"
              key={index}
              onClick={() => pagination.setPage(page)}
              variant={pagination.active === page ? 'filled' : 'default'}
              miw={34}
            >
              {page}
            </Button>
          )
        )}
        <Button size="compact-sm" variant="default" onClick={pagination.next}>
          Next
        </Button>
        <Button size="compact-sm" variant="default" onClick={pagination.last}>
          Last
        </Button>
      </Group>
    </>
  );
}
`;

function Demo() {
  const pagination = usePagination({ total: 15, startValue: 5, initialPage: 5 });

  return (
    <>
      <Text>Active page: {pagination.active}</Text>
      <Text>Range: [{pagination.range.join(', ')}]</Text>
      <Group mt="md" gap={4}>
        <Button size="compact-sm" variant="default" onClick={pagination.first}>
          First
        </Button>
        <Button size="compact-sm" variant="default" onClick={pagination.previous}>
          Previous
        </Button>
        {pagination.range.map((page, index) =>
          page === 'dots' ? (
            <span key={index}>...</span>
          ) : (
            <Button
              size="compact-sm"
              key={index}
              onClick={() => pagination.setPage(page)}
              variant={pagination.active === page ? 'filled' : 'default'}
              miw={34}
            >
              {page}
            </Button>
          )
        )}
        <Button size="compact-sm" variant="default" onClick={pagination.next}>
          Next
        </Button>
        <Button size="compact-sm" variant="default" onClick={pagination.last}>
          Last
        </Button>
      </Group>
    </>
  );
}

export const usePaginationStartValueDemo: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};
