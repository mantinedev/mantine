import { keys } from '@mantine/core';
import { FLAT_MDX_NAV_DATA, MdxNavCategory } from '@/mdx';

export function getActiveCategory(path: string): MdxNavCategory | undefined {
  return keys(FLAT_MDX_NAV_DATA).find((group) =>
    FLAT_MDX_NAV_DATA[group].some((page) => page.slug === path)
  );
}
