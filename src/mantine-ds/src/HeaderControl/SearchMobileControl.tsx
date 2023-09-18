import React from 'react';
import { rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { HeaderControl } from './HeaderControl';

interface SearchMobileControlProps {
  onSearch(): void;
}

export function SearchMobileControl({ onSearch }: SearchMobileControlProps) {
  return (
    <HeaderControl onClick={() => onSearch()} tooltip="Search">
      <IconSearch style={{ width: rem(22), height: rem(22) }} stroke={1.5} />
    </HeaderControl>
  );
}
