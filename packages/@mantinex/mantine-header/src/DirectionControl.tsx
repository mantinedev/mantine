import { TextAlignLeftIcon, TextAlignRightIcon } from '@phosphor-icons/react';
import { rem, useDirection } from '@mantine/core';
import { HeaderControl } from './HeaderControl';

export function DirectionControl() {
  const { toggleDirection, dir } = useDirection();
  return (
    <HeaderControl
      onClick={() => toggleDirection()}
      tooltip={`${dir === 'ltr' ? 'RTL' : 'LTR'} direction`}
    >
      {dir === 'rtl' ? (
        <TextAlignLeftIcon style={{ width: rem(22), height: rem(22), pointerEvents: 'none' }} />
      ) : (
        <TextAlignRightIcon style={{ width: rem(22), height: rem(22), pointerEvents: 'none' }} />
      )}
    </HeaderControl>
  );
}
