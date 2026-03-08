import { Button, Group } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['Bold', 'Italic', 'Underline', 'Strikethrough', 'Code'];

function Demo() {
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop: true,
  });

  return (
    <Group gap="xs">
      {items.map((item, index) => (
        <Button key={item} variant="default" {...getItemProps({ index })}>
          {item}
        </Button>
      ))}
    </Group>
  );
}
`;

const items = ['Bold', 'Italic', 'Underline', 'Strikethrough', 'Code'];

function Demo() {
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop: true,
  });

  return (
    <Group gap="xs">
      {items.map((item, index) => (
        <Button key={item} variant="default" {...getItemProps({ index })}>
          {item}
        </Button>
      ))}
    </Group>
  );
}

export const useRovingIndexUsage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
