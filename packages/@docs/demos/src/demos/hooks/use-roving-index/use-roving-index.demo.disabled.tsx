import { Button, Group } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Button, Group } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['Cut', 'Copy', 'Paste', 'Delete', 'Select All'];
const disabledIndices = new Set([1, 3]);

function Demo() {
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop: true,
    isItemDisabled: (index) => disabledIndices.has(index),
  });

  return (
    <Group gap="xs">
      {items.map((item, index) => (
        <Button
          key={item}
          variant="default"
          disabled={disabledIndices.has(index)}
          {...getItemProps({ index })}
        >
          {item}
        </Button>
      ))}
    </Group>
  );
}
`;

const items = ['Cut', 'Copy', 'Paste', 'Delete', 'Select All'];
const disabledIndices = new Set([1, 3]);

function Demo() {
  const { getItemProps } = useRovingIndex({
    total: items.length,
    orientation: 'horizontal',
    loop: true,
    isItemDisabled: (index) => disabledIndices.has(index),
  });

  return (
    <Group gap="xs">
      {items.map((item, index) => (
        <Button
          key={item}
          variant="default"
          disabled={disabledIndices.has(index)}
          {...getItemProps({ index })}
        >
          {item}
        </Button>
      ))}
    </Group>
  );
}

export const disabled: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
