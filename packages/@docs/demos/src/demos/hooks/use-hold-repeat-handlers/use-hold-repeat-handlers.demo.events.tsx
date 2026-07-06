import { useMemo, useState } from 'react';
import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react';
import { Stack, TextInput } from '@mantine/core';
import { mergeEventHandlers, useHoldRepeatHandlers } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useMemo, useState } from 'react';
import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react';
import { Stack, TextInput } from '@mantine/core';
import { mergeEventHandlers, useHoldRepeatHandlers } from '@mantine/hooks';

const interval = (step: number) => Math.max(40, 300 - step * 20);

function Demo() {
  const [value, setValue] = useState(0);

  // Drive the same input from two keys by filtering each instance with the \`keys\` option
  const increment = useHoldRepeatHandlers(() => setValue((v) => v + 1), {
    events: ['keyboard'],
    keys: ['ArrowUp'],
    delay: 400,
    interval,
  });

  const decrement = useHoldRepeatHandlers(() => setValue((v) => v - 1), {
    events: ['keyboard'],
    keys: ['ArrowDown'],
    delay: 400,
    interval,
  });

  // Combine both handler bundles into one set of onKeyDown/onKeyUp props
  const handlers = useMemo(() => mergeEventHandlers(increment, decrement), [increment, decrement]);

  return (
    <TextInput
      {...handlers}
      label="Focus and hold ArrowUp / ArrowDown"
      value={value.toString()}
      readOnly
      w={260}
      rightSection={
        <Stack gap={0} align="center">
          <CaretUpIcon size={12} />
          <CaretDownIcon size={12} />
        </Stack>
      }
    />
  );
}
`;

const interval = (step: number) => Math.max(40, 300 - step * 20);

function Demo() {
  const [value, setValue] = useState(0);

  const increment = useHoldRepeatHandlers(() => setValue((v) => v + 1), {
    events: ['keyboard'],
    keys: ['ArrowUp'],
    delay: 400,
    interval,
  });

  const decrement = useHoldRepeatHandlers(() => setValue((v) => v - 1), {
    events: ['keyboard'],
    keys: ['ArrowDown'],
    delay: 400,
    interval,
  });

  const handlers = useMemo(() => mergeEventHandlers(increment, decrement), [increment, decrement]);

  return (
    <TextInput
      {...handlers}
      label="Focus and hold ArrowUp / ArrowDown"
      value={value.toString()}
      readOnly
      w={260}
      rightSection={
        <Stack gap={0} align="center">
          <CaretUpIcon size={12} />
          <CaretDownIcon size={12} />
        </Stack>
      }
    />
  );
}

export const events: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
