import { Stack, UnstyledButton } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Stack, UnstyledButton } from '@mantine/core';
import { useRovingIndex } from '@mantine/hooks';

const items = ['General', 'Account', 'Security', 'Notifications', 'Privacy'];

function Demo() {
  const { getItemProps, focusedIndex } = useRovingIndex({
    total: items.length,
    orientation: 'vertical',
    loop: true,
  });

  return (
    <Stack gap={4} w={200}>
      {items.map((item, index) => (
        <UnstyledButton
          key={item}
          {...getItemProps({ index })}
          p="xs"
          style={{
            borderRadius: 'var(--mantine-radius-sm)',
            backgroundColor:
              focusedIndex === index
                ? 'var(--mantine-color-blue-light)'
                : undefined,
          }}
        >
          {item}
        </UnstyledButton>
      ))}
    </Stack>
  );
}
`;

const items = ['General', 'Account', 'Security', 'Notifications', 'Privacy'];

function Demo() {
  const { getItemProps, focusedIndex } = useRovingIndex({
    total: items.length,
    orientation: 'vertical',
    loop: true,
  });

  return (
    <Stack gap={4} w={200}>
      {items.map((item, index) => (
        <UnstyledButton
          key={item}
          {...getItemProps({ index })}
          p="xs"
          style={{
            borderRadius: 'var(--mantine-radius-sm)',
            backgroundColor: focusedIndex === index ? 'var(--mantine-color-blue-light)' : undefined,
          }}
        >
          {item}
        </UnstyledButton>
      ))}
    </Stack>
  );
}

export const vertical: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
