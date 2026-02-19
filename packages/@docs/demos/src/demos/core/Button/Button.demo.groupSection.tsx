import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react';
import { Button } from '@mantine/core';
import { useCounter } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react';
import { Button } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <Button.Group>
      <Button variant="default" radius="md" onClick={decrement}>
        <CaretDownIcon color="var(--mantine-color-red-text)" />
      </Button>
      <Button.GroupSection variant="default" bg="var(--mantine-color-body)" miw={80}>
        {value}
      </Button.GroupSection>
      <Button variant="default" radius="md" onClick={increment}>
        <CaretUpIcon color="var(--mantine-color-teal-text)" />
      </Button>
    </Button.Group>
  );
}
`;

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <Button.Group>
      <Button variant="default" radius="md" onClick={decrement}>
        <CaretDownIcon color="var(--mantine-color-red-text)" />
      </Button>
      <Button.GroupSection variant="default" bg="var(--mantine-color-body)" miw={80}>
        {value}
      </Button.GroupSection>
      <Button variant="default" radius="md" onClick={increment}>
        <CaretUpIcon color="var(--mantine-color-teal-text)" />
      </Button>
    </Button.Group>
  );
}

export const groupSection: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
