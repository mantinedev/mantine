import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { useCounter } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <ActionIcon.Group>
      <ActionIcon
        variant="default"
        size="lg"
        radius="md"
        onClick={decrement}
        aria-label="Decrement value"
      >
        <IconChevronDown color="var(--mantine-color-red-text)" />
      </ActionIcon>
      <ActionIcon.GroupSection variant="default" size="lg" bg="var(--mantine-color-body)" miw={60}>
        {value}
      </ActionIcon.GroupSection>
      <ActionIcon
        variant="default"
        size="lg"
        radius="md"
        onClick={increment}
        aria-label="Increment value"
      >
        <IconChevronUp color="var(--mantine-color-teal-text)" />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
`;

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <ActionIcon.Group>
      <ActionIcon
        variant="default"
        size="lg"
        radius="md"
        onClick={decrement}
        aria-label="Decrement value"
      >
        <IconChevronDown color="var(--mantine-color-red-text)" />
      </ActionIcon>
      <ActionIcon.GroupSection variant="default" size="lg" bg="var(--mantine-color-body)" miw={60}>
        {value}
      </ActionIcon.GroupSection>
      <ActionIcon
        variant="default"
        size="lg"
        radius="md"
        onClick={increment}
        aria-label="Increment value"
      >
        <IconChevronUp color="var(--mantine-color-teal-text)" />
      </ActionIcon>
    </ActionIcon.Group>
  );
}

export const groupSection: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
