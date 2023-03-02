import React from 'react';
import { rem } from '@mantine/core';
import { HeaderControl } from './HeaderControl';
import { GithubIcon } from '../Icons';

interface GithubControlProps {
  link: string;
}

export function GithubControl({ link }: GithubControlProps) {
  return (
    <HeaderControl tooltip="Source code" component="a" href={link}>
      <GithubIcon size={rem(22)} />
    </HeaderControl>
  );
}
