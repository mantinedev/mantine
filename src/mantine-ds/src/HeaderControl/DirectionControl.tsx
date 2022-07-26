import React from 'react';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons';
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
        <IconTextDirectionLtr size={22} stroke={1.5} />
      ) : (
        <IconTextDirectionRtl size={22} stroke={1.5} />
      )}
    </HeaderControl>
  );
}
