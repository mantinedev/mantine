import React from 'react';
import { HeaderControl } from './HeaderControl';
import { GithubIcon } from '@mantinex/dev-icons';

interface GithubControlProps {
  link: string;
}

export function GithubControl({ link }: GithubControlProps) {
  return (
    <HeaderControl tooltip="Source code" component="a" href={link}>
      <GithubIcon size={22} />
    </HeaderControl>
  );
}
