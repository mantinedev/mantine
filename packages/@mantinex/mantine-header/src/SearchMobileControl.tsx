import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { rem } from '@mantine/core';
import { HeaderControl } from './HeaderControl';

interface SearchMobileControlProps {
  onSearch: () => void;
}

export function SearchMobileControl({ onSearch }: SearchMobileControlProps) {
  return (
    <HeaderControl onClick={() => onSearch()} tooltip="Search">
      <MagnifyingGlassIcon style={{ width: rem(22), height: rem(22) }} />
    </HeaderControl>
  );
}
