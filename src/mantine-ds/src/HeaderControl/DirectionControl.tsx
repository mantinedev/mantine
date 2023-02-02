import React from 'react';
import { rem } from '@mantine/core';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';
import { HeaderControl } from './HeaderControl';

interface DirectionControlProps {
  direction: 'rtl' | 'ltr';
  toggleDirection(): void;
}

export function DirectionControl({ direction, toggleDirection }: DirectionControlProps) {
  return (
    <HeaderControl
      onClick={() => toggleDirection()}
      tooltip={`${direction === 'ltr' ? 'RTL' : 'LTR'} direction`}
    >
      {direction === 'rtl' ? (
        <IconTextDirectionLtr size={rem(22)} stroke={1.5} />
      ) : (
        <IconTextDirectionRtl size={rem(22)} stroke={1.5} />
      )}
    </HeaderControl>
  );
}
