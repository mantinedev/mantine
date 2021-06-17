import React from 'react';
import { Button, Tooltip, ActionIcon, DEFAULT_THEME } from '@mantine/core';
import { EnvelopeOpenIcon } from '@modulz/radix-icons';
import { MarkGithubIcon } from '@primer/octicons-react';
import { TwitterIcon } from './TwitterIcon';
import { DiscordIcon } from './DiscordIcon';

interface SocialButtonProps extends Omit<React.ComponentProps<'button'>, 'type'> {
  type?: 'small' | 'large';
  service: 'github' | 'twitter' | 'discord' | 'email';
}

const data = {
  email: {
    icon: EnvelopeOpenIcon,
    label: 'Join email newsletter',
    link: 'https://buttondown.email/mantine',
    color: DEFAULT_THEME.colors.blue[6],
  },

  github: {
    icon: MarkGithubIcon,
    label: 'Source code',
    link: 'https://github.com/mantinedev/mantine',
    color: '#000',
  },

  discord: {
    icon: DiscordIcon,
    label: 'Join Discord server',
    link: 'https://discord.gg/eUZpPbpxb4',
    color: '#7289da',
  },

  twitter: {
    icon: TwitterIcon,
    label: 'Follow Mantine on Twitter',
    link: 'https://twitter.com/mantinedev',
    color: '#00acee',
  },
};

export function SocialButton({ type = 'large', service, style, ...others }: SocialButtonProps) {
  const serviceData = data[service];

  if (type === 'large') {
    return (
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href={serviceData.link}
        leftIcon={<serviceData.icon style={{ width: 14, marginRight: 5 }} />}
        style={{
          ...style,
          backgroundColor: serviceData.color,
          textShadow: 'unset',
          border: 0,
          height: 42,
          paddingLeft: 20,
          paddingRight: 20,
        }}
        {...others}
      >
        {serviceData.label}
      </Button>
    );
  }

  return (
    <Tooltip
      style={style}
      label={serviceData.label}
      className={others.className}
      withArrow
      position="bottom"
      placement="end"
    >
      <ActionIcon
        style={{ ...style, backgroundColor: serviceData.color, color: '#fff' }}
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href={serviceData.link}
      >
        <serviceData.icon style={{ width: 14, height: 14 }} />
      </ActionIcon>
    </Tooltip>
  );
}
