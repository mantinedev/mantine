import React, { useState } from 'react';
import { IconMoon } from '@tabler/icons';
import { Group } from '../Group';
import { Stack } from '../Stack';
import { StarSymbol } from './StarSymbol';
import { Rating } from './Rating';
import { Box } from '../Box';

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
      <Rating size="xs" defaultValue={1} />
      <Rating defaultValue={2} size="sm" />
      <Rating size="md" defaultValue={3} />
      <Rating size="lg" defaultValue={4} />
      <Rating size="xl" defaultValue={5} />
    </Stack>
  );
}

export function Fractions() {
  return (
    <Stack p="md">
      <Rating size="xl" defaultValue={3} fractions={2} />
      <Rating size="xl" defaultValue={3} fractions={3} />
      <Rating size="xl" defaultValue={3} fractions={4} />
    </Stack>
  );
}

export function WithCustomSymbol() {
  const size = 18;
  return (
    <Stack p="md">
      <Rating
        defaultValue={3}
        emptySymbol={<IconMoon size={20} />}
        fullSymbol={<IconMoon size={20} fill="gray" />}
      />

      <Rating
        fractions={2}
        defaultValue={3}
        emptySymbol={
          <Box sx={{ width: size, height: size, backgroundColor: 'gray', borderRadius: 999 }} />
        }
        fullSymbol={
          <Box sx={{ width: size, height: size, backgroundColor: 'red', borderRadius: 999 }} />
        }
      />

      <Rating
        defaultValue={3}
        count={6}
        highlightSelectedOnly
        emptySymbol={
          <Box
            sx={{
              width: size,
              height: size,
              backgroundColor: 'gray',
              borderRadius: 999,
            }}
          />
        }
        fullSymbol={(value) => (
          <Box
            sx={{
              width: size,
              height: size,
              backgroundColor: value < 4 ? 'red' : 'green',
              borderRadius: 999,
            }}
          />
        )}
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
  const [value, setValue] = useState(1);

  const handleChange = (currentValue: number) => {
    setValue(currentValue);
  };

  return (
    <Stack p="md">
      <Rating size="lg" defaultValue={1} value={value} onChange={handleChange} />
    </Stack>
  );
}
