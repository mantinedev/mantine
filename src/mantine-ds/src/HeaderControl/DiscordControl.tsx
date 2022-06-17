import React from 'react';
import { HeaderControl } from './HeaderControl';
import { DiscordIcon } from '../Icons';

export function DiscordControl() {
  return (
    <HeaderControl
      tooltip="Discord"
      component="a"
      href="https://discord.gg/eUZpPbpxb4"
      sx={(theme) => ({
        color: theme.white,
        backgroundColor: '#5865f2',
        borderColor: '#5865f2',

        ...theme.fn.hover({
          backgroundColor: theme.fn.lighten('#5865f2', 0.1),
        }),
      })}
    >
      <DiscordIcon size={20} />
    </HeaderControl>
  );
}
