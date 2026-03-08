import { SimpleGrid, UnstyledButton } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { SimpleGrid, UnstyledButton } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

function Demo() {
  const total = 9;
  const columns = 3;

  const { getItemProps, focusedIndex } = useRovingIndex({
    total,
    columns,
  });

  return (
    <SimpleGrid cols={columns} w={300} spacing="xs">
      {Array.from({ length: total }, (_, index) => (
        <UnstyledButton
          key={index}
          {...getItemProps({ index })}
          p="md"
          ta="center"
          style={{
            borderRadius: 'var(--mantine-radius-sm)',
            border: '1px solid var(--mantine-color-default-border)',
            backgroundColor:
              focusedIndex === index
                ? 'var(--mantine-color-blue-light)'
                : undefined,
          }}
        >
          Cell {index + 1}
        </UnstyledButton>
      ))}
    </SimpleGrid>
  );
}
`;

function Demo() {
  const total = 9;
  const columns = 3;

  const { getItemProps, focusedIndex } = useRovingIndex({
    total,
    columns,
  });

  return (
    <SimpleGrid cols={columns} w={300} spacing="xs">
      {Array.from({ length: total }, (_, index) => (
        <UnstyledButton
          key={index}
          {...getItemProps({ index })}
          p="md"
          ta="center"
          style={{
            borderRadius: 'var(--mantine-radius-sm)',
            border: '1px solid var(--mantine-color-default-border)',
            backgroundColor: focusedIndex === index ? 'var(--mantine-color-blue-light)' : undefined,
          }}
        >
          Cell {index + 1}
        </UnstyledButton>
      ))}
    </SimpleGrid>
  );
}

export const useRovingIndexGrid: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
