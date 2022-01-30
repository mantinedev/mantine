import React from 'react';
import { upperFirst } from '@mantine/hooks';
import { ExternalLinkIcon } from '@modulz/radix-icons';
import { MantineIcon } from '../icons/MantineIcon';
import { NpmIcon } from '../icons/NpmIcon';

export function getDependencyInfo(url: string) {
  if (url.startsWith('/core') || url.startsWith('/hooks') || url.startsWith('/others')) {
    const _name = url.split('/')[2];
    const name = url.startsWith('/hooks') ? _name : _name.split('-').map(upperFirst).join('');

    return {
      name,
      url: `https://mantine.dev${url}`,
      icon: <MantineIcon color="blue" />,
    };
  }

  if (url.startsWith('/component')) {
    return {
      name: url.split('/')[2].split('-').map(upperFirst).join(''),
      url,
      icon: <MantineIcon color="cyan" />,
    };
  }

  if (url.startsWith('https://')) {
    const _name = url.replace('https://', '').replace('www.', '');
    const name = _name.endsWith('/') ? _name.slice(0, -1) : _name;
    return {
      name,
      url,
      icon: <ExternalLinkIcon />,
    };
  }

  return {
    name: url,
    url: `https://www.npmjs.com/package/${url}`,
    icon: <NpmIcon />,
  };
}
