import React from 'react';
import { rem } from '@mantine/core';
import { HeaderControl } from './HeaderControl';
import { DiscordIcon } from '../Icons';
import { meta } from '../meta';

export function DiscordControl() {
  return (
    <HeaderControl
      tooltip="Discord"
      component="a"
      href={meta.discordLink}
      sx={(theme) => ({
        color: theme.white,
        backgroundColor: meta.discordColor,
        borderColor: meta.discordColor,

        ...theme.fn.hover({
          backgroundColor: theme.fn.lighten(meta.discordColor, 0.1),
        }),
      })}
    >
      <DiscordIcon size={rem(20)} />
    </HeaderControl>
  );
}
