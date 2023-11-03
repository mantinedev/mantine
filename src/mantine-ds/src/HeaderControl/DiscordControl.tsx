import React from 'react';
import { HeaderControl } from './HeaderControl';
import { DiscordIcon } from '../Icons';
import { meta } from '../meta';
import classes from './DiscordControl.module.css';

interface DiscordControlProps {
  link?: string;
}

export function DiscordControl({ link = meta.discordLink }: DiscordControlProps) {
  return (
    <HeaderControl tooltip="Discord" component="a" href={link} className={classes.discord}>
      <DiscordIcon size={20} />
    </HeaderControl>
  );
}
