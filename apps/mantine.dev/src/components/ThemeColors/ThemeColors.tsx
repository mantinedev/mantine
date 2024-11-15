import { DEFAULT_THEME, SimpleGrid } from '@mantine/core';
import { ColorsGroup } from './ColorsGroup/ColorsGroup';

export function ThemeColors() {
  const groups = Object.keys(DEFAULT_THEME.colors).map((group) => (
    <ColorsGroup group={group} key={group} />
  ));

  return (
    <SimpleGrid type="container" cols={{ base: 1, '440px': 2, '760px': 3 }}>
      {groups}
    </SimpleGrid>
  );
}
