import React, { useState } from 'react';
import { IconMoon } from '@tabler/icons';
import { Group } from '../Group';
import { Stack } from '../Stack';
import { StarSymbol } from './StarSymbol';
import { Rating } from './Rating';

export default { title: 'Rating' };

export function StarSymbols() {
  return (
    <div>
      <Group p="md">
        <StarSymbol size="xs" type="empty" />
        <StarSymbol size="sm" type="empty" />
        <StarSymbol size="md" type="empty" />
        <StarSymbol size="lg" type="empty" />
        <StarSymbol size="xl" type="empty" />
      </Group>
      <Group p="md">
        <StarSymbol size="xs" type="full" />
        <StarSymbol size="sm" type="full" />
        <StarSymbol size="md" type="full" />
        <StarSymbol size="lg" type="full" />
        <StarSymbol size="xl" type="full" />
      </Group>
    </div>
  );
}

export function Sizes() {
  return (
    <Stack p="md">
      <Rating size="xs" defaultValue={3} />
      <Rating defaultValue={2} size="sm" />
      <Rating defaultValue={3} size="md" />
      <Rating size="lg" defaultValue={1} />
      <Rating size="xl" defaultValue={4} />
    </Stack>
  );
}

export function Fractions() {
  return (
    <Stack p="md">
      <Rating size="xl" defaultValue={3} fractions={2} />
      <Rating size="xl" defaultValue={3} fractions={3} />
      <Rating size="xl" defaultValue={3} fractions={5} />
      <Rating size="xl" defaultValue={3} fractions={7} />
    </Stack>
  );
}

export function WithCustomSymbol() {
  return (
    <Stack p="md">
      <Rating
        defaultValue={3}
        emptySymbol={<IconMoon size={18} />}
        fullSymbol={<IconMoon size={20} fill="gray" />}
      />
    </Stack>
  );
}

export function Readonly() {
  return (
    <Stack p="md">
      <Rating size="lg" fractions={2} readonly defaultValue={3.5} />
    </Stack>
  );
}

export function Controlled() {
  const [value, setValue] = useState(3);

  const handleChange = (currentValue: number) => {
    setValue(currentValue);
  };

  return (
    <Stack p="md">
      <Rating size="lg" fractions={2} defaultValue={1} value={value} onChange={handleChange} />
    </Stack>
  );
}
